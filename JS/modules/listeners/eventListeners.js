import { chooseSectionSelectedBaseCurrencyContainer } from "../elements/htmlElements.js";
import handleSelectedBaseCountry from "../handlers/chooseCountry/base/handleSelectedBaseCountry.js";
import { eventListener } from "../utilities/dom/dom.js";

export default function runEventListeners() {
  eventListener(
    chooseSectionSelectedBaseCurrencyContainer,
    "click",
    handleSelectedBaseCountry
  );
}
