import { updatePreviousMonth } from "./updateRates";

async function main() {
  try {
    console.log("Starting monthly update");
    await updatePreviousMonth();
    console.log("Monthly update finished");
  } catch (err) {
    console.error("Update failed:", err);
    process.exit(1);
  }
}

main();
