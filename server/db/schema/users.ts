import { relations } from "drizzle-orm";
import { text, pgTable, varchar } from "drizzle-orm/pg-core";
import { residentRegistrations } from "./residentRegistrations";

export const usersTable = pgTable("users", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const userRelations = relations(usersTable, ({ many }) => ({
  residents: many(residentRegistrations),
}));
