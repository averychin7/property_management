import { residentRegistrations } from "../../db/schema/residentRegistrations";

export type TResidentRegistration = typeof residentRegistrations.$inferInsert;

export type TResidentRegisterForm = {
  buildingId: string;
  accessCode: string;
  unitNo: string;
  ownership: string;
};
