import { useState, useEffect } from "react";

export function useLocalStorageState(intialValue, key) {
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return intialValue ? JSON.parse(storedValue) : intialValue;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
