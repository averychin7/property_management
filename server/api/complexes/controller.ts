import { NextFunction, Request, Response } from "express";
import { addComplex, fetchAllComplex } from "./services";

export const complexCreation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { complex, buildingList } = req.body;

    const newComplex = await addComplex(complex, buildingList);

    res.status(200).json({ success: true, data: newComplex });
  } catch (error) {
    res.status(500);
  }
};

export const buildingComplexList = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      await fetchAllComplex();
    }

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500);
  }
};
