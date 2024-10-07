import { targetCurrencyInput } from "../../../elements/htmlElements.js";
import getTargetCurrencyAmount from "../../../utilities/convertCurrency/getTargetCurrencyAmount.js";

export default function updateTargetCurrencyValue(e) {
  // get the base input value
  const baseAmount = Number(e.target.value);

  //   calculate the target amount value
  let targetAmount = getTargetCurrencyAmount(baseAmount);

  if (!Number.isInteger(targetAmount)) {
    targetAmount = targetAmount.toFixed(6);
  }

  //   set the calculated target amount value
  targetCurrencyInput.value = targetAmount;
}
