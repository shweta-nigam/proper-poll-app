import { Router } from "express";

import responseController from "./response.controller.js";

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

export default router;