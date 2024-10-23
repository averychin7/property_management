import { Router } from "express";
import * as buildingController from "./controller";

const router = Router();

router.get("/all", buildingController.allBuildings);
router.post("/create", buildingController.buildingCreation);
router.get("/status", async function (req, res) {
  res.send({ path: "/api/building", status: "ok" });
});
router.get("/complex/:complexId", buildingController.complexBuildingList);
router.get("/:buildingId", buildingController.singleBuilding);

export default router;
