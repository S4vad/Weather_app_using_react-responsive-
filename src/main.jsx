import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { unitContext } from "./utils/context";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <unitContext.Provider>
      <App />
    </unitContext.Provider>
  </StrictMode>
);
