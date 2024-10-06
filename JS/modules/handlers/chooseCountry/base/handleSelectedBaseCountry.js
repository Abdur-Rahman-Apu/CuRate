import { baseCurrencyArrowIcon } from "../../../elements/htmlElements.js";
import openBaseCountryOptions from "../../../ui/countryOptions/base/openBaseCountryOptions.js";
import toggleArrowIcon from "../../../utilities/arrowIcon/toggleArrowIcon.js";

export default function handleSelectedBaseCountry(e) {
  console.log("click");

  toggleArrowIcon({ targetElm: baseCurrencyArrowIcon, iconType: "up" });

  //   open base country options
  openBaseCountryOptions();
}
