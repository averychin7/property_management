import { buildings } from "../../db/schema/buildings";

export enum BUILDING_TYPE {
  "Condominium",
  "Apartment",
  //... other types such as commercial, hotel
}

export type NewBuilding = typeof buildings.$inferInsert;

export type Building = typeof buildings.$inferSelect;
