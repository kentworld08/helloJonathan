import { createContext, useContext, useState } from "react";

const MobileMenuContext = createContext();

export const MobileMenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export const UsemobileMenuContext = () => {
  return useContext(MobileMenuContext);
};
