export type Building = {
  id?: string;
  name: string;
  address: string;
  accessCode: string;
  noOfUnits: number;
  noOfFloors: number;
};

export type Complex = {
  id?: string;
  name: string;
  noOfBuildings: number;
};
