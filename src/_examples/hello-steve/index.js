import React from "react";
import ReactDOM from "react-dom";

function App() {
  return (
    <div className="App">
      <h1>Well, yeah!</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);