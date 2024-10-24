import { Request, Response, NextFunction } from "express";
import { createResidentForm } from "./services";
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

  await createResidentForm(registerData);

  res.status(200).json({ success: true });
  try {
  } catch (error) {
    res.status(500);
  }
};
