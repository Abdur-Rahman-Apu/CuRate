import { baseCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";

export default function closeBaseCountryOptions() {
  // close base countries
  baseCurrencyCountryOptionsContainer.innerHTML = "";
  addStyle(baseCurrencyCountryOptionsContainer, { display: "none" });
}
