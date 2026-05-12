import { Router } from "express";

import validate from "../../common/middleware/validate.js";

import pollController from "./poll.controller.js";
import { createPollSchema } from "./poll.validation.js";

const router = Router();

router.post(
  "/",
  validate(createPollSchema),
  pollController.createPoll
);

router.get(
  "/",
  pollController.getAllPolls
);

router.get(
  "/:pollId",
  pollController.getSinglePoll
);

export default router;