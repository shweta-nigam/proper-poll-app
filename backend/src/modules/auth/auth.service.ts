import crypto from "crypto";
import bcrypt from "bcrypt"
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
import { OAuth2Client } from "google-auth-library";

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

  const existingUser = await User.findOne({ email })

  if (existingUser) {
    throw ApiError.conflict(
      "Email already exists"
    )
  }

  const user = await User.create({
    name,
    username,
    email,
    password,
    role,
  })

  const token = crypto.randomBytes(32).toString("hex")

  user.verificationToken = token;

  await user.save();

  const verifyUrl =
    `${process.env.SERVER_URL}/api/v1/auth/verify-email/${token}`;

  await sendEmail({
    to: user.email,

    subject: "Verify Email",

    html: `
      <h1>Verify Email</h1>

      <a href="${verifyUrl}">
        Verify Account
      </a>
    `,
  });



  return {
    message: "User registered successfully. Please verify your email.",
    user,
  };

};


const verifyEmail = async (token: string) => {


  const user = await User.findOne({ verificationToken: token })

  if (!user) {
    throw ApiError.badRequest(
      "Invalid token"
    )
  }

  user.isVerified = true

  user.verificationToken = null;

  await user.save()

  return {
    user
  }

}



const login = async ({
  email,
  password,
}: LoginUserInput) => {

  const user = await User.findOne({
    email
  }).select("+password")

  if (!user) {
    throw ApiError.notFound(
      "User not found"
    )
  }

  const isMatch = await bcrypt.compare(password, user.password)

  if (!isMatch) {
    throw ApiError.unauthorized(
      "Invalid email or password"
    );
  }

  if (!user.isVerified) {
    throw ApiError.forbidden(
      "Please verify email first"
    );
  }

  // generate token

  const accessToken = generateAccessToken({
    id: user._id.toString(),
    role: user.role,
    email: user.email
  });

  return {
    user: {
      id: user._id,
      name: user.name,
      email: user.email,
      role: user.role
    },

    accessToken
  }

}

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



const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID
);

const googleLogin = async (
  token: string
) => {
  console.log(
    "google login started in service of backend"
  );

  const ticket =
    await client.verifyIdToken({
      idToken: token,
      audience:
        process.env.GOOGLE_CLIENT_ID,
    });

  const payload =
    ticket.getPayload();

  if (
    !payload ||
    !payload.email
  ) {
    throw ApiError.unauthorized(
      "Invalid Google token"
    );
  }

  let user =
    await User.findOne({
      email: payload.email,
    });

  if (!user) {
    user = await User.create({
      name:
        payload.name ||
        "Google User",

      email: payload.email,

      username: `${payload.email.split("@")[0]}_${Date.now()}`,

      avatar: {
        url:
          payload.picture ||
          "",

        publicId: "",
      },

      googleId: payload.sub,

      authProvider:
        "google",

      isVerified: true,

      password: crypto
        .randomBytes(32)
        .toString("hex"),
    });
  }

  if (
    user &&
    !user.googleId
  ) {
    user.googleId =
      payload.sub;

    user.authProvider =
      "google";

    await user.save();
  }


  const accessToken =
    generateAccessToken({
      id: user._id.toString(),

      email: user.email,

      role: user.role,
    });

  const refreshToken =
    generateRefreshToken({
      id: user._id.toString(),
    });

  return {
    user,
    accessToken,
    refreshToken,
  };
};



export {
  register,
  login,
  refreshAccessToken,
  logout,
  forgotPassword,
  googleLogin,
  verifyEmail
};