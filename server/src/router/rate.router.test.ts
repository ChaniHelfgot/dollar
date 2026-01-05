import request from "supertest";
import express from "express";
import ratesRoutes from "./rate.routes";

// ⬅️ זה החלק הקריטי
jest.mock("../services/rate.services", () => ({
  getMonthlyRates: jest.fn().mockResolvedValue([
    { month: "2023-01", avg_rate: 3.45 },
    { month: "2023-02", avg_rate: 3.50 },
  ]),
}));

const app = express();
app.use("/api/rates", ratesRoutes);

test("GET /api/rates/monthly returns 200 and data", async () => {
  const res = await request(app).get("/api/rates/monthly");

  expect(res.status).toBe(200);
  expect(res.body).toEqual([
    { month: "2023-01", avg_rate: 3.45 },
    { month: "2023-02", avg_rate: 3.50 },
  ]);
});
