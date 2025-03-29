import { createContext, useContext, useState } from "react";

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
  const [active, setActive] = useState("first");

  return (
    <ProjectContext.Provider value={{ active, setActive }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const UseProjectContext = () => {
  return useContext(ProjectContext);
};
