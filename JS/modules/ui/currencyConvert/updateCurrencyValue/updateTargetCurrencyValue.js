import { targetCurrencyInput } from "../../../elements/htmlElements.js";
import getTargetCurrencyAmount from "../../../utilities/convertCurrency/getTargetCurrencyAmount.js";

export default function updateTargetCurrencyValue(e) {
  const baseAmount = Number(e.target.value);
  let targetAmount = getTargetCurrencyAmount(baseAmount);
  console.log(targetAmount);
  if (!Number.isInteger(targetAmount)) {
    targetAmount = targetAmount.toFixed(6);
  }

  targetCurrencyInput.value = targetAmount;
}
