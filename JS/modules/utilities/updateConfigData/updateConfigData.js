import currencyAppData from "../../config/config.js";

// update single property of the base object
const updateSingleBaseCountryData = ({ property, value }) => {
  currencyAppData.base[property] = value;
};

// update all properties of the base object
const updateAllBaseCountryData = (data) => {
  currencyAppData.base = { ...currencyAppData.base, ...data };
};

// update single property of the target object
const updateSingleTargetCountryData = ({ property, value }) => {
  currencyAppData.target[property] = value;
};

// update all properties of the target object
const updateAllTargetCountryData = (data) => {
  currencyAppData.target = { ...currencyAppData.base, ...data };
};

// update single property of the setting object
const updateSingleSettingsData = ({ property, value }) => {
  currencyAppData.settings[property] = value;
};

// update all properties of the setting object
const updateAllSettingsData = (data) => {
  currencyAppData.settings = { ...currencyAppData.settings, ...data };
};

// update single property of the rate object
const updateSingleRateData = ({ property, value }) => {
  currencyAppData.rate[property] = value;
};

// update all properties of the rate object
const updateAllRateData = (data) => {
  currencyAppData.rate = { ...currencyAppData.rate, ...data };
};

// update page no
const updatePageNo = (no) => {
  currencyAppData.page = no;
};

export {
  updateAllBaseCountryData,
  updateAllRateData,
  updateAllSettingsData,
  updateAllTargetCountryData,
  updatePageNo,
  updateSingleBaseCountryData,
  updateSingleRateData,
  updateSingleSettingsData,
  updateSingleTargetCountryData,
};
