import { pool } from "../db/db";

export async function getMonthlyRates() {
  const { rows } = await pool.query(`
    SELECT
      TO_CHAR(month, 'YYYY-MM') AS month,
      avg_rate
    FROM monthly_rates
    WHERE month >= DATE '2023-01-01'
    ORDER BY month
  `);

  return rows;
}