import { useState, useCallback, useRef } from "react";
import { Counter } from "./component";

const useCount = ({ min = 0, max = 5, step = 1 }) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(
    () => setValue((prevState) => Math.min(max, prevState + step)),
    [max, step, value]
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

  // useEffect(() => {
  //   increment();
  // }, [increment]);

  // useEffect(() => {
  //   setInterval(increment, 1000);
  // }, [increment]);

  const intervalRef = useRef(null);

  return (
    <div>
      <Counter value={value} increment={increment} decrement={decrement} />
      <button
        onClick={() => {
          intervalRef.current = setInterval(increment, 1000);
        }}
      >
        launch interval
      </button>
      <button
        onClick={() => {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }}
      >
        stop interval
      </button>
    </div>
  );
};
