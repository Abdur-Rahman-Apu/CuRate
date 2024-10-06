import { targetCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";

export default function closeTargetCountryOptions() {
  targetCurrencyCountryOptionsContainer.innerHTML = "";
  addStyle(targetCurrencyCountryOptionsContainer, { display: "none" });
}
