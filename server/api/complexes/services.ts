import { NewComplex } from "./types";
import { db } from "../../db/db";
import { complexes } from "../../db/schema/complexes";
import { NewBuilding } from "../buildings/types";
import { addMultiBuilding } from "../buildings/services";
import { buildings } from "../../db/schema/buildings";
import { eq } from "drizzle-orm";

/**
 * Add a complex
 */
export const addComplex = async (
  data: NewComplex,
  buildingList: NewBuilding[]
) => {
  const complex = await db
    .insert(complexes)
    .values({ ...data, noOfBuildings: buildingList.length })
    .returning({ insertedId: complexes.id });

  // add complexId to each buildings
  buildingList.map((b) => {
    b.complexId = complex[0].insertedId;
    b.type = "Condominium";
  });

  const newBuildings = await addMultiBuilding(buildingList);

  return { complexId: complex[0].insertedId, buildingList: newBuildings };
};

export const fetchAllComplex = async () => {
  const allComplexes = await db
    .select()
    .from(complexes)
    .rightJoin(buildings, eq(complexes.id, buildings.complexId));

  // group the sql return data to [{complex: {} , buildings: []}]

  console.log(allComplexes);
  return;
};