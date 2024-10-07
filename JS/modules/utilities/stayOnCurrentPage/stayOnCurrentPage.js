import { getDataFromDB } from "../../db/db.js";
import closeCountryChooseSection from "../../ui/countryOptions/toogleCountryChooseSection/closeCountryChooseSection.js";
import openCountryChooseSection from "../../ui/countryOptions/toogleCountryChooseSection/openCountryChooseSection.js";
import closeCurrencyConvertSection from "../../ui/currencyConvert/toogleCurrencyConvertSection/closeCurrencyConvertSection.js";
import openCurrencyConvertSection from "../../ui/currencyConvert/toogleCurrencyConvertSection/openCurrencyConvertSection.js";

export default function stayOnCurrentPage() {
  const { page } = getDataFromDB();
  console.log(page);

  if (page === 1) {
    openCountryChooseSection();

    closeCurrencyConvertSection();
  } else {
    closeCountryChooseSection();

    openCurrencyConvertSection();
  }
}
