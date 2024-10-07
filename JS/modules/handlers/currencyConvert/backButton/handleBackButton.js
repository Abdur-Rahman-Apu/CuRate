import { setDataIntoDB } from "../../../db/db.js";
import openCountryChooseSection from "../../../ui/countryOptions/toogleCountryChooseSection/openCountryChooseSection.js";
import closeCurrencyConvertSection from "../../../ui/currencyConvert/toogleCurrencyConvertSection/closeCurrencyConvertSection.js";
import {
  updatePageNo,
  updateSingleRateData,
} from "../../../utilities/updateConfigData/updateConfigData.js";

export default function handleBackButton() {
  // Go back to the page 1

  //   update page no and target rate value into the config data
  updatePageNo(1);
  updateSingleRateData({ property: "target", value: null });

  //   update the storage
  setDataIntoDB();

  //   close the convert section
  closeCurrencyConvertSection();

  //   open the choose section
  openCountryChooseSection();
}
