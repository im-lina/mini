import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Main from "./Main";
//import * as serviceWorker from "./serviceWorker";
import rootReducer from "./module";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import Login from "./components/Login";
import MySchedule from "./components/MySchedule";

const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <MySchedule />
  </Provider>,
  document.getElementById("root")
);
//serviceWorker.unregister();
