import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { HashRouter, Route } from "react-router-dom";

import configureStore from "./store/store";
import HomePage from "./components/homepage/homepage_container";

const Root = ({ store }) => (
  <Provider>
    <HashRouter>
      <Route path="/" component={HomePage} />
    </HashRouter>
  </Provider>
);

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  ReactDOM.render(<p>wut.</p>)
})
