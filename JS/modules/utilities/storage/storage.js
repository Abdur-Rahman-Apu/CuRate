// retrieve from the storage
const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// set in to the storage
const setIntoLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export { getFromLocalStorage, setIntoLocalStorage };
