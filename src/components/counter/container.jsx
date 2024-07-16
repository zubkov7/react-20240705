import { useState, useEffect } from "react";
import { Counter } from "./component";

const useCount = ({ min = 0, max = 5, step = 1 }) => {
  const [value, setValue] = useState(min);

  const increment = () =>
    setValue((prevState) => Math.min(max, prevState + step));
  const decrement = () =>
    setValue((prevState) => Math.max(min, prevState - step));

  return {
    value,
    increment,
    decrement,
  };
};

const useStepOneCounter = () => {
  return useCount({ min: 0, max: 100, step: 1 });
};

export const CounterContainer = () => {
  const { value, increment, decrement } = useStepOneCounter();

  useEffect(() => {
    const handleScroll = () => console.log(window.scrollY);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
