import { baseCurrencyInput } from "../../../elements/htmlElements.js";
import getBaseCurrencyAmount from "../../../utilities/convertCurrency/getBaseCurrencyAmount.js";

export default function updateBaseCurrencyValue(e) {
  // target amount value
  const targetAmount = Number(e.target.value);

  //   calculate base input value
  let baseAmount = getBaseCurrencyAmount(targetAmount);

  if (!Number.isInteger(baseAmount)) {
    baseAmount = baseAmount.toFixed(6);
  }

  //   set the calculated base input value
  baseCurrencyInput.value = baseAmount;
}
