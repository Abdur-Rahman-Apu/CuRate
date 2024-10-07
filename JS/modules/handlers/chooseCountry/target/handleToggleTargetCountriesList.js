import currencyAppData from "../../../config/config.js";
import { setDataIntoDB } from "../../../db/db.js";
import { targetCurrencyArrowIcon } from "../../../elements/htmlElements.js";
import closeTargetCountryOptions from "../../../ui/countryOptions/target/closeTargetCountryOptions.js";
import openTargetCountryOptions from "../../../ui/countryOptions/target/openTargetCountryOptions.js";
import toggleArrowIcon from "../../../utilities/arrowIcon/toggleArrowIcon.js";
import { updateSingleSettingsData } from "../../../utilities/updateConfigData/updateConfigData.js";

export default function handleToggleTargetCountriesList(e) {
  const {
    settings: { isTargetCountriesOpen },
  } = currencyAppData;

  if (isTargetCountriesOpen) {
    // close base countries options
    toggleArrowIcon({ targetElm: targetCurrencyArrowIcon, iconType: "down" });
    closeTargetCountryOptions();
    updateSingleSettingsData({
      property: "isTargetCountriesOpen",
      value: false,
    });
    setDataIntoDB();
  } else {
    //   open base countries options
    toggleArrowIcon({ targetElm: targetCurrencyArrowIcon, iconType: "up" });
    openTargetCountryOptions();
    updateSingleSettingsData({
      property: "isTargetCountriesOpen",
      value: true,
    });
    setDataIntoDB();
  }
}
