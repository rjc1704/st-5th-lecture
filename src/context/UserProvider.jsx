import React, { createContext, useState, useContext } from "react";

// 상태를 위한 Context
const UserStateContext = createContext();

// 상태 변경 함수를 위한 Context
const UserDispatchContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John", age: 30 });

  return (
    <UserStateContext.Provider value={user}>
      <UserDispatchContext.Provider value={setUser}>
        {children}
      </UserDispatchContext.Provider>
    </UserStateContext.Provider>
  );
};

export { UserProvider, UserStateContext, UserDispatchContext };
