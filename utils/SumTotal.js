import { VALIDATIONS } from "../constants/Error.js";

// calculate total each list Sales Taxes and Price taxes

// field ='salesTaxes' calculate all sales items sales taxes OR field ='priceTaxed' calculate all sales items price taxes

export const sumTotal = (field, list) => {
  if (typeof field !== "string") throw new Error(VALIDATIONS.FIELD_TYPE);
  let sum = 0;

  for (let i in list) {
    sum = parseFloat(sum) + parseFloat(list[i][field]);
  }

  return parseFloat(sum).toFixed(2);
};
