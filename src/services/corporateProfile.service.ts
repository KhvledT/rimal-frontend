import { httpClient } from "./httpClient";

export interface CorporateProfileMetadata {
  previewUrl: string;
  originalFilename: string;
  mimeType: string;
  size: number;
  updatedAt: string;
}

interface CorporateProfileResponse {
  message: string;
  result: CorporateProfileMetadata;
}

export async function getCorporateProfile(): Promise<CorporateProfileMetadata> {
  const response = await httpClient.get<CorporateProfileResponse>("/corporate-profile");
  return response.result;
}

export function getProfileDownloadUrl(): string {
  const baseUrl = import.meta.env.VITE_API_URL ?? "";
  return `${baseUrl}/corporate-profile/download`;
}
