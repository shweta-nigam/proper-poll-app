import { z } from "zod";

export const createResponseSchema = z.object({
  body: z.object({
    pollId: z
      .string()
      .min(1, "Poll ID is required"),

    selectedOption: z
      .string()
      .min(
        1,
        "Selected option is required"
      ),
  }),
});