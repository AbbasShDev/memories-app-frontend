import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const authFromStorage = localStorage.getItem("profile")
  ? JSON.parse(localStorage.getItem("profile"))
  : {};

const initialState = {
  auth: { authData: authFromStorage },
};

const store = createStore(
  reducers,
  initialState,
  compose(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
