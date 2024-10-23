import { relations } from "drizzle-orm";
import {
  integer,
  pgTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { residentRegistrations } from "./residentRegistrations";
import { complexes } from "./complexes";

export const buildings = pgTable("buildings", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  type: text("type").notNull(), // all residentials
  accessCode: text("access_code").notNull(),
  complexId: text("complex_id")
    .notNull()
    .references(() => complexes.id),
  noOfUnits: integer("no_of_units"),
  noOfFloors: integer("no_of_floors"),
  createdAt: timestamp("created_at", { mode: "date" }).notNull(),
  updatedAt: timestamp("updated_at", { mode: "date" }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  // createdby, updatedBy - when have users
});

export const buildingRelations = relations(buildings, ({ many, one }) => ({
  residents: many(residentRegistrations),
  complex: one(complexes, {
    fields: [buildings.complexId],
    references: [complexes.id],
  }),
}));
