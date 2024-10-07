import runEventListeners from "../listeners/eventListeners.js";
import updateWithPreviousData from "../ui/updateWithPreviousData/updateWithPreviousData.js";
import stayOnCurrentPage from "../utilities/stayOnCurrentPage/stayOnCurrentPage.js";

export default function init() {
  // if data available in the localStorage then update the UI with that data
  updateWithPreviousData();

  // stay on the current page of refresh the browser
  stayOnCurrentPage();

  // event listeners
  runEventListeners();
}
