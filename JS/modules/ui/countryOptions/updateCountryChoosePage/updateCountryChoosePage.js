import currencyAppData from "../../../config/config.js";
import {
  chooseSectionBaseCurrencyCountryName,
  chooseSectionBaseCurrencyFlagImg,
  chooseSectionTargetCurrencyCountryName,
  chooseSectionTargetCurrencyFlagImg,
} from "../../../elements/htmlElements.js";

export default function updateCountryChoosePage() {
  const { base, target } = currencyAppData;

  chooseSectionBaseCurrencyFlagImg.src = base.flagUrl;

  chooseSectionBaseCurrencyCountryName.innerText = base.countryName;

  chooseSectionTargetCurrencyFlagImg.src = target.flagUrl;
  chooseSectionTargetCurrencyCountryName.innerText = target.countryName;
}
