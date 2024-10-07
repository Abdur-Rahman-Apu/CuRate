import { setDataIntoDB } from "../../../db/db.js";
import setNewBaseCountry from "../../../ui/countryOptions/base/setNewBaseCountry.js";
import findCountryInfo from "../../../utilities/findCountryInfo/findCountryInfo.js";
import { updateAllBaseCountryData } from "../../../utilities/updateConfigData/updateConfigData.js";
import handleToggleBaseCountriesList from "./handleToggleBaseCountriesList.js";

export default function handleSelectBaseCountry(e) {
  console.log("select");
  console.log(e.target.dataset.name);
  const countryName = e.target.dataset.name;

  const countryDetails = findCountryInfo(countryName);

  updateAllBaseCountryData(countryDetails);

  setDataIntoDB();

  handleToggleBaseCountriesList();

  setNewBaseCountry();
}
