export const transactionKeys = {
  useSeed: () =>[],
  useGetTransactions: (page: string) => [
    "transactions",
    page,
  ],
};
