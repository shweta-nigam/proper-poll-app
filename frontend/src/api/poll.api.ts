import api from "./axios.js"

export interface PollOption {
  text: string;
}

export interface PollQuestion {
  questionText: string;
  isRequired: boolean;
  options: PollOption[];
}

export interface CreatePollData {
  title: string;
  description: string;
  allowAnonymous: boolean;
  expiryDate: string;
  questions: PollQuestion[];
}

export const createPoll = async (
  data: CreatePollData
) => {
const token = localStorage.getItem("accessToken")

  const response = await api.post(
    "/polls",
    data, {
      headers: {
        Authorization:`Bearer ${token}`,
      }
    }
  );

  return response.data;
};

export const getAllPolls = async () => {
  const response = await api.get(
    "/polls"
  );

  return response.data;
};

export const getSinglePoll = async (
  pollId: string
) => {
  const response = await api.get(
    `/polls/${pollId}`
  );

  return response.data;
};