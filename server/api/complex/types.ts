import { complexes } from "../../db/schema/complexes";

export type NewComplex = typeof complexes.$inferInsert;
