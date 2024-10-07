import { baseCurrencyInput } from "../../../elements/htmlElements.js";
import getBaseCurrencyAmount from "../../../utilities/convertCurrency/getBaseCurrencyAmount.js";

export default function updateBaseCurrencyValue(e) {
  const targetAmount = Number(e.target.value);
  let baseAmount = getBaseCurrencyAmount(targetAmount);
  console.log(baseAmount, targetAmount);

  if (!Number.isInteger(baseAmount)) {
    baseAmount = baseAmount.toFixed(6);
  }
  baseCurrencyInput.value = baseAmount;
}
