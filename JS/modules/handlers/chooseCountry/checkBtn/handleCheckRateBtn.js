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
  checkBtn.innerText = "Loading...";
  try {
    const data = await fetchData();

    console.log(data);

    if (!data?.success) {
      showToast({ message: data?.error ?? "Network error", type: "error" });
      return;
    }

    if (data?.success) {
      const {
        target: { currencyName: targetCurName },
      } = currencyAppData;
      const { rates } = data;

      const targetRate = rates[targetCurName];

      updateSingleRateData({ property: "target", value: targetRate });

      updatePageNo(2);

      setDataIntoDB();

      openCurrencyConvertSection();

      showToast({ message: "Currency Rate Received", type: "success" });
    }
  } catch (err) {
    console.log(err);
    showToast({ message: err.message ?? "Data fetch error", type: "error" });
  }

  checkBtn.innerText = "Check Rate";
}
