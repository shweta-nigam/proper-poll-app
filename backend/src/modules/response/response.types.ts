import { Document, Types } from "mongoose";

export interface CreateResponseInput {
  pollId: string;
  selectedOption: string;
  submittedBy?: string;
}

export interface ResponseDocument extends Document {
  pollId: Types.ObjectId;
  selectedOption: string;
  submittedBy?: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetResponsesParams {
  pollId: string;
}

