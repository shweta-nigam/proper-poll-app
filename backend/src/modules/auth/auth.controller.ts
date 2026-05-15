import { NextFunction, Request, Response } from "express";

import * as authService from "./auth.service.js";

import ApiResponse from "../../common/utils/api-response.js";
import ApiError from "../../common/utils/api-error.js";

const register = async (
  req: Request,
  res: Response
) => {
  const result = await authService.register(
    req.body
  );

  ApiResponse.created(
    res,
    "User registered successfully",
    result
  );
};

const login = async (
  req: Request,
  res: Response
) => {
  const result = await authService.login(
    req.body
  );

  ApiResponse.ok(
    res,
    "Login successful",
    result
  );
};

const verifyEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const {token} = req.params;
  
    await authService.verifyEmail(token as string);
  
    res.redirect(process.env.CLIENT_URL!)
  } catch (error) {
    next(error);
  }

}

const logout = async (
  req: Request,
  res: Response
) => {
  const userId = req.user.id;

  const result = await authService.logout(
    userId
  );

  ApiResponse.ok(
    res,
    result.message
  );
};



const refreshAccessToken = async (
  req: Request,
  res: Response
) => {
  const { refreshToken } = req.body;

  const result =
    await authService.refreshAccessToken(
      refreshToken
    );

  ApiResponse.ok(
    res,
    "Access token refreshed successfully",
    result
  );
};



const googleLogin = async (
  req: Request,
  res: Response
) => {
  try {
    console.log(
      "google login started"
    );

    const result =
      await authService.googleLogin(
        req.body.token
      );

    ApiResponse.ok(
      res,
      "Google login successful",
      result
    );
  } catch (error) {
    console.log(error);

   throw ApiError.badRequest(
      "Google login failed",
      error
    );
  }
};


export {
  register,
  login,
  refreshAccessToken,
  logout,
  googleLogin,
  verifyEmail
};