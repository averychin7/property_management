import { useQuery } from "@tanstack/react-query";

export const useAllComplexes = () =>
  useQuery({
    queryKey: ["all_complexes"],
    queryFn: async () => {
      const response = await fetch("/api/complexes/all");
      const responseData = await response.json();
      const data = responseData.data;
      return data;
    },
  });
