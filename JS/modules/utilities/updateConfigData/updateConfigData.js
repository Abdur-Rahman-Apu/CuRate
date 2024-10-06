import currencyAppData from "../../config/config.js";

const updateSingleBaseCountryData = ({ property, value }) => {
  currencyAppData.base[property] = value;
};
const updateAllBaseCountryData = ({ data }) => {
  currencyAppData.base = { ...currencyAppData.base, ...data };
};

const updateSingleTargetCountryData = ({ property, value }) => {
  currencyAppData.target[property] = value;
};
const updateAllTargetCountryData = ({ data }) => {
  currencyAppData.target = { ...currencyAppData.base, ...data };
};

const updateSingleSettingsData = ({ property, value }) => {
  console.log(property, value);
  currencyAppData.settings[property] = value;
};

const updateAllSettingsData = ({ data }) => {
  currencyAppData.settings = { ...currencyAppData.settings, ...data };
};

export {
  updateAllBaseCountryData,
  updateAllSettingsData,
  updateAllTargetCountryData,
  updateSingleBaseCountryData,
  updateSingleSettingsData,
  updateSingleTargetCountryData,
};
