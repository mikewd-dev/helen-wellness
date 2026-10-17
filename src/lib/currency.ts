const gbpFormatter = new Intl.NumberFormat("en-GB", {
  style: "currency",
  currency: "GBP",
});

export function formatGbp(amountGbp: number): string {
  return gbpFormatter.format(amountGbp);
}
