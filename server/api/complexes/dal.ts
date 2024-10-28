import { db } from "../../db/db";
import { complexes } from "../../db/schema/complexes";
import { sql, eq, DrizzleError } from "drizzle-orm";
import { Complex, NewComplex } from "./types";
import { DataAccessResponse } from "../../types/DataAccessResponse";

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
): Promise<DataAccessResponse<Complex, DrizzleError>> => {
  try {
    const newComplex = await db
      .insert(complexes)
      .values({ ...complex, noOfBuildings })
      .returning();

    return { success: true, data: newComplex[0] };
  } catch (error: any) {
    if (error.code === "23505") {
      return {
        success: false,
        errMessage: "Duplicated Complex",
        errDetails: error,
      };
    }
    return {
      success: false,
      errMessage: error.message,
      errDetails: error,
    };
  }
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

export const findAllComplexWithBuildings = async () => {
  const allComplexes = await db.query.complexes.findMany({
    with: { buildings: true },
  });
  return allComplexes;
};
