import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { transactionKeys } from "./keyFactory";
import { api } from "../../../service";
import { FilterTransactionType } from "../../../@types/api/FilterTransaction";
import { AxiosError } from "axios";
import { TransactionType } from "../../../@types/api/Transaction";
import { TransictionError } from "../../../@types/api/TransactionsError";

export const useGetTransactions = (
  page: string,
  filter?: FilterTransactionType
): UseQueryResult<TransactionType, AxiosError<TransictionError>> => {
  return useQuery({
    queryKey: transactionKeys.useGetTransactions(page),
    queryFn: () => api().transactionRequest.getTrasnactions(page, filter),
  });
};
