import { pool } from "./db";
import fs from "fs";
import path from "path";

export async function initDb() {
  const schema = fs.readFileSync(
    path.join(__dirname, "../schema.sql"),
    "utf8"
  );

  await pool.query(schema);
  console.log("DB initialized");
}
