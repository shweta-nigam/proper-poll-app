import Poll from "./poll.model.js";

import type {  PollDocument } from "./poll.types.js";

const createPoll = async (
  payload: PollDocument,
  userId: string
) => {
  // console.log("poll crate service")
  const poll = await Poll.create({
    ...payload,
    createdBy: userId,
  });

  //  console.log("poll crate service - after poll created", poll)
  return poll;
};

const getAllPolls = async () => {
  const polls = await Poll.find().sort({
    createdAt: -1,
  });

  return polls;
};

const getSinglePoll = async (
  pollId: string
) => {
  const poll = await Poll.findById(
    pollId
  );

  return poll;
};

export default {
  createPoll,
  getAllPolls,
  getSinglePoll,
};