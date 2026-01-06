import { pool } from "./db";

function monthRange(year: number, month: number) {
  const start = new Date(year, month, 1);
  const end = new Date(year, month + 1, 0);
  const fmt = (d: Date) => d.toISOString().slice(0, 10);
  return { from: fmt(start), to: fmt(end) };
}

export async function seedFrom2023() {
  const now = new Date();
  let y = 2023;
  let m = 0; 

  while (y < now.getFullYear() || (y === now.getFullYear() && m <= now.getMonth() - 1)) {
    const { from, to } = monthRange(y, m);

    const res = await fetch(
      `https://api.frankfurter.app/${from}..${to}?from=USD&to=ILS`
    );
    const data = await res.json();

    for (const [date, v] of Object.entries(data.rates) as any) {
      await pool.query(
        `INSERT INTO rates (date, rate)
         VALUES ($1,$2)
         ON CONFLICT (date) DO NOTHING`,
        [date, v.ILS]
      );
    }
    m++;
    if (m === 12) { m = 0; y++; }
  }
}
