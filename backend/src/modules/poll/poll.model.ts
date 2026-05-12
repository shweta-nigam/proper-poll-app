import { Schema, model } from "mongoose";

const optionSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    _id: false,
  }
);

const questionSchema = new Schema(
  {
    questionText: {
      type: String,
      required: true,
      trim: true,
    },

    isRequired: {
      type: Boolean,
      default: false,
    },

    options: {
      type: [optionSchema],
      required: true,
    },
  },
  {
    _id: true,
  }
);

const pollSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    createdBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    allowAnonymous: {
      type: Boolean,
      default: true,
    },

    expiryDate: {
      type: Date,
      required: true,
    },

    isPublished: {
      type: Boolean,
      default: false,
    },

    totalResponses: {
      type: Number,
      default: 0,
    },

    questions: {
      type: [questionSchema],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Poll = model("Poll", pollSchema);

export default Poll;