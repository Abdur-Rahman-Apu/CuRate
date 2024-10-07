import currencyAppData from "../../../config/config.js";
import {
  chooseSectionTargetCurrencyCountryName,
  chooseSectionTargetCurrencyFlagImg,
} from "../../../elements/htmlElements.js";

export default function setNewTargetCountry() {
  const { target } = currencyAppData;

  chooseSectionTargetCurrencyFlagImg.src = target.flagUrl;
  chooseSectionTargetCurrencyCountryName.innerText = target.countryName;
}
