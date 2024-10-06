import { baseCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import filterCountryName from "../../../utilities/countryName/filterCountryName.js";
import { addStyle } from "../../../utilities/dom/dom.js";
import showBaseCountriesList from "./showBaseCountriesList.js";

export default function openBaseCountryOptions() {
  console.log("open base country");

  const countriesInfoToShow = filterCountryName();

  showBaseCountriesList(countriesInfoToShow);

  addStyle(baseCurrencyCountryOptionsContainer, { display: "block" });
}
