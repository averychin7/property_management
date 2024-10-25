import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { buildings } from "../../db/schema/buildings";
import { NewBuilding } from "./types";

export const findBuildingById = async (buildingId: string) => {
  const building = await db
    .select()
    .from(buildings)
    .where(eq(buildings.id, buildingId));

  return building[0];
};

export const findAllBuildings = async () => {
  const allBuildings = await db.select().from(buildings);
  return allBuildings;
};

export const findBuildingsByComplexId = async (complexId: string) => {
  const complexBuildings = await db
    .select()
    .from(buildings)
    .where(eq(buildings.complexId, complexId));
  return complexBuildings;
};

export const createSingleBuilding = async (buildingData: NewBuilding) => {
  const newBuilding = await db
    .insert(buildings)
    .values({ ...buildingData, createdAt: new Date(), updatedAt: new Date() })
    .returning();

  return newBuilding;
};

export const createMulitpleBuildings = async (buildingList: NewBuilding[]) => {
  const newBuildings = await db
    .insert(buildings)
    .values(buildingList)
    .returning();
  return newBuildings;
};
