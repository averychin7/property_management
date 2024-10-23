import { NewBuilding } from "./types";
import { db } from "../../db/db";
import { buildings } from "../../db/schema/buildings";
import { complexes } from "../../db/schema/complexes";
import { eq, sql } from "drizzle-orm";

/**
 * Add one building
 */
export const addBuilding = async (data: NewBuilding) => {
  try {
    const newBuilding = await db
      .insert(buildings)
      .values({ ...data, createdAt: new Date(), updatedAt: new Date() })
      .returning();

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

  const newBuildings = await db
    .insert(buildings)
    .values(buildingList)
    .returning();

  return newBuildings;
};

/**
 * Edit building
 */
export const editBuilding = async () => {
  // await db.update(buildings).set
};

/**
 * Delete building
 */
export const deleteBuilding = async () => {};

/**
 * Fetch all the buildings
 */
export const fetchAllBuilding = async () => {
  try {
    const allBuildings = await db.select().from(buildings);

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
    const singleBuilding = await db
      .select()
      .from(buildings)
      .where(eq(buildings.id, buildingId));
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
    const complexBuildings = await db
      .select()
      .from(buildings)
      .where(eq(buildings.complexId, complexId));
    return complexBuildings;
  } catch (error) {
    throw error;
  }
};
