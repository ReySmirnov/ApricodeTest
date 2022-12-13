import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {AuthContext} from "./components/AuthContext";

import("./main.css");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
      <AuthContext>
    <App />
      </AuthContext>
  </React.StrictMode>
);
