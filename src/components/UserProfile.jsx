import React, { useContext } from "react";
import { UserDispatchContext, UserStateContext } from "../context/UserProvider";

const UserProfile = () => {
  const user = useContext(UserStateContext);
  const setUser = useContext(UserDispatchContext);
  console.log("UserProfile render");

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increase Age
      </button>
    </div>
  );
};

export default UserProfile;
