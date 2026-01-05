export function buildDifferenceMatrix(
  forecastMatrix: {
    month: string;
    actual: number;
    forecast: number;
  }[]
) {
  return forecastMatrix.map(r => ({
    ...r,
    difference: r.actual - r.forecast
  }));
}
