import { targetCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";

export default function closeTargetCountryOptions() {
  // close the target countries options part
  targetCurrencyCountryOptionsContainer.innerHTML = "";
  addStyle(targetCurrencyCountryOptionsContainer, { display: "none" });
}
