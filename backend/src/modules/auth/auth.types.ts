import { Types } from "mongoose";

export type UserRole = "user" | "admin";

export interface IUser {
  _id: Types.ObjectId;

  name: string;
  username: string;
  email: string;
  password: string;

  avatar?: {
    url: string;
    publicId?: string;
  };

  bio?: string;

  role: UserRole;

  isVerified: boolean;

  refreshToken?: string;

  passwordResetToken?: string;
  passwordResetExpires?: Date;

  preferences?: {
    theme?: "light" | "dark";
    notifications?: boolean;
  };

  createdAt: Date;
  updatedAt: Date;
}

export interface AccessTokenPayload {
  id: string;
  email: string;
  role: UserRole;
}

export interface RefreshTokenPayload {
  id: string;
}

export type RegisterUserInput = Pick<
  IUser,
  "name" | "username" | "email" | "password" | "role"
>;

export type LoginUserInput = Pick<
  IUser,
  "email" | "password"
>;

export type UpdateProfileInput = Partial<
  Pick<IUser, "name" | "username" | "bio" | "avatar">
>;
