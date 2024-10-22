import { NewBuilding } from "./types";
import { db } from "../../db/db";
import { buildings } from "../../db/schema/buildings";
import { complexes } from "../../db/schema/complexes";

/**
 * Create one building
 * @param {buildingInfo}
 * @returns {array} Array with length 1, building created; length 0 , not created
 */
export const createBuilding = async (data: NewBuilding) => {
  // create complexes here - use the same building name
  const complex = await db
    .insert(complexes)
    .values({ name: data.name })
    .returning({ complexId: complexes.id });

  // create building
  const building = await db
    .insert(buildings)
    .values({ ...data, complexId: complex[0].complexId })
    .returning({ insertedId: buildings.id });

  return building;
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
