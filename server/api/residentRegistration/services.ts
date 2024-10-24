import { db } from "../../db/db";
import { residentRegistrations } from "../../db/schema/residentRegistrations";
import { TResidentRegistration, TResidentRegisterForm } from "./types";
import { accessCodeValidation } from "./validation";

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

  // todo: add in users

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
