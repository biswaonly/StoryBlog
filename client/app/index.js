import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "./index.css";
import { AppProvider } from "./provider/AppProvider";

ReactDOM.render(
  <AppProvider>
    <Router>
      <App />
    </Router>
  </AppProvider>,
  document.getElementById("app")
);
