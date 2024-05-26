import React, { createContext, useState, useMemo } from "react";

export const CountContext = createContext(null);

const CountContextProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  console.log("CountContextProvider 렌더링");
  const increment = () => setCount((prevCount) => prevCount + 1);

  return (
    <CountContext.Provider value={{ count, increment }}>
      {children}
    </CountContext.Provider>
  );
};

export default CountContextProvider;
