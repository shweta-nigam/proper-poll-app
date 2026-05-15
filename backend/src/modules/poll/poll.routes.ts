import { Router } from "express";

import validate from "../../common/middleware/validate.js";
import { protect } from "../auth/auth.middleware.js"

import pollController from "./poll.controller.js";
import { createPollSchema } from "./poll.validation.js";

const router = Router();

// router.post(
//   "/", authMiddleware, roleMiddleware, 
//   validate(createPollSchema),
//   pollController.createPoll
// );

router.post(
  "/", protect, 
  validate(createPollSchema),
  pollController.createPoll
);

router.get(
  "/", protect, 
  pollController.getAllPolls
);

router.get(
  "/:pollId",
  pollController.getSinglePoll
);

export default router;