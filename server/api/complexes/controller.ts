import { NextFunction, Request, Response } from "express";
import { addComplex, fetchAllComplex, fetchSingleComplex } from "./services";
import { NewBuilding } from "../buildings/types";

export const complexCreation = async (req: Request, res: Response) => {
  const { complex, buildingList } = req.body;

  // data validation
  // complex need to have name
  if (complex.name === "") {
    res
      .status(400)
      .json({ success: false, message: "Complex name is required" });
    return;
  }

  // make sure all the building has a name
  const emptyNameBuildings = buildingList.filter(
    (b: NewBuilding) => b.name === ""
  );
  if (emptyNameBuildings.length > 0) {
    res
      .status(400)
      .json({ success: false, message: "Building name is required" });
    return;
  }

  const newComplex = await addComplex(complex, buildingList);

  res.status(200).json({ success: true, data: newComplex });
};

export const allComplexes = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    let allComplexes;
    if (!id) {
      allComplexes = await fetchAllComplex();
    }

    res.status(200).json({ success: true, data: allComplexes });
  } catch (error) {
    res.status(500);
  }
};

export const singleComplex = async (req: Request, res: Response) => {
  try {
    const { complexId } = req.params;
    const complex = await fetchSingleComplex(complexId);

    res.status(200).json({ success: true, data: complex });
  } catch (error) {
    res.status(500);
  }
};
