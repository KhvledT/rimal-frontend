import { httpClient } from "./httpClient";
import type { ProfileData } from "@/types/profile";

interface TeamResponse {
  message: string;
  result: ProfileData[];
}

export async function getTeam(): Promise<ProfileData[]> {
  const response = await httpClient.get<TeamResponse>("/team");
  return response.result;
}
