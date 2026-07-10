import { httpClient } from "./httpClient";
import type { ContactFormData } from "@/schemas/contactSchema";

/**
 * Contact service — Submits contact form details.
 * Connects to the backend via httpClient when VITE_API_URL is configured,
 * otherwise falls back to a mock submission with visual latency.
 */
export async function submitContact(data: ContactFormData): Promise<void> {
  const isApiConfigured = !!import.meta.env.VITE_API_URL;

  if (isApiConfigured) {
    return httpClient.post<void>("/contact", data);
  }

  // Mock fallback for local development
  console.info("[contactService] Submitting contact form (mock):", data);
  await new Promise((resolve) => setTimeout(resolve, 600));
}
