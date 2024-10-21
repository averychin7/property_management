import { Request, Response, NextFunction } from "express";
import { createBuilding } from "./services";

/**
 * Create a Resident Registration Entry
 */
export const buildingCreation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const body = req.body;
  console.log(body);

  // validation

  // create db entry
  //   const building = await createBuilding();

  res.status(200).json({ success: true });
  try {
  } catch (error) {
    res.status(500);
  }
};
