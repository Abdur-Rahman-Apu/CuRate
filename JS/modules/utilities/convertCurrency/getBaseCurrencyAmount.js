import currencyAppData from "../../config/config.js";

// user typing in the target currency input. Update the base currency input value
export default function getBaseCurrencyAmount(targetAmount) {
  const {
    rate: { target, base },
  } = currencyAppData;

  return (targetAmount * base) / target;
}
