import { Request, Response, NextFunction } from "express";
import * as ResidentRegistrationService from "./services";
import { TResidentRegisterForm } from "./types";

/**
 * Create a Resident Registration Entry
 */
export const residentRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const registerData: TResidentRegisterForm = req.body;

  await ResidentRegistrationService.registerResident(registerData);

  res.status(200).json({ success: true });
  try {
  } catch (error) {
    res.status(500);
  }
};

export const allRegisteredResidentList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const allRegisteredList =
      await ResidentRegistrationService.allRegisterResidents();

    res.status(200).json({ success: true, data: allRegisteredList });
  } catch (error) {
    res.status(500);
  }
};
