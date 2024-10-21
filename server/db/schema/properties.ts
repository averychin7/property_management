import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { residentRegistration } from "./residentRegistration";

export const properties = pgTable("properties", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name").notNull(),
  type: text("type").notNull(),
  sharedPropertyId: text("shared_property_id"), // self loop if shared properties
  accessCode: text("access_code").notNull(),
});

export const propertyRelations = relations(properties, ({ many }) => ({
  residents: many(residentRegistration),
}));
