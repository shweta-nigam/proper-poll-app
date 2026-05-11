import {
  NextFunction,
  Request,
  Response,
} from "express";

import ApiError from "../../common/utils/api-error.js";

import {
  verifyAccessToken,
} from "../../common/utils/jwt-utils.js";

import type { UserRole } from "./auth.types.js";

/* Protect Routes */

const protect = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
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

  try {
    const decoded =
      verifyAccessToken(token);

    req.user = decoded;

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