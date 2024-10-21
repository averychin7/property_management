import { date, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { properties } from "./properties";
import { usersTable } from "./users";
import { relations } from "drizzle-orm";

export const residentRegistration = pgTable("residentRegistration", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  propertyId: text("property_id")
    .notNull()
    .references(() => properties.id),
  userId: text("user_id")
    .notNull()
    .references(() => usersTable.id),
  unitNo: text("unit_no").notNull(),
  ownership: varchar("ownership", { length: 255 }),
  submittedAt: date("sumittedAt"),
  updatedAt: date("updatedAt"),
  updatedBy: text("updatedBy")
    .notNull()
    .references(() => usersTable.id),
  status: text("status"),
});

export const residentRegRelations = relations(
  residentRegistration,
  ({ one }) => ({
    property: one(properties, {
      fields: [residentRegistration.propertyId],
      references: [properties.id],
    }),
    user: one(usersTable, {
      fields: [residentRegistration.userId],
      references: [usersTable.id],
    }),
  })
);
