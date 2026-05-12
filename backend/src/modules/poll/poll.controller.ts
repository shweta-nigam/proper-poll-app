import { Request, Response } from "express";

import pollService from "./poll.service.js";

import type {
  PollDocument,
  PollParams,
} from "./poll.types.js";
import ApiResponse from "../../common/utils/api-response.js";

const createPoll = async (
  req: Request<
    Record<string, never>,
    Record<string, never>,
    PollDocument
  >,
  res: Response
): Promise<void> => {
  // const userId = req.user.id;  

  // console.log("-------------  create poll in controller")
  const userId =  "68218d447c3f2e9f45e8a333";   // temp work

  const poll =
    await pollService.createPoll(
      req.body,
      userId
    );

    // console.log("poll created,  in controller----------->>>", poll)


    ApiResponse.created(res, "Poll created successfully ", poll)
  


};

const getAllPolls = async (
  _req: Request,
  res: Response
): Promise<void> => {
  const polls =
    await pollService.getAllPolls();

ApiResponse.ok(res, "Fetched polls successfully", polls)
};

const getSinglePoll = async (
  req: Request<PollParams>,
  res: Response
): Promise<void> => {
  const poll =
    await pollService.getSinglePoll(
      req.params.pollId
    );

ApiResponse.ok(res, "Fetched poll successfully", poll)
};

export default {
  createPoll,
  getAllPolls,
  getSinglePoll,
};
