import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//import * as serviceWorker from "./serviceWorker";
import rootReducer from "./module";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";

// rootReducer 를 가진 Store 생성
const store = createStore(rootReducer, composeWithDevTools());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

//serviceWorker.unregister();
