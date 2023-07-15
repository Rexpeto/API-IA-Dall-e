import { Router } from "express";
import { messageDalle } from "../controllers/dalle.ctrl.js";

const router = Router();

router.route("/").get(messageDalle);

export default router;
