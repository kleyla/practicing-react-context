import React, { useState } from "react";
import { Login } from "./components/Login";
import { Profile } from "./components/Profile";
import { LoginContext } from "./contexts/LoginContext";

export const App2 = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("");

  return (
    <>
      <LoginContext.Provider value={{username, setUsername, setShowProfile}}>
        {showProfile ? <Profile /> : <Login />}
      </LoginContext.Provider>
    </>
  );
};
