import { setDataIntoDB } from "../../../db/db.js";
import setNewBaseCountry from "../../../ui/countryOptions/base/setNewBaseCountry.js";
import findCountryInfo from "../../../utilities/findCountryInfo/findCountryInfo.js";
import { updateAllBaseCountryData } from "../../../utilities/updateConfigData/updateConfigData.js";
import handleToggleBaseCountriesList from "./handleToggleBaseCountriesList.js";

export default function handleSelectBaseCountry(e) {
  const countryName = e.target.dataset.name;

  const countryDetails = findCountryInfo(countryName);

  //   update the config
  updateAllBaseCountryData(countryDetails);

  //   update the storage
  setDataIntoDB();

  //   toggle the options part
  handleToggleBaseCountriesList();

  //   update the UI of the base part
  setNewBaseCountry();
}
