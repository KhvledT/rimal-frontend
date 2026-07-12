import { useQuery } from "@tanstack/react-query";
import { getCorporateProfile } from "@/services/corporateProfile.service";

export function useCorporateProfile() {
  return useQuery({
    queryKey: ["corporate-profile"],
    queryFn: getCorporateProfile,
  });
}
