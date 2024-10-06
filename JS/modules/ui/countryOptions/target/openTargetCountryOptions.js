import { targetCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import filterCountryName from "../../../utilities/countryName/filterCountryName.js";
import { addStyle } from "../../../utilities/dom/dom.js";
import showTargetCountriesList from "./showTargetCountriesList.js";

export default function openTargetCountryOptions() {
  const countriesInfoToShow = filterCountryName();

  showTargetCountriesList(countriesInfoToShow);

  addStyle(targetCurrencyCountryOptionsContainer, { display: "block" });
}
