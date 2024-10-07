import {
  baseCurrencyCountryOptionsContainer,
  chooseSectionSelectedBaseCurrencyContainer,
  chooseSectionSelectedTargetCurrencyContainer,
} from "../elements/htmlElements.js";
import handleSelectBaseCountry from "../handlers/chooseCountry/base/handleSelectBaseCountry.js";
import handleToggleBaseCountriesList from "../handlers/chooseCountry/base/handleToggleBaseCountriesList.js";
import handleToggleTargetCountriesList from "../handlers/chooseCountry/target/handleToggleTargetCountriesList.js";
import { eventListener } from "../utilities/dom/dom.js";

export default function runEventListeners() {
  eventListener(
    chooseSectionSelectedBaseCurrencyContainer,
    "click",
    handleToggleBaseCountriesList
  );

  eventListener(
    chooseSectionSelectedTargetCurrencyContainer,
    "click",
    handleToggleTargetCountriesList
  );

  eventListener(
    baseCurrencyCountryOptionsContainer,
    "click",
    handleSelectBaseCountry
  );
}
