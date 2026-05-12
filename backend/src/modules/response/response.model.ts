import { Schema, model } from "mongoose";

import { ResponseDocument } from "./response.types.js";

const answerSchema = new Schema(
  {
    questionId: {
      type: String,
      required: true,
      trim: true,
    },
    selectedOption: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const responseSchema =
  new Schema<ResponseDocument>(
    {
      pollId: {
        type: Schema.Types.ObjectId,
        ref: "Poll",
        required: true,
      },

      selectedOption: {
        type: String,
        required: true,
      },

      submittedBy: {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    },
    {
      timestamps: true,
    }
  );

const Response = model<ResponseDocument>(
  "Response",
  responseSchema
);

export default Response;