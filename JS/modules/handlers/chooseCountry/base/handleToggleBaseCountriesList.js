import currencyAppData from "../../../config/config.js";
import { setDataIntoDB } from "../../../db/db.js";
import { baseCurrencyArrowIcon } from "../../../elements/htmlElements.js";
import closeBaseCountryOptions from "../../../ui/countryOptions/base/closeBaseCountryOptions.js";
import openBaseCountryOptions from "../../../ui/countryOptions/base/openBaseCountryOptions.js";
import toggleArrowIcon from "../../../utilities/arrowIcon/toggleArrowIcon.js";
import { updateSingleSettingsData } from "../../../utilities/updateConfigData/updateConfigData.js";

export default function handleToggleBaseCountriesList() {
  const {
    settings: { isBaseCountriesOpen },
  } = currencyAppData;

  if (isBaseCountriesOpen) {
    // close base countries options
    toggleArrowIcon({ targetElm: baseCurrencyArrowIcon, iconType: "down" });
    closeBaseCountryOptions();
    updateSingleSettingsData({ property: "isBaseCountriesOpen", value: false });
    setDataIntoDB();
  } else {
    //   open base countries options
    toggleArrowIcon({ targetElm: baseCurrencyArrowIcon, iconType: "up" });
    openBaseCountryOptions();
    updateSingleSettingsData({ property: "isBaseCountriesOpen", value: true });
    setDataIntoDB();
  }
}
