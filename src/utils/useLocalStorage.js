import * as React from "react";

const originalSetItem = localStorage.setItem;
localStorage.setItem = function () {
  const event = new Event("storageChange");
  document.dispatchEvent(event);
  originalSetItem.apply(this, arguments);
};
const originalRemoveItem = localStorage.removeItem;
localStorage.removeItem = function () {
  const event = new Event("storageChange");
  document.dispatchEvent(event);
  originalRemoveItem.apply(this, arguments);
};

function useLocalStorage(key) {
  const storageItem = localStorage.getItem(key);
  const [storedValue, setValue] = React.useState(
    !!storageItem ? JSON.parse(storageItem) : null
  );

  const setLocalItem = () => {
    /** local storage update is not that fast */
    /** it makes sure that we are getting the new value  */
    setTimeout(() => {
      const itemValueFromStorage = localStorage.getItem(key);
      const value = itemValueFromStorage && JSON.parse(itemValueFromStorage);
      setValue(value);
    }, 50);
  };

  const setStoredValue = (value) => {
    const parsedValue =
      typeof value === "object" ? JSON.stringify(value) : value;
    localStorage.setItem(key, parsedValue);
  };

  React.useEffect(() => {
    document.addEventListener("storageChange", setLocalItem, false);

    return () => document.removeEventListener("storageChange", setLocalItem);
  }, [setLocalItem]);

  return [storedValue, setStoredValue];
}

export default useLocalStorage;
