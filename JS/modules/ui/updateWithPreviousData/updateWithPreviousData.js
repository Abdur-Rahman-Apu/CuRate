import { getDataFromDB, setDataIntoDB } from "../../db/db.js";
import {
  chooseSectionBaseCurrencyCountryName,
  chooseSectionBaseCurrencyFlagImg,
  chooseSectionTargetCurrencyCountryName,
  chooseSectionTargetCurrencyFlagImg,
} from "../../elements/htmlElements.js";
import {
  updateAllBaseCountryData,
  updateAllRateData,
  updateAllTargetCountryData,
} from "../../utilities/updateConfigData/updateConfigData.js";
import updateCountryInTheUI from "../countryInfo/updateCountryInTheUI.js";

export default function updateWithPreviousData() {
  // get data from the storage
  const previousData = getDataFromDB();

  if (previousData) {
    // if exist, update the UI
    const { base, target, rate } = previousData;

    // update config data
    updateAllBaseCountryData(base);
    updateAllTargetCountryData(target);
    updateAllRateData(rate);

    // update the choose country sections base country details
    updateCountryInTheUI({
      flagElm: chooseSectionBaseCurrencyFlagImg,
      nameElm: chooseSectionBaseCurrencyCountryName,
      dataType: base,
    });

    // update the choose country sections target country details
    updateCountryInTheUI({
      flagElm: chooseSectionTargetCurrencyFlagImg,
      nameElm: chooseSectionTargetCurrencyCountryName,
      dataType: target,
    });
  } else {
    // if new comer, update the storage with initial data
    setDataIntoDB();
  }
}
