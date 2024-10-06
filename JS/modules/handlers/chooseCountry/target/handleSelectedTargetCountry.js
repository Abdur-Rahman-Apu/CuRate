import { targetCurrencyArrowIcon } from "../../../elements/htmlElements.js";
import toggleArrowIcon from "../../../utilities/arrowIcon/toggleArrowIcon.js";

export default function handleSelectedTargetCountry(e) {
  toggleArrowIcon({ targetElm: targetCurrencyArrowIcon, iconType: "up" });
}
