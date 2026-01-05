import { getMonthlyRates } from "./rate.services";
import { pool } from "../db/db";

jest.mock("../db/db", () => ({
    pool: {
        query: jest.fn(),
    },
}));

describe("getMonthlyRates", () => {
    test("returns rows from DB", async () => {
        (pool.query as jest.Mock).mockResolvedValue({
            rows: [{ month: "2023-01", avg_rate: 3.4480 }],
        });

        const result = await getMonthlyRates();

        expect(pool.query).toHaveBeenCalled();
        expect(result).toEqual([{ month: "2023-01", avg_rate: 3.4480 }]);
    });
});


