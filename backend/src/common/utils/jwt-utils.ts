import crypto from "crypto";

import jwt from "jsonwebtoken";

type AccessTokenPayload = {
  id: string;
  email: string;
  role: "user" | "admin";
};

type RefreshTokenPayload = {
  id: string;
};

const generateAccessToken = (
  payload: AccessTokenPayload
) => {
  return jwt.sign(
    payload,
    process.env.JWT_ACCESS_SECRET as string,
    {
      expiresIn:
        process.env.JWT_ACCESS_EXPIRES_IN ||
        "15m",
    }
  );
};

const verifyAccessToken = (
  token: string
) => {
  return jwt.verify(
    token,
    process.env.JWT_ACCESS_SECRET as string
  ) as AccessTokenPayload;
};

const generateRefreshToken = (
  payload: RefreshTokenPayload
) => {
  return jwt.sign(
    payload,
    process.env.JWT_REFRESH_SECRET as string,
    {
      expiresIn:
        process.env.JWT_REFRESH_EXPIRES_IN ||
        "7d",
    }
  );
};

const verifyRefreshToken = (
  token: string
) => {
  return jwt.verify(
    token,
    process.env.JWT_REFRESH_SECRET as string
  ) as RefreshTokenPayload;
};

const generateResetToken = () => {
  const rawToken = crypto
    .randomBytes(32)
    .toString("hex");

  const hashedToken = crypto
    .createHash("sha256")
    .update(rawToken)
    .digest("hex");

  return {
    rawToken,
    hashedToken,
  };
};

export {
  generateAccessToken,
  verifyAccessToken,
  generateRefreshToken,
  verifyRefreshToken,
  generateResetToken,
};

export type {
  AccessTokenPayload,
  RefreshTokenPayload,
};