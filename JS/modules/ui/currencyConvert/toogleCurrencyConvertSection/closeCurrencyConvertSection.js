import {
  backBtnContainer,
  currencyConvertContainer,
} from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";

export default function closeCurrencyConvertSection() {
  addStyle(currencyConvertContainer, { display: "none" });
  addStyle(backBtnContainer, { display: "none" });
}
