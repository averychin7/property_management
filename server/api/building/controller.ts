import { Request, Response, NextFunction } from "express";
import { createBuilding } from "./services";
import { NewBuilding } from "./types";
import { createComplex } from "../complex/services";

/**
 * Create a Resident Registration Entry
 */
export const buildingCreation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { name, accessCode, noOfUnits, noOfFloors, address } = req.body;

  // validation

  // create building
  const buildingData: NewBuilding = {
    name,
    accessCode,
    type: "Condominium",
    noOfUnits,
    noOfFloors,
    createdAt: new Date(),
    updatedAt: new Date(),
    address,
  };
  const building = await createBuilding(buildingData);

  // return building + access code
  res.status(200).json({ success: true, data: building });
  try {
  } catch (error) {
    res.status(500);
  }
};
