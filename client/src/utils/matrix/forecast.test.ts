import { buildForecastMatrix } from './forecast';
import { MonthlyRate } from '../../types';

describe('buildForecastMatrix', () => {
  const data: MonthlyRate[] = [
    { month: '01', avg_rate: "1" },
    { month: '02', avg_rate: "2" },
    { month: '03', avg_rate: "3" },
    { month: '04', avg_rate: "4" },
    { month: '05', avg_rate: "5" }
  ];

  it('returns empty array if less than 4 rows', () => {
    const result = buildForecastMatrix(data.slice(0, 3));
    expect(result).toEqual([]);
  });

  it('calculates forecast based on previous 3 months', () => {
    const result = buildForecastMatrix(data);

    expect(result).toEqual([
      { month: '04', actual: 4, forecast: 2 },
      { month: '05', actual: 5, forecast: 3 }
    ]);
  });
});
