import express from "express";
import dotenv from "dotenv";
import { seed, getTransactions } from "./rest-api/domain";
import { apiError } from "./rest-api/middleware";

dotenv.config();
const app = express();
app.use(require('cors')())
app.use(apiError)

const PORT = process.env.PORT || 4000;

app.get("/seed", seed);
app.get("/transactions", getTransactions);

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    throw new Error(error.message);
  });
