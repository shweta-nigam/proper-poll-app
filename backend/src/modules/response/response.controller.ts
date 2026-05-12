import { Request, Response } from "express";

import responseService from "./response.service.js";

import ApiResponse from "../../common/utils/api-response.js";

import type {
  CreateResponseInput,
  GetResponsesParams,
} from "./response.types.js";
import ApiError from "../../common/utils/api-error.js";

const createResponse = async (
  req: Request<{}, {}, CreateResponseInput>,
  res: Response
): Promise<void> => {

     console.log("response in controller")

  const response =
    await responseService.createResponse({
      pollId: req.body.pollId,
      selectedOption:
        req.body.selectedOption,
      submittedBy: req.user?.id,
    });

  ApiResponse.created(
    res,
    "Response submitted successfully",
    response
  );
};

const getResponsesByPoll = async (
  req: Request<GetResponsesParams>,
  res: Response
): Promise<void> => {
  const responses =
    await responseService.getResponsesByPoll(
      req.params.pollId
    );

  ApiResponse.ok(
    res,
    "Responses fetched successfully",
    responses
  );
};

const getPollAnalytics = async (
  req: Request,
  res: Response
): Promise<void> => {

  const { pollId } = req.params;

  if (
    !pollId ||
    Array.isArray(pollId)
  ) {
    throw ApiError.badRequest(
      "Invalid poll ID"
    );
  }

  const analytics =
    await responseService.getPollAnalytics(
      pollId
    );

   ApiResponse.ok(
    res,
    "analytics fetched successfully",
    analytics
  );
};

export default {
  createResponse,
  getResponsesByPoll,
  getPollAnalytics
};