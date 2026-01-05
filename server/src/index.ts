import "./config/env";

import express from "express";
import cors from "cors";
import ratesRoutes from "./router/rate.routes";

const app = express();

app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET"],
}));

app.use("/api/rates", ratesRoutes);

app.listen(3001, () => {
  console.log("API up on http://localhost:3001/api/rates");
}); 