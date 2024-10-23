import { Request, Response, NextFunction } from "express";
import {
  addBuilding,
  fetchAllBuilding,
  fetchBuildingDetails,
  fetchComplexBuilding,
} from "./services";
import { NewBuilding } from "./types";

export const buildingCreation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, complexId, accessCode, noOfUnits, noOfFloors, address } =
      req.body;

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
      complexId,
    };

    const building = await addBuilding(buildingData);

    // return building + access code
    res.status(200).json({ success: true, data: building });
  } catch (error: any) {
    res.status(500).json({ success: false, error: error, message: `` });
  }
};

export const buildingList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const buildings = await fetchAllBuilding();

    res.status(200).json({ success: true, data: buildings });
  } catch (error) {
    res.status(500).json({ success: false, error: error, message: `` });
  }
};

export const singleBuilding = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { buildingId } = req.params;
    const buildings = await fetchBuildingDetails(buildingId);

    res.status(200).json({ success: true, data: buildings });
  } catch (error) {
    res.status(500).json({ success: false, error: error, message: `` });
  }
};

export const complexBuildingList = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { complexId } = req.params;
    const buildings = await fetchComplexBuilding(complexId);

    res.status(200).json({ success: true, data: buildings });
  } catch (error) {
    res.status(500).json({ success: false, error: error, message: `` });
  }
};
