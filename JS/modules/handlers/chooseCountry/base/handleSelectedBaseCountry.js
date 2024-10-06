import { baseCurrencyArrowIcon } from "../../../elements/htmlElements.js";
import toggleArrowIcon from "../../../utilities/arrowIcon/toggleArrowIcon.js";

export default function handleSelectedBaseCountry(e) {
  console.log("click");
  toggleArrowIcon({ targetElm: baseCurrencyArrowIcon, iconType: "up" });
}
