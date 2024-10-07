import {
  toastMessage,
  toastMessageContainer,
} from "../../elements/htmlElements.js";
import { addStyle } from "../../utilities/dom/dom.js";

export default function showToast({ message, type }) {
  // style on success and error state
  const typeStyle =
    type === "success"
      ? { backgroundColor: "#26de81", color: "#000" }
      : { backgroundColor: "#eb3b5a", color: "#fff" };

  // show style css classes
  const showStyle = {
    visibility: "visible",
    scale: 1,
    opacity: 1,
    ...typeStyle,
  };

  // set the toast message
  toastMessage.innerText = message;

  // set the show style class
  addStyle(toastMessageContainer, showStyle);

  // hide the toast message after 2sec
  setTimeout(() => {
    const hideStyle = { visibility: "hidden", scale: 0, opacity: 0 };

    addStyle(toastMessageContainer, hideStyle);
  }, 2000);
}
