import { db } from "../../db/db";
import { complexes } from "../../db/schema/complexes";
import { sql, eq } from "drizzle-orm";
import { NewComplex } from "./types";

export const updateBuildingCountInComplex = async (complexId: string) => {
  await db
    .update(complexes)
    .set({ noOfBuildings: sql`${complexes.noOfBuildings} + 1` })
    .where(eq(complexes.id, complexId));

  return;
};

export const createSingleComplex = async (
  complex: NewComplex,
  noOfBuildings: number
) => {
  const newComplex = await db
    .insert(complexes)
    .values({ ...complex, noOfBuildings })
    .returning();

  return newComplex[0];
};

export const findAllComplexes = async () => {
  const allComplexes = await db.select().from(complexes);
  return allComplexes;
};

export const findComplexesById = async (complexId: string) => {
  const singleComplex = await db
    .select()
    .from(complexes)
    .where(eq(complexes.id, complexId));
  return singleComplex[0];
};
