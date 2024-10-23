import { Router } from "express";
import * as complexesController from "./controller";
const router = Router();

router.get("/", complexesController.buildingComplexList);
router.post("/create", complexesController.complexCreation);
router.get("/status", async function (req, res) {
  res.send({ path: "/api/", status: "ok" });
});

export default router;
