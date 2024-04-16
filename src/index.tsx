import "./index.css";
import App from "./App";
import React from "react";
import "./bootstrap-custom.css";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { HashRouter as Router } from "react-router-dom";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
