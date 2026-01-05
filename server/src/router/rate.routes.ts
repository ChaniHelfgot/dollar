import { Router } from "express";
import { fetchMonthlyRates } from "../controllers/rate.controllers";

const router = Router();

router.get("/monthly", fetchMonthlyRates);

export default router;