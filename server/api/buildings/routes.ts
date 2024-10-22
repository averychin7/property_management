import { Router } from "express";
import * as building from "./controller";

const router = Router();

router.post("/create", building.buildingCreation);

router.get("/", async function (req, res) {
  res.send({ path: "/api/building", status: "ok" });
});

export default router;
