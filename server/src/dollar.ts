// import express from "express";
// import cors from "cors";
// import { initDb } from "./initDb";
// (async () => {
//   console.log("Fetching monthly rates...");
//   await fetchAndStoreMonthlyRates();
//   console.log("Done.");
// })();
// const app = express();

// app.use(cors({
//   origin: "http://localhost:5173",
//   methods: ["GET", "POST"],
//   credentials: true
// }));


// app.get("/rates", (_, res) => {
//   res.json([
//     { month: "2023-01", average: 3.45 },
//     { month: "2023-02", average: 3.52 }
//   ]);
// });

// app.listen(3000, () => {
//   console.log("server running");
// });


// import express from "express";
// import cors from "cors";
// import { initDb } from "./initDb";

// const app = express();
// app.use(cors());

// app.get("/health", (_req, res) => {
//   res.send("OK");
// });

// initDb().then(() => {
//   app.listen(3001, () => {
//     console.log("Server running on 3001");
//   });
// });
// import { initDb } from "./db";
// import { fetchRates } from "./fetchRates";

// import { initDb } from "./initDb";
// import { updatePreviousMonth } from "./updateRates";

// async function main() {
//   await initDb();
//   await updatePreviousMonth();
//   process.exit(0);
// }

// main().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });




// async function main() {
//     console.log("SERVER STARTED");

//     await initDb();
//     await updatePreviousMonth();
//     console.log("SERVER FINISHED");
// }

// main()
//     .then(() => process.exit(0))
//     .catch(err => {
//         console.error(err);
//         process.exit(1);
//     });


import { initDb } from "./initDb";
import { startScheduler } from "./scheduler";
import { updatePreviousMonth } from "./updateRates";

async function start() {
  await initDb();
  await updatePreviousMonth();

  startScheduler();

  console.log("🚀 Server is running");
}

start().catch(console.error);
