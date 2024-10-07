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

export default function updateWithPreviousData() {
  const previousData = getDataFromDB();

  if (previousData) {
    const { base, target, rate } = previousData;
    updateAllBaseCountryData(base);
    updateAllTargetCountryData(target);
    updateAllRateData(rate);

    updateCountryInTheUI({
      flagElm: chooseSectionBaseCurrencyFlagImg,
      nameElm: chooseSectionBaseCurrencyCountryName,
      dataType: base,
    });

    updateCountryInTheUI({
      flagElm: chooseSectionTargetCurrencyFlagImg,
      nameElm: chooseSectionTargetCurrencyCountryName,
      dataType: target,
    });
  } else {
    setDataIntoDB();
  }
}

const updateCountryInTheUI = ({ flagElm, nameElm, dataType }) => {
  flagElm.src = dataType.flagUrl;
  nameElm.innerText = dataType.countryName;
};
