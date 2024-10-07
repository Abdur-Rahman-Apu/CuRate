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

    // close the options part
    closeTargetCountryOptions();

    // update the config data
    updateSingleSettingsData({
      property: "isTargetCountriesOpen",
      value: false,
    });
  } else {
    //   open base countries options
    toggleArrowIcon({ targetElm: targetCurrencyArrowIcon, iconType: "up" });

    // open the options part
    openTargetCountryOptions();

    // update the config
    updateSingleSettingsData({
      property: "isTargetCountriesOpen",
      value: true,
    });
  }

  // update the storage
  setDataIntoDB();
}
