import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { buildings } from "../../db/schema/buildings";
import { Building, NewBuilding } from "./types";

// Find Queries
/**
 * Find single building by building id
 * @param {string} buildingId
 * @returns {Promise<Building>} single building
 */
export const findBuildingById = async (
  buildingId: string
): Promise<Building> => {
  const building = await db
    .select()
    .from(buildings)
    .where(eq(buildings.id, buildingId));

  return building[0];
};

/**
 * Find all buildings
 * @returns {Promise<Building[]>} a list of all buildings
 */
export const findAllBuildings = async (): Promise<Building[]> => {
  const allBuildings = await db.select().from(buildings);
  return allBuildings;
};

/**
 * Find all buildings that belongs to a complex
 * @param {string} complexId
 * @returns {Promise<Building[]>} single or multiple buildings that belongs to the complex
 */
export const findBuildingsByComplexId = async (
  complexId: string
): Promise<Building[]> => {
  const complexBuildings = await db
    .select()
    .from(buildings)
    .where(eq(buildings.complexId, complexId));
  return complexBuildings;
};

// Create Commands
/**
 * Create a single building in database
 * @param {NewBuilding} buildingData
 * @returns {Promise<Building>} single created building
 */
export const createSingleBuilding = async (
  buildingData: NewBuilding
): Promise<Building> => {
  const newBuilding = await db
    .insert(buildings)
    .values({ ...buildingData, createdAt: new Date(), updatedAt: new Date() })
    .returning();

  return newBuilding[0];
};

/**
 * Create multiple building
 * @param {NewBuilding[]}buildingList
 * @returns {Promise<Building[]>} the created list of buildings
 */
export const createMulitpleBuildings = async (
  buildingList: NewBuilding[]
): Promise<Building[]> => {
  const newBuildings = await db
    .insert(buildings)
    .values(buildingList)
    .returning();
  return newBuildings;
};
