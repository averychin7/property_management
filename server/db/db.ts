import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import * as usersTable from "./schema/users";
import * as complexes from "./schema/complexes";
import * as buildings from "./schema/buildings";
import * as residentRegRelations from "./schema/residentRegistrations";

export const db = drizzle(process.env.DATABASE_URL!, {
  schema: {
    ...usersTable,
    ...complexes,
    ...buildings,
    ...residentRegRelations,
  },
});
