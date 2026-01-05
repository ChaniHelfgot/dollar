import { buildProductMatrix } from "./product";

describe("buildProductMatrix", () => {
  it("returns product of difference and forecast", () => {
    const rows = [
      { difference: 2, forecast: 3 },
      { difference: -1, forecast: 4 }
    ];

    const result = buildProductMatrix(rows);

    expect(result).toEqual([6, -4]);
  });

  it("returns empty array when input is empty", () => {
    expect(buildProductMatrix([])).toEqual([]);
  });
});
