import { createContext, useState, useContext } from "react";

const ColorContext = createContext();

import React from "react";

export const ColorContextProvider = ({ children }) => {
  const [color, setColor] = useState("white-noise");
  const [bgColor, setBgColor] = useState(false);
  return (
    <ColorContext.Provider value={{ color, setColor, bgColor, setBgColor }}>
      {children}
    </ColorContext.Provider>
  );
};

export const UseColorContext = () => {
  return useContext(ColorContext);
};
