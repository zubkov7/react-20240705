"use client";

import { useCallback } from "react";
import { useState } from "react";

const useCount = ({ min = 0, max = 5, step = 1 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(
    () => setValue((prevState) => Math.min(max, prevState + step)),
    [max, step]
  );

  const decrement = useCallback(
    () => setValue((prevState) => Math.max(min, prevState - step)),
    [min, step]
  );

  return {
    value,
    increment,
    decrement,
  };
};

export default function Page() {
  const { value, increment, decrement } = useCount();

  return (
    <div>
      <button onClick={increment}>+</button>
      {value}
      <button onClick={decrement}>-</button>
    </div>
  );
}
