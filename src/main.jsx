import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router";
import "./index.css";
import "./lenis";
import App from "./App.jsx";

// REMOVE SESSION STORAGE
window.addEventListener("beforeunload", () => {
  sessionStorage.removeItem("heroAnimated");
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter basename="/">
      <App />
    </HashRouter>
  </StrictMode>,
);
