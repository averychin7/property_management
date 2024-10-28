import { NewComplex } from "./types";
import * as complexesDAL from "./dal";

import { NewBuilding } from "../buildings/types";
import { addMultiBuilding } from "../buildings/services";

/**
 * Add a complex
 * @param {NewComplex} data - single new complex
 * @param {NewBuilding[]} buildingList - a list of buildings (can be empty)
 */

export const addComplex = async (
  data: NewComplex,
  buildingList: NewBuilding[]
) => {
  const complex = await complexesDAL.createSingleComplex(
    data,
    buildingList.length
  );

  if (!complex.success) {
    return { success: false, message: complex.errMessage };
  }

  if (buildingList.length < 0) {
    return {
      success: true,
      data: { complexId: complex.data.id, buildingList: [] },
    };
  }

  buildingList.map((b) => {
    b.complexId = complex.data.id;
    b.type = "Condominium";
  });
  const newBuildings = await addMultiBuilding(buildingList);

  return {
    success: true,
    data: {
      complexId: complex.data.id,
      buildingList: newBuildings,
    },
  };
};

export const fetchAllComplex = async () => {
  const allComplexes = await complexesDAL.findAllComplexWithBuildings();
  return allComplexes;
};

export const fetchSingleComplex = async (complexId: string) => {
  const singleComplex = await complexesDAL.findComplexesById(complexId);
  return singleComplex;
};
