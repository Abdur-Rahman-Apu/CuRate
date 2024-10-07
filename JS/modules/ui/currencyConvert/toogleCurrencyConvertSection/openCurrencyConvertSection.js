import {
  backBtnContainer,
  currencyConvertContainer,
} from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";
import closeCountryChooseSection from "../../countryOptions/toogleCountryChooseSection/closeCountryChooseSection.js";
import updateCurrencyConvertPage from "../updateCurrencyConvertPage/updateCurrencyConvertPage.js";

export default function openCurrencyConvertSection() {
  closeCountryChooseSection();

  addStyle(currencyConvertContainer, { display: "flex" });
  addStyle(backBtnContainer, { display: "flex" });

  updateCurrencyConvertPage();
}
