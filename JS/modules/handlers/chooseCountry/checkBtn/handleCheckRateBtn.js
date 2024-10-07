import currencyAppData from "../../../config/config.js";
import { setDataIntoDB } from "../../../db/db.js";
import { checkBtn } from "../../../elements/htmlElements.js";
import openCurrencyConvertSection from "../../../ui/currencyConvert/toogleCurrencyConvertSection/openCurrencyConvertSection.js";
import showToast from "../../../ui/toast/showToast.js";
import fetchData from "../../../utilities/fetchData/fetchData.js";
import {
  updatePageNo,
  updateSingleRateData,
} from "../../../utilities/updateConfigData/updateConfigData.js";

export default async function handleCheckRateBtn() {
  // change the check button text
  checkBtn.innerText = "Loading...";

  //   fetch data from the API
  try {
    const data = await fetchData();

    // handled error response
    if (!data?.success) {
      showToast({ message: data?.error ?? "Network error", type: "error" });
      return;
    }

    // handled success response
    if (data?.success) {
      const {
        target: { currencyName: targetCurName },
      } = currencyAppData;

      const { rates } = data;

      // get target currency rate
      const targetRate = rates[targetCurName];

      //   update the config
      updateSingleRateData({ property: "target", value: targetRate });

      updatePageNo(2);

      //   update the storage
      setDataIntoDB();

      //   open convert section
      openCurrencyConvertSection();

      //   show success message
      showToast({ message: "Currency Rate Received", type: "success" });
    }
  } catch (err) {
    // show error message
    showToast({ message: err.message ?? "Data fetch error", type: "error" });
  }

  //   update text of the check button
  checkBtn.innerText = "Check Rate";
}
