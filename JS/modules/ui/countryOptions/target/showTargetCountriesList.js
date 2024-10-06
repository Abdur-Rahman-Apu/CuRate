import { targetCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import countryInfoMarkUp from "../../countryInfo/countryInfo.js";

export default function showTargetCountriesList(countries) {
  const markUp = countries
    .map((country) => countryInfoMarkUp({ type: "base", data: country }))
    .join("");

  targetCurrencyCountryOptionsContainer.innerHTML = markUp;
}
