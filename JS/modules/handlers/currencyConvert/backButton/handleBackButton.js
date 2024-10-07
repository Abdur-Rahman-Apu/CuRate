import { setDataIntoDB } from "../../../db/db.js";
import openCountryChooseSection from "../../../ui/countryOptions/toogleCountryChooseSection/openCountryChooseSection.js";
import closeCurrencyConvertSection from "../../../ui/currencyConvert/toogleCurrencyConvertSection/closeCurrencyConvertSection.js";
import {
  updatePageNo,
  updateSingleRateData,
} from "../../../utilities/updateConfigData/updateConfigData.js";

export default function handleBackButton() {
  updatePageNo(1);
  updateSingleRateData({ property: "target", value: null });
  setDataIntoDB();

  closeCurrencyConvertSection();

  openCountryChooseSection();
}
