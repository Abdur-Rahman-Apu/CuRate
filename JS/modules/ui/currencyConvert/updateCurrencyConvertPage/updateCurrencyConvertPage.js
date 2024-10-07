import currencyAppData from "../../../config/config.js";
import {
  baseCurrencyInput,
  baseCurrencyName,
  baseCurrencySymbol,
  convertSectionBaseCurrencyFlagImg,
  convertSectionTargetCurrencyFlagImg,
  targetCurrencyInput,
  targetCurrencyName,
  targetCurrencySymbol,
} from "../../../elements/htmlElements.js";

export default function updateCurrencyConvertPage() {
  const { base, target, rate } = currencyAppData;

  //   update the base part
  convertSectionBaseCurrencyFlagImg.src = base.flagUrl;
  baseCurrencyName.innerText = base.currencyName;
  baseCurrencySymbol.innerText = base.currencySymbol;
  baseCurrencyInput.value = rate.base;

  //   update the target part
  convertSectionTargetCurrencyFlagImg.src = target.flagUrl;
  targetCurrencyName.innerText = target.currencyName;
  targetCurrencySymbol.innerText = target.currencySymbol;
  targetCurrencyInput.value = rate.target;
}
