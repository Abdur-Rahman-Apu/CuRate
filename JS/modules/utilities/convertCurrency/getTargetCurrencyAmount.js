import currencyAppData from "../../config/config.js";

export default function getTargetCurrencyAmount(baseAmount) {
  const {
    rate: { target },
  } = currencyAppData;

  console.log(target, baseAmount);
  return target * baseAmount;
}
