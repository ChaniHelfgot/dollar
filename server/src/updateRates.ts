import { pool } from "./db";

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

  type RateValue = { ILS: number };

  for (const [date, value] of Object.entries(data.rates) as [string, RateValue][]) {
    await pool.query(
      `
      INSERT INTO rates (date, rate)
      VALUES ($1, $2)
      ON CONFLICT (date) DO NOTHING
      `,
      [date, value.ILS]
    );
  }

  const result = await pool.query(`
    SELECT
      TO_CHAR(date, 'YYYY-MM') AS month,
      AVG(rate) AS avg_rate
    FROM rates
    GROUP BY month
    ORDER BY month
  `);

  console.table(result.rows);

  console.log(`Inserted rates for ${from} → ${to}`);
}
