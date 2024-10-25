import { Router } from "express";
import * as ResidentRegController from "./controllers";

const router = Router();

router.post("/create", ResidentRegController.residentRegistration);
router.get("/all", ResidentRegController.allRegisteredResidentList);
router.get("/status", async function (req, res) {
  res.send({ path: "/api/resident-registration", status: "ok" });
});
export default router;
