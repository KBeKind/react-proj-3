import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import BattleButtonContainer from "./components/BattleButtonContainer.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
    <BattleButtonContainer />
  </React.StrictMode>
);
