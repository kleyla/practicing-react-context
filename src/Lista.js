import React from "react";
import { AppContext } from "./AppContext";

const Lista = () => {
  return (
    <AppContext.Consumer>
      {(value) => {
        return (
          <>
            <h1>{value.titulo}</h1>
            <ul>
              {value.usuarios.map((usuario) => (
                <li>{usuario}</li>
              ))}
            </ul>
          </>
        );
      }}
    </AppContext.Consumer>
  );
};

export default Lista;
