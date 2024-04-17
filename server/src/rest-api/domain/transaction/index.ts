import { Request, Response } from "express";
import { TransactionService } from "../../service";

export type TransactionParams = {
  size?: string;
  number?: string;
  filter?: {
    nrProposta?: string;
    nrCpfCnpj?: string;
  };
};
const transaction = new TransactionService();

export async function getTransactions(req: Request, res: Response) {
  const params = req.query as TransactionParams;

  const data = await transaction.getTransactions(params);

  res.status(200).json(data);
}

export async function seed(req: Request, res: Response) {
  const createdData = await transaction.seed();
  console.log("createdData", createdData);

  if (!createdData) {
    res.status(200).send("Tabela já povoada");
    return;
  }
  res.status(201).send("Tabela povoada com sucesso");
}
