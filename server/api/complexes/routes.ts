import { Router } from "express";
import * as complexesController from "./controller";
const router = Router();

router.get("/all", complexesController.allComplexes);
router.post("/create", complexesController.complexCreation);
router.get("/status", async function (req, res) {
  res.send({ path: "/api/", status: "ok" });
});
router.get("/:complexId", complexesController.singleComplex);
export default router;
