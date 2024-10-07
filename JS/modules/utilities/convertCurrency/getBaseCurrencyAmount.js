import currencyAppData from "../../config/config.js";

export default function getBaseCurrencyAmount(targetAmount) {
  const {
    rate: { target, base },
  } = currencyAppData;
  console.log(base);
  console.log(targetAmount);
  console.log(target);
  return (targetAmount * base) / target;
}
