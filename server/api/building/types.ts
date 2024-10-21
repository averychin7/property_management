export enum BUILDING_TYPE {
  "Condominium",
  "Apartment",
  //... other types such as commercial, hotel
}

// create building input
export type buildingInput = {
  name: string;
  type: BUILDING_TYPE;
  sharedProperty?: string;
  accessCode?: string;
};
