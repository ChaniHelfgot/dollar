import "./index"
import { initDb } from "./db/initDb";
import { startScheduler } from "./cron/scheduler";
import { seedFrom2023 } from "./db/seed"
import { updatePreviousMonth } from "./updateRates";

async function start() {
  await initDb();
  await seedFrom2023();
  await updatePreviousMonth()
  startScheduler();
}

start().catch(console.error);
