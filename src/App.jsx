import React from "react";
import CountContextProvider from "./context/CountContextProvider";
import Counter from "./components/Counter";
import Message from "./components/Message";

const App = () => {
  console.log("App 렌더링");
  return (
    <CountContextProvider>
      <Counter />
      <Message />
    </CountContextProvider>
  );
};

export default App;
