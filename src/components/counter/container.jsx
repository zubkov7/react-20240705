import { useState, useCallback } from "react";
import { Counter } from "./component";

const useCount = ({ min = 0, max = 5, step = 1 }) => {
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

const useStepOneCounter = () => {
  return useCount({ min: 0, max: 10000000000, step: 1 });
};

export const CounterContainer = () => {
  const { value, increment, decrement } = useStepOneCounter();

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
