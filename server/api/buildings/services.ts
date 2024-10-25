import { NewBuilding } from "./types";
import { db } from "../../db/db";
import { complexes } from "../../db/schema/complexes";
import { eq, sql } from "drizzle-orm";
import * as buildingDAL from "./dal";
/**
 * Add one building
 */
export const addBuilding = async (data: NewBuilding) => {
  try {
    const newBuilding = await buildingDAL.createSingleBuilding(data);

    // update complexes building count
    await db
      .update(complexes)
      .set({ noOfBuildings: sql`${complexes.noOfBuildings} + 1` })
      .where(eq(complexes.id, data.complexId));

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

  const newBuildings = await buildingDAL.createMulitpleBuildings(buildingList);

  return newBuildings;
};

/**
 * Fetch all the buildings
 */
export const fetchAllBuilding = async () => {
  try {
    const allBuildings = await buildingDAL.findAllBuildings();

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
    const singleBuilding = await buildingDAL.findBuildingById(buildingId);
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
    const complexBuildings = await buildingDAL.findBuildingsByComplexId(
      complexId
    );
    return complexBuildings;
  } catch (error) {
    throw error;
  }
};
