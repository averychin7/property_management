import { NewComplex } from "./types";
import { db } from "../../db/db";
import { complexes } from "../../db/schema/complexes";
import { NewBuilding } from "../buildings/types";
import { addMultipleBuilding } from "../buildings/services";

/**
 * Add a complex
 */
export const addComplex = async (
  data: NewComplex,
  buildingList: NewBuilding[]
) => {
  const complex = await db
    .insert(complexes)
    .values(data)
    .returning({ insertedId: complexes.id });

  // add complexId to each buildings
  buildingList.map((b) => {
    b.complexId = complex[0].insertedId;
    b.type = "Condominium";
  });

  const newBuildings = await addMultipleBuilding(buildingList);

  return { complexId: complex[0].insertedId, buildingList: newBuildings };
};
