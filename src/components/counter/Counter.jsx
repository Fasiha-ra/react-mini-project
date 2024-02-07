import React, { useState } from "react";
import {Wrap} from "./counter.styles";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  };
  const DecNum = () => {
    count > 0 ? setCount(count - 1) : setCount(0);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <>
    <Wrap><h1 className="heading">Counter App</h1>
      <h3 className="sub-heading">{count}</h3>
      <button onClick={IncNum} className="incr btn" style={{background:props.colors.bg1}}>Increment</button>
      <button onClick={reset} className="reset btn" style={{background:props.colors.bg2}}>Reset</button>
      <button onClick={DecNum} className="decr btn" style={{background:props.colors.bg3}}>Decrement</button>
      </Wrap>
    </>
  );
};

export default Counter;
