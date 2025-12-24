import { pool } from "./db";

export async function initDb() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS rates (
      date DATE PRIMARY KEY,
      rate NUMERIC NOT NULL
    );
  `);

  console.log("DB initialized");
}
