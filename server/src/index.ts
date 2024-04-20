import express, { Response, Request } from "express";
import dotenv from "dotenv";
import { seed, getTransactions } from "./rest-api/domain";
import { apiError } from "./rest-api/middleware";
import { prisma } from "./lib/prisma";
import 'express-async-errors'
dotenv.config();
const PORT = process.env.PORT || 4000;
const app = express();
app.use(require("cors")());


app.get("/seed", seed);
app.get("/transactions", getTransactions);
app.get("/", async (req: Request, res: Response) => {
  const count = await prisma.transaction.count();
  res.status(201).json({count});
});
app.use(apiError);

app
  .listen(PORT, () => {
    console.log("Server running at PORT: ", PORT);
  })
  .on("error", (error) => {
    console.log('olá?')
    throw new Error(error.message);
  });
