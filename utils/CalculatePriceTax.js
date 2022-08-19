import { VALIDATIONS } from "../constants/Error.js";
export const calculatePriceTax = (quantity, price, tax) => {
  if (
    typeof quantity !== "number" ||
    typeof price !== "number" ||
    typeof tax !== "number"
  )
    throw new Error(VALIDATIONS.WRONG_PARAM);

  const taxValue = parseFloat((price * tax) / 100);
  const nearest = parseFloat(Math.round(taxValue / 0.05) * 0.05);
  const result = parseFloat(price) + parseFloat(nearest);
  return (quantity * result).toFixed(2);
};
