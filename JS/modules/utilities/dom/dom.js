const selectElm = (elm) => document.querySelector(elm);

const addStyle = (elm, style) => Object.assign(elm.style, style);

export { addStyle, selectElm };
