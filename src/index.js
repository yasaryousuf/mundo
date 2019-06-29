import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import "../node_modules/react-progress-2/main.css";
import Application from "./Application";

function App() {
  return (
    <div className="App">
      <Application />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
