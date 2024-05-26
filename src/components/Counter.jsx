import React, { useContext } from "react";
import { CountContext } from "../context/CountContextProvider";

const Counter = () => {
  const { count, increment } = useContext(CountContext);
  console.log("Counter 렌더링");
  return (
    <div style={{ border: "1px solid black", borderRadius: 5 }}>
      <h3> Counter Component</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
