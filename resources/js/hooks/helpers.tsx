export const useHelpers = () => {
  const formatCurrency = (value: number) => {
    const formatted = value.toLocaleString('de-DE', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    return formatted;
  };

  return { formatCurrency };
};
