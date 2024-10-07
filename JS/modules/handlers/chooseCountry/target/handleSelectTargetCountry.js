import { setDataIntoDB } from "../../../db/db.js";
import setNewTargetCountry from "../../../ui/countryOptions/target/setNewTargetCountry.js";
import findCountryInfo from "../../../utilities/findCountryInfo/findCountryInfo.js";
import { updateAllTargetCountryData } from "../../../utilities/updateConfigData/updateConfigData.js";
import handleToggleTargetCountriesList from "./handleToggleTargetCountriesList.js";

export default function handleSelectTargetCountry(e) {
  const countryName = e.target.dataset.name;

  const countryDetails = findCountryInfo(countryName);

  updateAllTargetCountryData(countryDetails);

  setDataIntoDB();

  handleToggleTargetCountriesList();

  setNewTargetCountry();
}
