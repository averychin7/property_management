import { NewBuilding } from "./types";
import { db } from "../../db/db";
import { buildings } from "../../db/schema/buildings";

/**
 * Create one building
 * @param {buildingInfo}
 * @returns
 */
export const createBuilding = async (data: NewBuilding) => {
  const building = await db
    .insert(buildings)
    .values(data)
    .returning({ insertedId: buildings.id });
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
