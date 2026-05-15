import { Router } from "express";

import responseController from "./response.controller.js";
import { protect } from "../auth/auth.middleware.js"

import validate from "../../common/middleware/validate.js";

import { createResponseSchema } from "./response.validation.js";

const router = Router();

router.post(
  "/",
  validate(createResponseSchema),
  responseController.createResponse
);

router.get(
  "/poll/:pollId",
  responseController.getResponsesByPoll
);

// router.get(
//   "/analytics/:pollId", authMiddleware, roleMiddleware,
//   responseController.getPollAnalytics
// );

router.get(
  "/analytics/:pollId", protect,
  responseController.getPollAnalytics
);

export default router;