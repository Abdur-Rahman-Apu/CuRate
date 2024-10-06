import {
  getFromLocalStorage,
  setIntoLocalStorage,
} from "../utilities/storage/storage";

const getDataFromDB = () => {
  return getFromLocalStorage("curat-app");
};

const setDataIntoDB = (data) => {
  return setIntoLocalStorage("curat-app", data);
};

export { getDataFromDB, setDataIntoDB };
