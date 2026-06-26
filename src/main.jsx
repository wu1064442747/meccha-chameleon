import React from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App.jsx";
import { getLocaleFromPath } from "./content.js";
import "./styles.css";

const rootElement = document.getElementById("root");
const locale = getLocaleFromPath(window.location.pathname);
const app = (
  <React.StrictMode>
    <App locale={locale} />
  </React.StrictMode>
);

if (!rootElement) {
  throw new Error("Expected #root element to exist before mounting React");
}

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, app);
} else {
  createRoot(rootElement).render(app);
}
