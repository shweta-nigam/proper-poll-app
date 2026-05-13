
import api from "./axios.js";

export interface CreateResponseData {
  pollId: string;
  selectedOption: string;
  submittedBy?: string;
}

export const createResponse = async (
  data: CreateResponseData
) => {
  const response = await api.post(
    "/responses",
    data
  );

  return response.data;
};

export const getResponsesByPoll =
  async (pollId: string) => {
    const response = await api.get(
      `/responses/poll/${pollId}`
    );

    return response.data;
  };

export const getPollAnalytics =
  async (pollId: string) => {
    const response = await api.get(
      `/responses/analytics/${pollId}`
    );

    return response.data;
  };