import countryInfo from "../../../../assets/data/data.js";
import {
  chooseSectionBaseCurrencyCountryName,
  chooseSectionTargetCurrencyCountryName,
} from "../../elements/htmlElements.js";
import { lowerCase } from "../stringFn/stringFn.js";

export default function filterCountryName() {
  // current base country name
  const currentBaseCountryName = lowerCase(
    chooseSectionBaseCurrencyCountryName.innerText
  );

  // current target country name
  const currentTargetCountryName = lowerCase(
    chooseSectionTargetCurrencyCountryName.innerText
  );

  // remove countries list
  const removeCountries = [currentBaseCountryName, currentTargetCountryName];

  // filter countries: remove countries list elements
  return countryInfo.filter(
    (country) => !removeCountries.includes(lowerCase(country.countryName))
  );
}
