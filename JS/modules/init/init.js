import runEventListeners from "../listeners/eventListeners.js";
import updateWithPreviousData from "../ui/updateWithPreviousData/updateWithPreviousData.js";
import stayOnCurrentPage from "../utilities/stayOnCurrentPage/stayOnCurrentPage.js";

export default function init() {
  updateWithPreviousData();
  stayOnCurrentPage();
  runEventListeners();
}
