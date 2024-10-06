import countryInfo from "../../../../assets/data/data.js";
import {
  chooseSectionBaseCurrencyCountryName,
  chooseSectionTargetCurrencyCountryName,
} from "../../elements/htmlElements.js";
import { lowerCase } from "../stringFn/stringFn.js";

export default function filterCountryName() {
  const currentBaseCountryName = lowerCase(
    chooseSectionBaseCurrencyCountryName.innerText
  );
  const currentTargetCountryName = lowerCase(
    chooseSectionTargetCurrencyCountryName.innerText
  );

  const removeCountries = [currentBaseCountryName, currentTargetCountryName];

  return countryInfo.filter(
    (country) => !removeCountries.includes(lowerCase(country.countryName))
  );
}
