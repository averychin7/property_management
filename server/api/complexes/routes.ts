import { Router } from "express";
import * as complexes from "./controller";

const router = Router();

router.post("/create", complexes.complexCreation);

router.get("/", async function (req, res) {
  res.send({ path: "/api/", status: "ok" });
});

export default router;
