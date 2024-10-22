import { NewComplex } from "./types";
import { db } from "../../db/db";
import { complexes } from "../../db/schema/complexes";

/**
 * Create a complex
 */
export const createComplex = async (data: NewComplex) => {
  const complex = await db
    .insert(complexes)
    .values(data)
    .returning({ insertedId: complexes.id });

  return complex[0];
};
