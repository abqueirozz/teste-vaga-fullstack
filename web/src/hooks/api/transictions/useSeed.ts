import { useQuery } from "@tanstack/react-query";
import { transactionKeys } from "./keyFactory";
import { api } from "../../../service";

export const useSeed = () => {
  return useQuery({
    queryKey: transactionKeys.useSeed(),
    queryFn: () => api().transactionRequest.seed(),
  });
};
