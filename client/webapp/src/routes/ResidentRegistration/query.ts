import { useMutation, useQuery } from "@tanstack/react-query";
import { TResidentRegisterForm } from "./types";

export const useAllBuilding = () =>
  useQuery({
    queryKey: ["all_buildings"],
    queryFn: async () => {
      const response = await fetch("/api/buildings/all");
      const responseData = await response.json();
      const data = responseData.data;
      return data;
    },
  });

export const useResidentRegForm = () =>
  useMutation({
    mutationFn: async (formData: TResidentRegisterForm) => {
      return fetch("/api/resident-registration/create", {
        body: JSON.stringify(formData),
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
    },
  });

export const useAllRegisteredResident = () =>
  useQuery({
    queryKey: ["all_registered_resident"],
    queryFn: async () => {
      const response = await fetch("/api/resident-registration/all");
      const responseData = await response.json();
      const data = responseData.data;
      return data.data;
    },
  });
