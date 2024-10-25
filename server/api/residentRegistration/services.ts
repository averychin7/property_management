import * as residentRegistrationDAL from "./dal";
import { findBuildingById } from "../buildings/dal";
import { TResidentRegisterForm } from "./types";

const validateAccessCode = async (
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
 * Create A resident registration entry
 * @returns
 *   null : no resident created
 *
 */
export const registerResident = async (formData: TResidentRegisterForm) => {
  const isValidAccessCode = await validateAccessCode(
    formData.buildingId,
    formData.accessCode
  );

  if (!isValidAccessCode) {
    return { success: false, message: "Invalid Access Code" };
  }

  const registered = await residentRegistrationDAL.createRegistration(formData);

  return { success: true, data: registered, message: "Resident registered!" };
};

export const allRegisterResidents = async () => {
  const allRegisteredResidents =
    await residentRegistrationDAL.findAllResidentRegistration();
  return { success: true, data: allRegisteredResidents };
};
