import cron from "node-cron";
import { updatePreviousMonth } from "../updateRates";


export function startScheduler() {
    cron.schedule("0 0 1 * *", async () => {
        console.log("⏰ Monthly cron started");
        try {
            await updatePreviousMonth();
            console.log("✅ Monthly cron finished");
        } catch (err) {
            console.error("❌ Monthly cron failed", err);
        }
    },
        { timezone: "Asia/Jerusalem" }
    );
}
