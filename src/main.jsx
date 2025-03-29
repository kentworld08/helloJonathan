import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { MobileMenuContextProvider } from "./components/utility/mobileMenuContext.jsx";
import { ProjectProvider } from "./components/utility/projectContext.jsx";
import { ColorContextProvider } from "./components/utility/colorContext.jsx";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorContextProvider>
      <MobileMenuContextProvider>
        <ProjectProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </ProjectProvider>
      </MobileMenuContextProvider>
    </ColorContextProvider>
  </StrictMode>
);
