import { NewBuilding } from "./types";
import { db } from "../../db/db";
import { buildings } from "../../db/schema/buildings";

/**
 * Add one building
 */
export const addBuilding = async (data: NewBuilding) => {
  // create building
  const newBuilding = await db
    .insert(buildings)
    .values({ ...data, createdAt: new Date(), updatedAt: new Date() })
    .returning({ insertedId: buildings.id });

  return newBuilding;
};

/**
 * Add buildings in bulk
 */
export const addMultipleBuilding = async (buildingList: NewBuilding[]) => {
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
 * All Building
 */
export const getAllBuilding = async () => {};
