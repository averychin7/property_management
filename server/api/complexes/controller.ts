import { NextFunction, Request, Response } from "express";
import { addComplex } from "./services";

export const complexCreation = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { complex, buildingList } = req.body;

  const newComplex = await addComplex(complex, buildingList);

  res.status(200).json({ success: true, data: newComplex });
  try {
  } catch (error) {
    res.status(500);
  }
};
