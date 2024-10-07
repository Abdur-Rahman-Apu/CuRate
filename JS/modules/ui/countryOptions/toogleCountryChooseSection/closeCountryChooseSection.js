import {
  checkBtnContainer,
  chooseCountryContainer,
} from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";

export default function closeCountryChooseSection() {
  addStyle(chooseCountryContainer, { display: "none" });
  addStyle(checkBtnContainer, { display: "none" });
}
