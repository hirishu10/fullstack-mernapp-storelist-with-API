import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// We use React.Fragment rather than React.StrictMode because for my personal use you can choose StrictMode
ReactDOM.render(
  // <React.StrictMode>
  <React.Fragment>
    <App />
  </React.Fragment>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
