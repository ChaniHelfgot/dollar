export function addRollingAvgDifference(
  diffMatrix: {
    month: string;
    actual: number;
    forecast: number;
    difference: number;
  }[]
) {
  return diffMatrix.map((row, i) => {
    if (i < 2) {
      return { ...row, avgDiff3: null };
    }

    const last3 = diffMatrix.slice(i - 2, i + 1);
    const avgDiff3 =
      last3.reduce((s, r) => s + r.difference, 0) / 3;

    return { ...row, avgDiff3 };
  });
}
