import { useState } from "react";
import { Counter } from "./component";

export const CounterContainer = () => {
  const [value, setValue] = useState(0);

  const increment = () => setValue(value + 1);
  const decrement = () => setValue(value - 1);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
