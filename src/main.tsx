import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BattleButtonContainer from "./components/BattleButtonContainer.tsx";
import "bootstrap/dist/css/bootstrap.css";
import ListGroup from "./components/ListGroup.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
