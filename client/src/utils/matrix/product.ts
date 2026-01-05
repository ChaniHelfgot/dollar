export function buildProductMatrix(
  rows: {
    difference: number;
    forecast: number;
  }[]
) {
  return rows.map(r => r.difference * r.forecast);
}
