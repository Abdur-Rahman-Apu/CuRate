import { baseCurrencyCountryOptionsContainer } from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";

export default function closeBaseCountryOptions() {
  baseCurrencyCountryOptionsContainer.innerHTML = "";
  addStyle(baseCurrencyCountryOptionsContainer, { display: "none" });
}
