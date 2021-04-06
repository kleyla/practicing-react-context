import React from "react";
import Lista from "./Lista";
import { AppContext } from "./AppContext";

function App() {
  return (
    <AppContext.Provider
      value={{ usuarios: ["karen", "andrea"], titulo: "Mi App" }}
    >
      <div>
        <Lista />
      </div>
    </AppContext.Provider>
  );
}

export default App;
