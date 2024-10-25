export type TResidentRegisterForm = {
  buildingId: string;
  accessCode: string;
  unitNo: string;
  ownership: string;
};

export type TResidentRegistered = {
  id: string;
  unitNo: string;
  buildingId: string;
  userId: string | null;
  ownership: "own" | "lease";
  submittedAt: Date;
  updatedAt: Date;
  updateBy: string | null;
  status: string;
  building: { name: string; type: string };
};
