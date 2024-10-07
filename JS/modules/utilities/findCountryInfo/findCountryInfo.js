import countryInfo from "../../../../assets/data/data.js";
import { lowerCase } from "../stringFn/stringFn.js";

export default function findCountryInfo(countryName) {
  const findCountryInfo = countryInfo.find(
    (country) => lowerCase(country.countryName) === lowerCase(countryName)
  );

  return findCountryInfo;
}
