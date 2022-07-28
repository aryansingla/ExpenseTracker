import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "./context/context";
const root = ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
