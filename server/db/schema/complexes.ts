import { relations } from "drizzle-orm";
import { pgTable, text, varchar, integer } from "drizzle-orm/pg-core";
import { buildings } from "./buildings";

export const complexes = pgTable("complexes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar("name", { length: 255 }).notNull(),
});

export const complexRelations = relations(complexes, ({ many }) => ({
  buildings: many(buildings),
}));
