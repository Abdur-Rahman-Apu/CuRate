import { targetCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import countryInfoMarkUp from "../../countryInfo/countryInfo.js";

export default function showTargetCountriesList(countries) {
  const markUp = countries
    .map((country) => countryInfoMarkUp({ type: "base", data: country }))
    .join("");

  //  added countries into the target country options part
  targetCurrencyCountryOptionsContainer.innerHTML = markUp;
}
