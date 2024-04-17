export function formatCurrency(
  value: string | Record<string, string>,
  locale?: string,
  currency?: string
): string | Record<string, string> {
  const formCurrency = new Intl.NumberFormat(locale ?? "pt-BR", {
    currency: currency ?? "BRL",
    style: "currency",
    minimumFractionDigits: 2,
  });
  if (typeof value === "string") return formCurrency.format(Number(value));
  //   [Object.keys({ value })[0]]: formatCurrency(value),

  Object.keys(value).map(
    (key) => (value[key] = formCurrency.format(Number(value[key])))
  );

  return value;
}

export function formatObjectCurrency(
  value: Record<string, string>,
  locale?: string,
  currency?: string
) {
  //   [Object.keys({ value })[0]]: formatCurrency(value),

  return Object.keys(value).reduce(
    (acc, key) => ({
      ...acc,
      [key]: formatCurrency(value[key], locale, currency),
    }),
    {}
  );
}
