import {
  toastMessage,
  toastMessageContainer,
} from "../../elements/htmlElements.js";
import { addStyle } from "../../utilities/dom/dom.js";

export default function showToast({ message, type }) {
  const typeStyle =
    type === "success"
      ? { backgroundColor: "#26de81", color: "#000" }
      : { backgroundColor: "#eb3b5a", color: "#fff" };

  const showStyle = {
    visibility: "visible",
    scale: 1,
    opacity: 1,
    ...typeStyle,
  };

  toastMessage.innerText = message;

  addStyle(toastMessageContainer, showStyle);

  setTimeout(() => {
    const hideStyle = { visibility: "hidden", scale: 0, opacity: 0 };

    addStyle(toastMessageContainer, hideStyle);
  }, 2000);
}
