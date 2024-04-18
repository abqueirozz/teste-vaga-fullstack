import { useQuery } from "@tanstack/react-query";
import { transactionKeys } from "./keyFactory";
import { api } from "../../../service";

export const useGetTransactions = (page: string, filter: string[]) => {
  return useQuery({
    queryKey: transactionKeys.useGetTransactions(page, filter),
    queryFn: () => api().transactionRequest.getTrasnactions(page, filter),
  });
};
