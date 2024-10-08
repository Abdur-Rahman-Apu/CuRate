import currencyAppData from "../../config/config.js";
import showToast from "../../ui/toast/showToast.js";

// fetch data from the API
export default async function fetchData() {
  const {
    base: { currencyName: baseCurName },
    target: { currencyName: targetCurName },
  } = currencyAppData;

  const url = `https://api.fxratesapi.com/latest?base=${baseCurName}&currencies=${targetCurName}&resolution=1m&amount=1&places=6&format=json`;

  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (err) {
    // show toast message for the error event
    showToast({ message: err.message, type: "error" });
  }
}
