import { eq } from "drizzle-orm";
import { db } from "../../db/db";
import { residentRegistrations } from "../../db/schema/residentRegistrations";
import { buildings } from "../../db/schema/buildings";

// stub this layer to test it
export const createRegistration = async (residentForm: any) => {
  const registered = await db
    .insert(residentRegistrations)
    .values({
      ...residentForm,
      submittedAt: new Date(),
      updatedAt: new Date(),
      status: "Under Review",
    })
    .returning();

  return registered[0];
};

export const findAllResidentRegistration = async () => {
  const allResidentRegistration = await db.query.residentRegistrations.findMany(
    { with: { building: true } }
  );
  return allResidentRegistration;
};

export const findResidentRegistrationById = async (registeredId: string) => {
  const registered = await db
    .select()
    .from(residentRegistrations)
    .where(eq(residentRegistrations.id, registeredId));
  return registered[0];
};
