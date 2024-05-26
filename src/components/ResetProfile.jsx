import React, { memo, useContext } from "react";
import { UserDispatchContext } from "../context/UserProvider";

const ResetProfile = () => {
  const setUser = useContext(UserDispatchContext);
  console.log("ResetProfile render");

  const resetUser = () => {
    setUser({ name: "John", age: 30 });
  };

  return (
    <div style={{ border: "1px solid black", borderRadius: 5 }}>
      <h2>ResetProfile</h2>
      <button onClick={resetUser}>Reset User</button>
    </div>
  );
};

export default memo(ResetProfile);
