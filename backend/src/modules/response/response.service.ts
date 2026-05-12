import Response from "./response.model.js";

import ApiError from "../../common/utils/api-error.js";
import { io } from "../../server.js"

import {
  CreateResponseInput,
  PollAnalytics,
  ResponseDocument,
} from "./response.types.js";

const createResponse = async ({
  pollId,
  selectedOption,
  submittedBy,
}: CreateResponseInput): Promise<ResponseDocument> => {

  console.log(
    "response in service",
    pollId,
    selectedOption
  );

  if (!pollId) {
    throw ApiError.badRequest(
      "Poll ID is required"
    );
  }

  const response = await Response.create({
    pollId,
    selectedOption,
    submittedBy,
  });

  const totalResponses =  await Response.countDocuments({pollId})

io.to(pollId.toString()).emit(
  "pollUpdated",
  {
    pollId,
    totalResponses,
    selectedOption
  }
)

  return response;
};

const getResponsesByPoll = async (
  pollId: string
): Promise<ResponseDocument[]> => {
  if (!pollId) {
    throw ApiError.badRequest(
      "Poll ID is required"
    );
  }

  const responses = await Response.find({
    pollId,
  });

  return responses;
};

const getPollAnalytics = async (
  pollId: string
): Promise<PollAnalytics> => {
  if (!pollId) {
    throw ApiError.badRequest(
      "Poll ID is required"
    );
  }

  // Get all responses
  const responses = await Response.find({
    pollId,
  });

  const totalResponses =
    responses.length;

  // Count votes
  const voteMap: Record<
    string,
    number
  > = {};

  responses.forEach((response) => {
    const option =
      response.selectedOption;

    voteMap[option] =
      (voteMap[option] || 0) + 1;
  });

  // Convert into analytics array
  const options = Object.entries(
    voteMap
  ).map(([option, votes]) => ({
    option,
    votes,
    percentage:
      totalResponses === 0
        ? 0
        : Number(
            (
              (votes /
                totalResponses) *
              100
            ).toFixed(2)
          ),
  }));

  return {
    pollId,
    totalResponses,
    options,
  };
};

export default {
  createResponse,
  getResponsesByPoll,
  getPollAnalytics
};