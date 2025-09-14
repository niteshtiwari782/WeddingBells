export const formattedAmount = amount => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

export function shortenString(str) {
  return str?.length > 12 ? str.slice(0, 12) + '...' : str;
}
