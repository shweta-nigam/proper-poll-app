import {
  Request,
  Response,
  NextFunction,
} from "express";

import jwt from "jsonwebtoken";

import User from "../../modules/auth/auth.model.js";

import ApiError from "../utils/api-error.js";

interface JwtPayload {
  id: string;
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith(
        "Bearer "
      )
    ) {
      throw ApiError.unauthorized(
        "No token provided"
      );
    }

    const token =
      authHeader.split(" ")[1];

    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as JwtPayload;

    const user = await User.findById(
      decoded.id
    ).select("-password");

    if (!user) {
      throw ApiError.unauthorized(
        "User not found"
      );
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};


export const roleMiddleware =
  (...roles: string[]) =>
  (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    if (!req.user) {
      return next(
        ApiError.unauthorized(
          "Unauthorized"
        )
      );
    }

    if (
      !roles.includes(req.user.role)
    ) {
      return next(
        ApiError.forbidden(
          "Access denied"
        )
      );
    }

    next();
  };
