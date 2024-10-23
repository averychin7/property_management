import { Router } from "express";
import * as building from "./controller";

const router = Router();

router.get("/all", building.buildingList);
router.post("/create", building.buildingCreation);
router.get("/status", async function (req, res) {
  res.send({ path: "/api/building", status: "ok" });
});
router.get("/complex/:complexId", building.complexBuildingList);
router.get("/:buildingId", building.singleBuilding);

export default router;
