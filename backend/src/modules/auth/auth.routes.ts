import { Router } from "express";

import * as authController from "./auth.controller.js";

const router = Router();

router.post("/register", authController.register);

router.post("/login", authController.login);

router.post(
  "/refresh-token",
  authController.refreshAccessToken
);

router.post("/logout", authController.logout);

router.post(
  "/forgot-password",
  authController.forgotPassword
);

router.post(
  "/reset-password",
  authController.resetPassword
);

export default router;