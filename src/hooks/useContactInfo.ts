import { useQuery } from "@tanstack/react-query";
import { getContactInfo } from "@/services/contactService";

export function useContactInfo() {
  return useQuery({
    queryKey: ["contact-info"],
    queryFn: getContactInfo,
  });
}
