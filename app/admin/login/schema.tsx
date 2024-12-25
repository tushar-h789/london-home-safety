import { z } from "zod";

// Zod schema
export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

// Infer the type from the schema
export type LoginFormValues = z.infer<typeof loginSchema>;
