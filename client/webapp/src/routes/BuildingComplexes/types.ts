export type TBuilding = {
  id?: string;
  name: string;
  address: string;
  accessCode: string;
  noOfUnits: number;
  noOfFloors: number;
};

export type TComplex = {
  id?: string;
  name: string;
  noOfBuildings: number;
};
