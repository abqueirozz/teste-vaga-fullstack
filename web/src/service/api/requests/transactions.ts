import { axiosInstance } from "../../../lib/axios";

export class TransactionRequest {
  constructor() {}

  getTrasnactions(page: string = "1", filter: string[] = []) {
    console.log("filter", filter);
    return axiosInstance.get("/transactions", {
      params: {
        page,
      },
    });
  }

  seed() {
    return axiosInstance.get("/seed");
  }
}
