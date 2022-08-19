import { VALIDATIONS } from "../constants/Error.js";
import { calculatePriceTax } from "./CalculatePriceTax.js";
import { calculateSalesTax } from "./CalculateSalesTax.js";

export const arrangeSales = (product) => {
  const { name, quantity, excepted, imported, price } = product;
  if (
    typeof name !== "string" ||
    typeof quantity !== "number" ||
    typeof excepted !== "boolean" ||
    typeof imported !== "boolean" ||
    typeof price !== "number"
  )
    throw new Error(VALIDATIONS.WRONG_PARAM);

  let tax = 0;

  if (!excepted) {
    tax = tax + 10;
  }

  if (imported) {
    tax = tax + 5;
  }

  const priceTaxed =
    excepted && !imported
      ? quantity * price
      : calculatePriceTax(quantity, price, tax);
  const salesTaxes =
    excepted && !imported ? 0 : calculateSalesTax(quantity, price, priceTaxed);

  return {
    name: name,
    quantity: quantity,
    excepted: excepted,
    imported: imported,
    price: price,
    tax: tax,
    priceTaxed: priceTaxed,
    salesTaxes: salesTaxes,
  };
};
