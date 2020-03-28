import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import App4 from "./App4";
import ListDemoApp from "./ListDemoApp";
import ListDemoApp2 from "./ListDemoApp2";
import FormDemo from "./FormDemo.js";
import FormDemoMultiple from "./FormDemoMultiple.js";

let app = <App />;

const DontUseMeForReal = () => {
  return (
    <div className="App" onClick={handleSelect}>
      <a href="/" className="x" id="app1">
        app1
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app2">
        app2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app3">
        app3
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="app4">
        app4
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="ListDemoApp">
        ListDemoApp
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="ListDemoApp2">
        ListDemoApp2
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="FormDemo">
        FormDemo
      </a>{" "}
      &nbsp;
      <a href="/" className="x" id="FormDemoMultiple">
      FormDemoMultiple
      </a>{" "}
      &nbsp;
      {/* Add as many as you have exercises, but remember className="x" */}
      {app}
    </div>
  );
};

function handleSelect(event) {
  event.preventDefault();
  if (event.target.className !== "x") {
    return;
  }
  const id = event.target.id;
  switch (id) {
    case "app1":
      app = <App />;
      break;
    case "app2":
      app = <App2 />;
      break;
    case "app3":
      app = <App3 />;
      break;
    case "app4":
      app = <App4 />;
      break;
    case "ListDemoApp":
      app = <ListDemoApp />;
      break;
    case "ListDemoApp2":
      app = <ListDemoApp2 />;
      break;
    case "FormDemo":
      app = <FormDemo />;
      break;
      case "FormDemoMultiple":
        app = <FormDemoMultiple />;
        break;
  }
  ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById("root"));
