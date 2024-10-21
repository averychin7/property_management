import { relations } from "drizzle-orm";
import { pgTable, text } from "drizzle-orm/pg-core";
import { buildings } from "./buildings";

export const complexes = pgTable("complexes", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
});

export const complexRelations = relations(complexes, ({ many }) => ({
  buildings: many(buildings),
}));
