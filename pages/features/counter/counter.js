import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { increment, decrement, reset, incrementByAmount } from "./counterSlice";
const Counter = () => {
  const counter = useSelector((state) => state.counter.count);
  const Dispatch = useDispatch();

  const [incrementAmount, setIncrementAmount] = useState(0);
  const addvalue = Number(incrementAmount) || 0;
  const resetAll = () => {
    setIncrementAmount(0);
    Dispatch(reset());
  };
  return (
    <div>
      <p>{counter}</p>
      <div>
        <button onClick={() => Dispatch(increment())}>+</button>
        <button onClick={() => Dispatch(decrement())}>-</button>
        <input
          type="text"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button onClick={() => Dispatch(incrementByAmount(addvalue))}>
          addamount
        </button>
        <button onClick={resetAll}>reset</button>
      </div>
    </div>
  );
};

export default Counter;
