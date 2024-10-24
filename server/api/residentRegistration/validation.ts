import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { buildings } from "../../db/schema/buildings";

export const accessCodeValidation = async (
  buildingId: string,
  accessCode: string
): Promise<boolean> => {
  // find the building's access code
  const building = await db
    .select({ accessCode: buildings.accessCode })
    .from(buildings)
    .where(eq(buildings.id, buildingId));

  // compare both of the access code
  if (building[0].accessCode === accessCode) {
    return true;
  }

  return false;
};
