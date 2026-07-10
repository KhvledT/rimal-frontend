import { z } from "zod";

/** Validated shape of the contact form payload. */
export const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name must be 100 characters or fewer"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .max(255, "Email must be 255 characters or fewer"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .max(50, "Phone must be 50 characters or fewer"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be 1000 characters or fewer"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
