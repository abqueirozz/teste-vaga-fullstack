import { FilterTransactionType } from "../../../@types/api/FilterTransaction";
import { TransactionType } from "../../../@types/api/Transaction";
import { axiosInstance } from "../../../lib/axios";

export class TransactionRequest {
  constructor() {}

  getTrasnactions(page: string = "1", filter?: FilterTransactionType) {
    return axiosInstance.get<TransactionType>("/transactions", {
      params: {
        page,
        filter,
      },
    });
  }

  seed() {
    return axiosInstance.get("/seed");
  }
}
