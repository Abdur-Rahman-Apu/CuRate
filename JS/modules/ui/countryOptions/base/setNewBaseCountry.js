import currencyAppData from "../../../config/config.js";
import {
  chooseSectionBaseCurrencyCountryName,
  chooseSectionBaseCurrencyFlagImg,
} from "../../../elements/htmlElements.js";

export default function setNewBaseCountry() {
  const { base } = currencyAppData;

  chooseSectionBaseCurrencyFlagImg.src = base.flagUrl;
  chooseSectionBaseCurrencyCountryName.innerText = base.countryName;
}
