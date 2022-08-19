import { inputs } from "./constants/Inputs.js";
import { arrangeSales } from "./utils/ArrangeSales.js";
import { sumTotal } from "./utils/SumTotal.js";

for (let i in inputs) {
  const salesReceipt = [];
  console.log("\n" + i.toUpperCase() + ":");
  inputs[i].map((product) => {
    salesReceipt.push(arrangeSales(product));
  });

  // Print sales receipt items
  salesReceipt.map((item) => {
    console.log(
      item.quantity +
        (item.imported ? " imported" : "") +
        " " +
        item.name +
        ": " +
        item.priceTaxed
    );
  });
  //Print the total sales taxes for input
  console.log("Sales Taxes: " + sumTotal("salesTaxes", salesReceipt));
  //Print the total prices for input
  console.log("Total: " + sumTotal("priceTaxed", salesReceipt));
}
