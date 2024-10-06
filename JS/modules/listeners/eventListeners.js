import {
  chooseSectionSelectedBaseCurrencyContainer,
  chooseSectionSelectedTargetCurrencyContainer,
} from "../elements/htmlElements.js";
import handleSelectedBaseCountry from "../handlers/chooseCountry/base/handleSelectedBaseCountry.js";
import handleSelectedTargetCountry from "../handlers/chooseCountry/target/handleSelectedTargetCountry.js";
import { eventListener } from "../utilities/dom/dom.js";

export default function runEventListeners() {
  eventListener(
    chooseSectionSelectedBaseCurrencyContainer,
    "click",
    handleSelectedBaseCountry
  );
  eventListener(
    chooseSectionSelectedTargetCurrencyContainer,
    "click",
    handleSelectedTargetCountry
  );
}
