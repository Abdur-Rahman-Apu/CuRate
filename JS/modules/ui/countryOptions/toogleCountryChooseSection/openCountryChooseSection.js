import {
  checkBtnContainer,
  chooseCountryContainer,
} from "../../../elements/htmlElements.js";
import { addStyle } from "../../../utilities/dom/dom.js";
import updateCountryChoosePage from "../updateCountryChoosePage/updateCountryChoosePage.js";

export default function openCountryChooseSection() {
  // update choose part UI
  updateCountryChoosePage();

  //   open choose section
  addStyle(chooseCountryContainer, { display: "flex" });
  addStyle(checkBtnContainer, { display: "flex" });
}
