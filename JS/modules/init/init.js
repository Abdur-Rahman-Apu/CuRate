import runEventListeners from "../listeners/eventListeners.js";
import updateWithPreviousData from "../ui/updateWithPreviousData/updateWithPreviousData.js";

export default function init() {
  updateWithPreviousData();
  runEventListeners();
}
