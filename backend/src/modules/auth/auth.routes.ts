import { Router } from "express";

import * as authController from "./auth.controller.js";
import { protect,} from "./auth.middleware.js";
import validate from "./auth.validator.js";
import { loginSchema, registerSchema } from "./auth.schema.js";

const router = Router();

router.post("/register", validate(registerSchema), authController.register);

router.get("/verify-email/:token", authController.verifyEmail)

router.post("/login", validate(loginSchema), authController.login);

router.post(
  "/refresh-token",
  authController.refreshAccessToken
);

router.post("/logout", protect, authController.logout);

router.post(
  "/google",
  authController.googleLogin
);



export default router;