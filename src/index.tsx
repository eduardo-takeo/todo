import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import HomePage from "./pages/HomePage";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
