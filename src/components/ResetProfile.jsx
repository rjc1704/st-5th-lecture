import React, { memo, useContext } from "react";
import { UserDispatchContext } from "../context/UserProvider";

const ResetProfile = () => {
  const setUser = useContext(UserDispatchContext);
  console.log("ResetProfile render");

  const resetUser = () => {
    setUser({ name: "John", age: 30 });
  };

  return <button onClick={resetUser}>Reset User</button>;
};

export default memo(ResetProfile);
