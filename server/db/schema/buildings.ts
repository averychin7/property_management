import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { residentRegistrations } from "./residentRegistrations";
import { complexes } from "./complexes";

export const buildings = pgTable("buildings", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  type: text("type").notNull(),
  accessCode: text("access_code").notNull(),
  complexId: text("complex_id"),
});

export const buildingRelations = relations(buildings, ({ many, one }) => ({
  residents: many(residentRegistrations),
  complex: one(complexes, {
    fields: [buildings.complexId],
    references: [complexes.id],
  }),
}));
