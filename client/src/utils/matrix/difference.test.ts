import { buildDifferenceMatrix } from "./difference";

describe("buildDifferenceMatrix", () => {
  it("adds difference field correctly", () => {
    const input = [
      { month: "04", actual: 4, forecast: 2 },
      { month: "05", actual: 5, forecast: 3 }
    ];

    const result = buildDifferenceMatrix(input);

    expect(result).toEqual([
      { month: "04", actual: 4, forecast: 2, difference: 2 },
      { month: "05", actual: 5, forecast: 3, difference: 2 }
    ]);
  });
});
