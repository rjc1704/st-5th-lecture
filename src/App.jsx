import React from "react";
import ResetProfile from "./components/ResetProfile";
import UserProfile from "./components/UserProfile";
import { UserProvider } from "./context/UserProvider";

const App = () => (
  <UserProvider>
    <UserProfile />
    <ResetProfile />
  </UserProvider>
);

export default App;
