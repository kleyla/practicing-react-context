import React, { useContext } from "react";
import { LoginContext } from "./../contexts/LoginContext";

export const Login = () => {
  const { setUsername, setShowProfile } = useContext(LoginContext);

  return (
    <div className="login-card">
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <input type="text" placeholder="Password..." />

      <button
        onClick={() => {
          setShowProfile(true);
        }}
      >
        Login
      </button>
    </div>
  );
};
