import currencyAppData from "../config/config.js";
import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../utilities/storage/storage.js";

const getDataFromDB = () => {
  return getFromLocalStorage("curat-app");
};

const setDataIntoDB = () => {
  return setIntoLocalStorage("curat-app", currencyAppData);
};

export { getDataFromDB, setDataIntoDB };
