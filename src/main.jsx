import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Page } from "./Page.jsx";
import "./styles/main.scss";

/**
 * Application entry point
 * Renders the main Page component into the DOM with React 18's createRoot API
 * StrictMode enables additional development checks and warnings
 */
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Main application component */}
    <Page />
  </StrictMode>
);
