import React from "react";

const AppContext = React.createContext({
  usuarios: [],
  titulo: "default",
});

export { AppContext };
