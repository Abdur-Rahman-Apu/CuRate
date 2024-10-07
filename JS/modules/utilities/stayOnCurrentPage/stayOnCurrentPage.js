import { getDataFromDB } from "../../db/db.js";
import closeCountryChooseSection from "../../ui/countryOptions/toogleCountryChooseSection/closeCountryChooseSection.js";
import openCountryChooseSection from "../../ui/countryOptions/toogleCountryChooseSection/openCountryChooseSection.js";
import closeCurrencyConvertSection from "../../ui/currencyConvert/toogleCurrencyConvertSection/closeCurrencyConvertSection.js";
import openCurrencyConvertSection from "../../ui/currencyConvert/toogleCurrencyConvertSection/openCurrencyConvertSection.js";

export default function stayOnCurrentPage() {
  // get page no from the storage
  const { page } = getDataFromDB();

  if (page === 1) {
    // open choose section
    openCountryChooseSection();

    // hide convert section
    closeCurrencyConvertSection();
  } else {
    // page 2

    // close choose section
    closeCountryChooseSection();

    // open convert section
    openCurrencyConvertSection();
  }
}
