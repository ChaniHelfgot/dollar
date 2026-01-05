import { pool } from "./db/db";
function getPreviousMonthRange() {
  const now = new Date();
  console.log("date:", now.toISOString());

  const start = new Date(now.getFullYear(), now.getMonth() - 1, 1);
  const end = new Date(now.getFullYear(), now.getMonth(), 0);
  const fmt = (d: Date) => d.toISOString().split("T")[0];

  return {
    from: fmt(start),
    to: fmt(end),
  };
}
export async function updatePreviousMonth() {
  const { from, to } = getPreviousMonthRange();
  const url = `https://api.frankfurter.app/${from}..${to}?from=USD&to=ILS`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("API failed");

  const data = await res.json();

  for (const [date, value] of Object.entries(data.rates) as any[]) {
    await pool.query(
      `
      INSERT INTO rates (date, rate)
      VALUES ($1, $2)
      ON CONFLICT (date) DO NOTHING
      `,
      [date, value.ILS]
    );
  }

  await pool.query(`
    INSERT INTO monthly_rates (month, avg_rate)
    SELECT
      date_trunc('month', date)::date AS month,
      ROUND(AVG(rate)::numeric, 4)    AS avg_rate
    FROM rates
    WHERE date >= '2023-01-01'
    GROUP BY 1
    ORDER BY 1;
  `);

  const { rows } = await pool.query(`
    SELECT
      TO_CHAR(month, 'YYYY-MM') AS month,
      avg_rate
    FROM monthly_rates
    ORDER BY month;
  `);

  console.table(rows);

  console.log(`Inserted rates for ${from} → ${to}`);
}
