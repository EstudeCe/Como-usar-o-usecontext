import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RepositoryContextProvider } from "./contexts/RepositoryContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RepositoryContextProvider>
      <App />
    </RepositoryContextProvider>
  </React.StrictMode>
);
