const selectElm = (elm) => document.querySelector(elm);

const addStyle = (elm, style) => Object.assign(elm.style, style);

const eventListener = (elm, event, handler) =>
  elm.addEventListener(event, handler);

export { addStyle, eventListener, selectElm };
