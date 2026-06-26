import React from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";

export function render(locale = "en") {
  return renderToString(
    <React.StrictMode>
      <App locale={locale} />
    </React.StrictMode>
  );
}
