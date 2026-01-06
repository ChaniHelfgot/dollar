import { Request, Response } from "express";
import { getMonthlyRates } from "../services/rate.services";

export async function fetchMonthlyRates(req: Request, res: Response) {
  try {
    const data = await getMonthlyRates();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "DB error" });
  }
}