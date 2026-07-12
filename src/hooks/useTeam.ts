import { useQuery } from "@tanstack/react-query";
import { getTeam } from "@/services/team.service";

export function useTeam() {
  return useQuery({
    queryKey: ["team"],
    queryFn: getTeam,
  });
}
