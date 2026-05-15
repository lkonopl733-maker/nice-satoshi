import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // переконайся, що файл App.jsx лежить поруч

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
