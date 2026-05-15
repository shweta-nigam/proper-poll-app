import {
  NextFunction,
  Request,
  Response,
} from "express";

import ApiError from "../../common/utils/api-error.js";

import {
  verifyAccessToken,
} from "../../common/utils/jwt-utils.js";

import User from "./auth.model.js";

import type { UserRole } from "./auth.types.js";

/* Protect Routes */

const protect = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  try {
    const authHeader =
      req.headers.authorization;

    if (
      !authHeader ||
      !authHeader.startsWith("Bearer ")
    ) {
      return next(
        ApiError.unauthorized(
          "Access token missing"
        )
      );
    }

    const token =
      authHeader.split(" ")[1];

    const decoded =
      verifyAccessToken(token);

    const user = await User.findById(
      decoded.id
    ).select("-password");

    if (!user) {
      return next(
        ApiError.unauthorized(
          "User not found"
        )
      );
    }

    req.user = user;

    next();
  } catch {
    next(
      ApiError.unauthorized(
        "Invalid or expired token"
      )
    );
  }
};

/* Role Based Access */

const authorize = (
  ...roles: UserRole[]
) => {
  return (
    req: Request,
    _res: Response,
    next: NextFunction
  ) => {
    if (
      !req.user ||
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
};

export { protect, authorize };