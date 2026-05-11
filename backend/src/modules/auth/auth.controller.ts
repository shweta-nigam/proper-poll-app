import { Request, Response } from "express";

import * as authService from "./auth.service.js";

import ApiResponse from "../../common/utils/api-response.js";

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

const forgotPassword = async (
  req: Request,
  res: Response
) => {
  const { email } = req.body;

  const result =
    await authService.forgotPassword(
      email
    );

  ApiResponse.ok(
    res,
    result.message,
    {
      resetToken: result.resetToken,
    }
  );
};

const resetPassword = async (
  req: Request,
  res: Response
) => {
  const { token, password } = req.body;

  const result =
    await authService.resetPassword(
      token,
      password
    );

  ApiResponse.ok(
    res,
    result.message
  );
};

export {
  register,
  login,
  refreshAccessToken,
  logout,
  forgotPassword,
  resetPassword,
};