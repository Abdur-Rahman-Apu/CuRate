const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const setIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getFromLocalStorage, setIntoLocalStorage };
