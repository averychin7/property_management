import { Request, Response, NextFunction } from "express";

/**
 * Create a Resident Registration Entry
 */
const residentRegistration = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { accessCode, fName, lName } = req.body;

  // validation

  // create db entry

  res.status(200);
  try {
  } catch (error) {
    res.status(500);
  }
};
