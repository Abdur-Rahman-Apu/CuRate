import currencyAppData from "../../config/config.js";

const updateSingleBaseCountryData = ({ property, value }) => {
  currencyAppData.base[property] = value;
};
const updateAllBaseCountryData = (data) => {
  currencyAppData.base = { ...currencyAppData.base, ...data };
};

const updateSingleTargetCountryData = ({ property, value }) => {
  currencyAppData.target[property] = value;
};
const updateAllTargetCountryData = (data) => {
  currencyAppData.target = { ...currencyAppData.base, ...data };
};

const updateSingleSettingsData = ({ property, value }) => {
  console.log(property, value);
  currencyAppData.settings[property] = value;
};

const updateAllSettingsData = (data) => {
  currencyAppData.settings = { ...currencyAppData.settings, ...data };
};

const updateSingleRateData = ({ property, value }) => {
  console.log(property, value);
  currencyAppData.rate[property] = value;
};

const updateAllRateData = (data) => {
  currencyAppData.rate = { ...currencyAppData.rate, ...data };
};

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
