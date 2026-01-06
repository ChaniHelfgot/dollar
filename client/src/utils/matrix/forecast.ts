import { MonthlyRate } from '../../types';

export function buildForecastMatrix(data: MonthlyRate[]) {
  return data.slice(3).map((row, i) => {
    const prev3 = data.slice(i, i + 3);
    const forecast =
      prev3.reduce((s, m) => s + Number(m.avg_rate), 0) / 3;

    return {
      month: row.month,
      actual: Number(row.avg_rate),
      forecast
    };
  });
}
