import { selectElm } from "../utilities/dom/dom.js";

const chooseCountryContainer = selectElm(".choose-country-section");

const chooseSectionSelectedBaseCurrencyContainer = selectElm(
  ".selected-base-currency"
);
const chooseSectionBaseCurrencyFlagImg = selectElm(".base-currency-flag-image");

const chooseSectionBaseCurrencyCountryName = selectElm(
  ".base-currency-country-name"
);

const baseCurrencyArrowIcon = selectElm(".base-currency-down-arrow-icon");

const baseCurrencyCountryOptionsContainer = selectElm(
  ".base-currency-country-options"
);

const chooseSectionSelectedTargetCurrencyContainer = selectElm(
  ".selected-target-currency"
);
const chooseSectionTargetCurrencyFlagImg = selectElm(
  ".target-currency-flag-image"
);
const chooseSectionTargetCurrencyCountryName = selectElm(
  ".target-currency-country-name"
);
const targetCurrencyArrowIcon = selectElm(".target-currency-down-arrow-icon");

const targetCurrencyCountryOptionsContainer = selectElm(
  ".target-currency-country-options"
);

const checkBtnContainer = selectElm(".check-button-container");

const checkBtn = selectElm(".check-btn");

const currencyConvertContainer = selectElm(".currency-convert-section");

const convertSectionBaseCurrencyContainer = selectElm(
  ".currency-convert-section .selected-base-currency"
);
const convertSectionBaseCurrencyFlagImg = selectElm(
  ".currency-convert-section .base-currency-flag-image"
);
const baseCurrencyName = selectElm(
  ".currency-convert-section .base-currency-name"
);
const baseCurrencySymbol = selectElm(
  ".selected-base-currency .currency-symbol"
);
const baseCurrencyInput = selectElm(
  ".selected-base-currency #base-currency-input"
);
const convertSectionTargetCurrencyContainer = selectElm(
  ".currency-convert-section .selected-target-currency"
);
const convertSectionTargetCurrencyFlagImg = selectElm(
  ".currency-convert-section .target-currency-flag-image"
);
const targetCurrencyName = selectElm(
  ".currency-convert-section .target-currency-name"
);
const targetCurrencySymbol = selectElm(
  ".selected-target-currency .currency-symbol"
);
const targetCurrencyInput = selectElm(
  ".selected-target-currency #target-currency-input"
);

const backBtnContainer = selectElm(".back-button-container");
const backBtn = selectElm(".back-btn");

const toastMessageContainer = selectElm(".toast-message-container");
const toastMessage = selectElm(".toast-message");
export {
  backBtn,
  backBtnContainer,
  baseCurrencyArrowIcon,
  baseCurrencyCountryOptionsContainer,
  baseCurrencyInput,
  baseCurrencyName,
  baseCurrencySymbol,
  checkBtn,
  checkBtnContainer,
  chooseCountryContainer,
  chooseSectionBaseCurrencyCountryName,
  chooseSectionBaseCurrencyFlagImg,
  chooseSectionSelectedBaseCurrencyContainer,
  chooseSectionSelectedTargetCurrencyContainer,
  chooseSectionTargetCurrencyCountryName,
  chooseSectionTargetCurrencyFlagImg,
  convertSectionBaseCurrencyContainer,
  convertSectionBaseCurrencyFlagImg,
  convertSectionTargetCurrencyContainer,
  convertSectionTargetCurrencyFlagImg,
  currencyConvertContainer,
  targetCurrencyArrowIcon,
  targetCurrencyCountryOptionsContainer,
  targetCurrencyInput,
  targetCurrencyName,
  targetCurrencySymbol,
  toastMessage,
  toastMessageContainer,
};
