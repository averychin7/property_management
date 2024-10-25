import { db } from "../../db/db";
import { residentRegistrations } from "../../db/schema/residentRegistrations";
import { findBuildingById } from "../buildings/dal";
import { TResidentRegistration, TResidentRegisterForm } from "./types";

export const accessCodeValidation = async (
  buildingId: string,
  accessCode: string
): Promise<boolean> => {
  const building = await findBuildingById(buildingId);

  // compare both of the access code
  if (building.accessCode === accessCode) {
    return true;
  }

  return false;
};

/**
 *
 * @returns
 *   null : no resident created
 *
 */
export const createResidentForm = async (formData: TResidentRegisterForm) => {
  // validate access code
  const isValidAccessCode = await accessCodeValidation(
    formData.buildingId,
    formData.accessCode
  );

  if (!isValidAccessCode) {
    return { success: false, message: "Invalid Access Code" };
  }

  const registered = await db
    .insert(residentRegistrations)
    .values({
      ...formData,
      submittedAt: new Date(),
      updatedAt: new Date(),
      status: "Under Review",
    })
    .returning({ insertedId: residentRegistrations.id });

  return { success: true, data: registered, message: "Resident registered!" };
};
