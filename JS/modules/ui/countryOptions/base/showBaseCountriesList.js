import { baseCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import countryInfoMarkUp from "../../countryInfo/countryInfo.js";

export default function showBaseCountriesList(countries) {
  const markUp = countries
    .map((country) => countryInfoMarkUp({ type: "base", data: country }))
    .join("");

  // added countries into the base options part
  baseCurrencyCountryOptionsContainer.innerHTML = markUp;
}
