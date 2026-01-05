import { addRollingAvgDifference } from "./rollingAvg";

describe("addRollingAvgDifference", () => {
  const diffMatrix = [
    { month: "01", actual: 1, forecast: 1, difference: 0 },
    { month: "02", actual: 2, forecast: 1, difference: 1 },
    { month: "03", actual: 3, forecast: 1, difference: 2 },
    { month: "04", actual: 4, forecast: 1, difference: 3 }
  ];

  it("sets avgDiff3 to null for first two rows", () => {
    const result = addRollingAvgDifference(diffMatrix);

    expect(result[0].avgDiff3).toBeNull();
    expect(result[1].avgDiff3).toBeNull();
  });

  it("calculates rolling average from last 3 differences", () => {
    const result = addRollingAvgDifference(diffMatrix);

    expect(result[2].avgDiff3).toBe(1);
    expect(result[3].avgDiff3).toBe(2);
  });
});
