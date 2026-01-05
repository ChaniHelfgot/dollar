import { fetchMonthlyRates } from "./rate.controllers";
import * as service from "../services/rate.services";

describe("fetchMonthlyRates", () => {
  test("returns data as json", async () => {
    jest.spyOn(service, "getMonthlyRates").mockResolvedValue([
      { month: "2023-01", avg_rate: 3.4480 },
    ]);

    const req: any = {};
    const res: any = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };

    await fetchMonthlyRates(req, res);

    expect(res.json).toHaveBeenCalledWith([
      { month: "2023-01", avg_rate: 3.4480 },
    ]);
  });
});
