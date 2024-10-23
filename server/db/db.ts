import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { usersTable } from "./schema/users";
import { complexes } from "./schema/complexes";
import { buildings } from "./schema/buildings";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: { ...usersTable, ...complexes, ...buildings },
});
