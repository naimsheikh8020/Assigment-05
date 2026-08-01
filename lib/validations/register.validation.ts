import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, "Name must be at least 3 characters"),

  email: z
    .email("Please enter a valid email")
    .trim(),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
      "Must contain uppercase, lowercase, number and special character"
    ),

  role: z.enum(["CUSTOMER", "PROVIDER"]),
});

export type RegisterFormData = z.infer<typeof registerSchema>;