import { z } from "zod";

export const UserSchema = z.object({
  id: z.number(),
  name: z.string().min(2, "Name is too short"),
  email: z.string().email(),
  company: z.string().min(2, "Company name is required"),
  phone: z.string().optional(),
  website: z.string().optional(),
});

// type for TS
export type User = z.infer<typeof UserSchema>;
