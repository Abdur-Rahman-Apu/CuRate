import { baseCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import filterCountryName from "../../../utilities/countryName/filterCountryName.js";
import { addStyle } from "../../../utilities/dom/dom.js";
import showBaseCountriesList from "./showBaseCountriesList.js";

export default function openBaseCountryOptions() {
  const countriesInfoToShow = filterCountryName();

  // show base countries
  showBaseCountriesList(countriesInfoToShow);

  addStyle(baseCurrencyCountryOptionsContainer, { display: "block" });
}
