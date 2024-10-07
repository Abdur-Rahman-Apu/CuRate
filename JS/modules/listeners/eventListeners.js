import {
  backBtn,
  baseCurrencyCountryOptionsContainer,
  baseCurrencyInput,
  checkBtn,
  chooseSectionSelectedBaseCurrencyContainer,
  chooseSectionSelectedTargetCurrencyContainer,
  targetCurrencyCountryOptionsContainer,
  targetCurrencyInput,
} from "../elements/htmlElements.js";
import handleSelectBaseCountry from "../handlers/chooseCountry/base/handleSelectBaseCountry.js";
import handleToggleBaseCountriesList from "../handlers/chooseCountry/base/handleToggleBaseCountriesList.js";
import handleCheckRateBtn from "../handlers/chooseCountry/checkBtn/handleCheckRateBtn.js";
import handleSelectTargetCountry from "../handlers/chooseCountry/target/handleSelectTargetCountry.js";
import handleToggleTargetCountriesList from "../handlers/chooseCountry/target/handleToggleTargetCountriesList.js";
import handleBackButton from "../handlers/currencyConvert/backButton/handleBackButton.js";
import handleBaseInput from "../handlers/currencyConvert/base/handleBaseInput.js";
import handleTargetInput from "../handlers/currencyConvert/target/handleTargetInput.js";
import { eventListener } from "../utilities/dom/dom.js";

export default function runEventListeners() {
  // toggle base countries list
  eventListener(
    chooseSectionSelectedBaseCurrencyContainer,
    "click",
    handleToggleBaseCountriesList
  );

  // toggle target countries list
  eventListener(
    chooseSectionSelectedTargetCurrencyContainer,
    "click",
    handleToggleTargetCountriesList
  );

  // clicked on the country options to select base country
  eventListener(
    baseCurrencyCountryOptionsContainer,
    "click",
    handleSelectBaseCountry
  );

  // clicked on the country options to select target country
  eventListener(
    targetCurrencyCountryOptionsContainer,
    "click",
    handleSelectTargetCountry
  );

  // check rate button
  eventListener(checkBtn, "click", handleCheckRateBtn);

  // handle base currency value
  eventListener(baseCurrencyInput, "keyup", handleBaseInput);

  // handle target currency value
  eventListener(targetCurrencyInput, "keyup", handleTargetInput);

  // go back button
  eventListener(backBtn, "click", handleBackButton);
}
