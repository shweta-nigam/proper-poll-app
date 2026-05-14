import { Router } from "express";

import * as authController from "./auth.controller.js";
import { authMiddleware } from "../../common/middleware/auth.middleware.js";

const router = Router();

router.post("/register", authController.register);

router.post("/login", (req, res, next) => {
  console.log(
    "LOGIN ROUTE HIT"
  );

  next();
}, authController.login);

router.post(
  "/refresh-token",
  authController.refreshAccessToken
);

router.post("/logout", authMiddleware, authController.logout);

router.post(
  "/google",
  authController.googleLogin
);



export default router;