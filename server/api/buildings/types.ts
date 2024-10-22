import { buildings } from "../../db/schema/buildings";

export enum BUILDING_TYPE {
  "Condominium",
  "Apartment",
  //... other types such as commercial, hotel
}

// create building input
export type NewBuilding = typeof buildings.$inferInsert;
