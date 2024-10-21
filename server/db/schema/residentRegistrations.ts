import { date, pgTable, text, varchar } from "drizzle-orm/pg-core";
import { buildings } from "./buildings";
import { usersTable } from "./users";
import { relations } from "drizzle-orm";

export const residentRegistrations = pgTable("residentRegistrations", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  buildingId: text("building_id")
    .notNull()
    .references(() => buildings.id),
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
  residentRegistrations,
  ({ one }) => ({
    building: one(buildings, {
      fields: [residentRegistrations.buildingId],
      references: [buildings.id],
    }),
    user: one(usersTable, {
      fields: [residentRegistrations.userId],
      references: [usersTable.id],
    }),
  })
);