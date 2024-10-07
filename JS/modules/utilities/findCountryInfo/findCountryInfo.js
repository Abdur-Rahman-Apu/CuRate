import countryInfo from "../../../../assets/data/data.js";
import { lowerCase } from "../stringFn/stringFn.js";

// get country details by using the country name
export default function findCountryInfo(countryName) {
  const findCountryInfo = countryInfo.find(
    (country) => lowerCase(country.countryName) === lowerCase(countryName)
  );

  return findCountryInfo;
}
