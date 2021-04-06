import React, { useContext } from "react";
import { LoginContext } from "./../contexts/LoginContext";

export const Profile = () => {
  const { username } = useContext(LoginContext);

  return (
    <>
      <h2>Profile</h2>
      <h3>Username: {username}</h3>
    </>
  );
};
