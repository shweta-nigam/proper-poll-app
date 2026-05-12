import { z } from "zod";

const optionSchema = z.object({
  text: z
    .string()
    .trim()
    .min(1, "Option text is required"),
});

const questionSchema = z.object({
  questionText: z
    .string()
    .trim()
    .min(1, "Question is required"),

  isRequired: z.boolean(),

  options: z
    .array(optionSchema)
    .min(2, "At least 2 options required"),
});

export const createPollSchema =
  z.object({
    body: z.object({
      title: z
        .string()
        .trim()
        .min(1, "Title is required"),

      description: z
        .string()
        .trim()
        .optional(),

      allowAnonymous:
        z.boolean(),

      expiryDate: z
        .string(),

      questions: z
        .array(questionSchema)
        .min(
          1,
          "At least 1 question required"
        ),
    }),
  });