import { TransactionParams } from "../../domain";
import { TransactionRepository } from "../../repository";


export class TransactionService {
  private transaction = new TransactionRepository();
  constructor() {}

  async getTransactions(params: TransactionParams) {
    return await this.transaction.getTransactions(params);
  }

  async seed() {
    return await this.transaction.seed();
  }
}
