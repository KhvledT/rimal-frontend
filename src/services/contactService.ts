import { httpClient } from "./httpClient";
import type { ContactFormData } from "@/schemas/contactSchema";

export interface ContactInfo {
  _id: string;
  address: string;
  emails: string[];
  phones: string[];
  linkedIn: string;
  mapUrl: string;
}

interface ContactInfoResponse {
  message: string;
  result: ContactInfo;
}

interface ContactSubmitResponse {
  message: string;
  result: unknown;
}

/**
 * Fetches company contact details from the backend.
 */
export async function getContactInfo(): Promise<ContactInfo> {
  const response = await httpClient.get<ContactInfoResponse>("/contact-info");
  return response.result;
}

/**
 * Submits a contact inquiry to the backend.
 */
export async function submitContact(data: ContactFormData): Promise<void> {
  await httpClient.post<ContactSubmitResponse>("/contact", data);
}
