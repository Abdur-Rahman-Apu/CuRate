import currencyAppData from "../../config/config.js";

// user typing in the base currency input. Update the target currency input value
export default function getTargetCurrencyAmount(baseAmount) {
  const {
    rate: { target },
  } = currencyAppData;

  return target * baseAmount;
}
