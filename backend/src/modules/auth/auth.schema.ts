import { z } from "zod";

export const registerSchema = z.object({
  body: z.object({
    name: z
      .string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(50, "Name cannot exceed 50 characters"),

    username: z
      .string()
      .trim()
      .min(3, "Username must be at least 3 characters")
      .max(30, "Username cannot exceed 30 characters")
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      ),

    email: z.email("Invalid email address"),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(100, "Password is too long"),
  }),
});

export const loginSchema = z.object({
  body: z.object({
    email: z.email("Invalid email address"),

    password: z.string().min(1, "Password is required"),
  }),
});

export const updateProfileSchema = z.object({
  body: z.object({
    name: z.string().trim().min(2).max(50).optional(),

    username: z
      .string()
      .trim()
      .min(3)
      .max(30)
      .regex(/^[a-zA-Z0-9_]+$/)
      .optional(),

    bio: z
      .string()
      .max(200, "Bio cannot exceed 200 characters")
      .optional(),

    avatar: z
      .object({
        url: z.url(),
        publicId: z.string(),
      })
      .optional(),
  }),
});

export const forgotPasswordSchema = z.object({
  body: z.object({
    email: z.email("Invalid email address"),
  }),
});

export const resetPasswordSchema = z.object({
  body: z.object({
    password: z
      .string()
      .min(8, "Password must be at least 8 characters"),
  }),
});

export type RegisterInput =
  z.infer<typeof registerSchema>["body"];

export type LoginInput =
  z.infer<typeof loginSchema>["body"];

export type UpdateProfileInput =
  z.infer<typeof updateProfileSchema>["body"];