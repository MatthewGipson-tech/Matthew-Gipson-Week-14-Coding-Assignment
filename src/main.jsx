import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

import App from "./App.js";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
  