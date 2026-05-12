

import { Types } from "mongoose";

export interface PollOption {
  text: string;
}

export interface PollQuestion {
  questionText: string;
  isRequired: boolean;
  options: PollOption[];
}

export interface PollDocument {
  title: string;
  description?: string;
  createdBy: Types.ObjectId;
  allowAnonymous: boolean;
  expiryDate: Date;
  isPublished: boolean;
  totalResponses: number;
  questions: PollQuestion[];
}
export type PollParams = {
  pollId: string;
};