import { Router } from "express";

import validate from "../../common/middleware/validate.js";
import { authMiddleware, roleMiddleware } from "../../common/middleware/auth.middleware.js";

import pollController from "./poll.controller.js";
import { createPollSchema } from "./poll.validation.js";

const router = Router();

// router.post(
//   "/", authMiddleware, roleMiddleware, 
//   validate(createPollSchema),
//   pollController.createPoll
// );

router.post(
  "/", authMiddleware, 
  validate(createPollSchema),
  pollController.createPoll
);

router.get(
  "/", authMiddleware, 
  pollController.getAllPolls
);

router.get(
  "/:pollId",
  pollController.getSinglePoll
);

export default router;