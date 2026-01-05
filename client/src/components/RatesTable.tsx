import { MonthlyRate } from "../types";

export default function RatesTable({
  data,
  disableColors
}: {
  data: MonthlyRate[];
  disableColors: boolean;
}) {
  const values = data.map(d => Number(d.avg_rate));
  const min = Math.min(...values);
  const max = Math.max(...values);

  return (
    <table>
      <thead>
        <tr>
          <th>Month</th>
          <th>Average Rate</th>
        </tr>
      </thead>
      <tbody>
        {data.map(row => {
          const value = Number(row.avg_rate);

          let cls = "";
          if (!disableColors) {
            if (value === min) cls = "low";
            if (value === max) cls = "high";
          }

          return (
            <tr key={row.month} className={cls}>
              <td>{row.month}</td>
              <td>{value.toFixed(4)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
