import { NewComplex } from "./types";
import * as complexesDAL from "./dal";

import { NewBuilding } from "../buildings/types";
import { addMultiBuilding } from "../buildings/services";

/**
 * Add a complex
 */
export const addComplex = async (
  data: NewComplex,
  buildingList: NewBuilding[]
) => {
  const complex = await complexesDAL.createSingleComplex(
    data,
    buildingList.length
  );

  // add complexId to each buildings
  buildingList.map((b) => {
    b.complexId = complex.id;
    b.type = "Condominium";
  });

  const newBuildings = await addMultiBuilding(buildingList);

  return { complexId: complex.id, buildingList: newBuildings };
};

export const fetchAllComplex = async () => {
  const allComplexes = await complexesDAL.findAllComplexes();
  return allComplexes;
};

export const fetchSingleComplex = async (complexId: string) => {
  const singleComplex = await complexesDAL.findComplexesById(complexId);
  return singleComplex;
};
