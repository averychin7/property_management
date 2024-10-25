import { NewBuilding } from "./types";
import * as buildingsDAL from "./dal";
import * as complexesDAL from "../complexes/dal";
/**
 * Add one building
 */
export const addBuilding = async (data: NewBuilding) => {
  try {
    const newBuilding = await buildingsDAL.createSingleBuilding(data);

    await complexesDAL.updateBuildingCountInComplex(data.complexId);

    return newBuilding;
  } catch (error: any) {
    throw error;
  }
};

/**
 * Add mulitple building in one complex
 */
export const addMultiBuilding = async (buildingList: NewBuilding[]) => {
  buildingList.map((b) => {
    b.createdAt = new Date();
    b.updatedAt = new Date();
  });

  const newBuildings = await buildingsDAL.createMulitpleBuildings(buildingList);

  return newBuildings;
};

/**
 * Fetch all the buildings
 */
export const fetchAllBuilding = async () => {
  try {
    const allBuildings = await buildingsDAL.findAllBuildings();

    return allBuildings;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch single building details
 * @param buildingId
 * @returns
 */
export const fetchSingleBuilding = async (buildingId: string) => {
  try {
    const singleBuilding = await buildingsDAL.findBuildingById(buildingId);
    return singleBuilding;
  } catch (error) {
    throw error;
  }
};

/**
 * Fetch buildings that is belongs to a complex
 */
export const fetchComplexBuilding = async (complexId: string) => {
  try {
    const complexBuildings = await buildingsDAL.findBuildingsByComplexId(
      complexId
    );
    return complexBuildings;
  } catch (error) {
    throw error;
  }
};
