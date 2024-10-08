import countryInfo from "../assets/data/data.js";
import init from "./modules/init/init.js";

(() => {
  init();
  console.log(countryInfo.length);
})();
