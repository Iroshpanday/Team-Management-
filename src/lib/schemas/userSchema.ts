import { z } from "zod";

// Validate phone number (simple regex for digits, optional)
const phoneRegex = /^\+?[0-9\s-]{7,15}$/;

// Validate website (basic URL check)
const websiteSchema = z.string().url({ message: "Invalid website URL" }).optional();

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().regex(phoneRegex, "Invalid phone number").optional(),
  website: websiteSchema,
});

// TypeScript type
export type User = z.infer<typeof UserSchema>;
