import { NextFunction, Request, Response } from "express";
import { addComplex, fetchAllComplex, fetchSingleComplex } from "./services";

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
