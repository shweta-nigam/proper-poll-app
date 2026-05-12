import Response from "./response.model.js";

import ApiError from "../../common/utils/api-error.js";

import {
  CreateResponseInput,
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

export default {
  createResponse,
  getResponsesByPoll,
};