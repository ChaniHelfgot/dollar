import { MonthlyRate } from "../types";

type Props = {
  data: MonthlyRate[];
};

export default function Forecast({ data }: Props) {
  if (data.length < 3) return null;

  const last3 = data.slice(-3);
  const avg =
    last3.reduce((sum, m) => sum + Number(m.avg_rate), 0) / 3;

  return (
    <div className="forecast">
      <h3>Next Month Forecast</h3>
      <p>{avg.toFixed(4)}</p>
    </div>
  );
}
