export const calculateSalesTax = (quantity, price, priceTaxed) =>
  parseFloat(parseFloat(priceTaxed) - parseFloat(price) * quantity).toFixed(2);
