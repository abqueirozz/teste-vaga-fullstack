export const transactionKeys = {
  useSeed: () =>[],
  useGetTransactions: (page: string, filter: string[] = []) => [
    "transactions",
    page,
    ...filter.sort(),
  ],
};
