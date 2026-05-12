import crypto from "crypto";

import ApiError from "../../common/utils/api-error.js";

import {
  generateAccessToken,
  generateRefreshToken,
  generateResetToken,
  verifyRefreshToken,
} from "../../common/utils/jwt-utils.js";

import User from "./auth.model.js";

import type {
  LoginUserInput,
  RegisterUserInput,
} from "./auth.types.js";
import sendEmail from "../../common/utils/send-email.js";


const hashToken = (token: string) =>
  crypto
    .createHash("sha256")
    .update(token)
    .digest("hex");

const register = async ({
  name,
  username,
  email,
  password,
  role,
}: RegisterUserInput) => {

  console.log("register started")

  const existing = await User.findOne({ email });

  if (existing) {
    throw ApiError.conflict(
      "Email already exists"
    );
  }

  const { rawToken, hashedToken } =
    generateResetToken();

  const user = await User.create({
    name,
    username,
    email,
    password,
    role,
    verificationToken: hashedToken,
  });

  console.log("user created ------------", user)

  const verifyUrl =
    `${process.env.CLIENT_URL}/verify-email/${rawToken}`;

  await sendEmail({
    to: user.email,
    subject: "Verify Your Email",
    html: `
      <h1>Verify Email</h1>

      <p>
        Click the link below to verify your email:
      </p>

      <a href="${verifyUrl}">
        Verify Email
      </a>
    `,
  });

  return user;
};







const login = async ({
  email,
  password,
}: LoginUserInput) => {
  const user = await User.findOne({
    email,
  }).select("+password +refreshToken");

  if (!user) {
    throw ApiError.unauthorized(
      "Invalid Email or password"
    );


  }

  // TODO: compare password

  if (!user.isVerified) {
    throw ApiError.forbidden(
      "Please verify your email before login"
    );
  }

  const accessToken =
    generateAccessToken({
      id: user._id.toString(),
      role: user.role,
      email: user.email
    });

  const refreshToken =
    generateRefreshToken({
      id: user._id.toString(),
    });

  user.refreshToken =
    hashToken(refreshToken);

  await user.save({
    validateBeforeSave: false,
  });

  const userObj = user.toObject();

  delete userObj.refreshToken;

  return {
    user: {
      _id: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
    },
    accessToken,
    refreshToken,
  };
};

const refreshAccessToken = async (
  token: string
) => {
  if (!token) {
    throw ApiError.unauthorized(
      "Refresh token missing"
    );
  }

  const decoded =
    verifyRefreshToken(token);

  const user = await User.findById(
    decoded.id
  ).select("+refreshToken");

  if (!user) {
    throw ApiError.unauthorized(
      "User not found"
    );
  }

  if (
    user.refreshToken !==
    hashToken(token)
  ) {
    throw ApiError.unauthorized(
      "Invalid refresh token"
    );
  }

  const accessToken =
    generateAccessToken({
      id: user._id.toString(),
      role: user.role,
      email: user.email
    });

  return { accessToken };
};

const logout = async (
  userId: string
) => {
  await User.findByIdAndUpdate(userId, {
    refreshToken: null,
  });

  return {
    message: "Logged out successfully",
  };
};

const forgotPassword = async (
  email: string
) => {
  const user = await User.findOne({
    email,
  });

  if (!user) {
    throw ApiError.notFound(
      "No account with that email"
    );


  }

  const { rawToken, hashedToken } =
    generateResetToken();

  user.passwordResetToken =
    hashedToken;

  user.passwordResetExpires =
    new Date(
      Date.now() + 15 * 60 * 1000
    );

  await user.save();
  await user.save();

  const resetUrl =
    `${process.env.CLIENT_URL}/reset-password/${rawToken}`;

  await sendEmail({
    to: user.email,
    subject: "Reset Password",
    html: `
    <h1>Reset Password</h1>

    <a href="${resetUrl}">
      Reset Password
    </a>
  `,
  });

  return {
    message:
      "Password reset link sent successfully",
  };

};

export {
  register,
  login,
  refreshAccessToken,
  logout,
  forgotPassword,
};