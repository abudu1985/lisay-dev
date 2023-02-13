import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import App from "./components/App";
import { reactReduxFirebase } from "react-redux-firebase";
import firebase from "./services/firebase";
import reducers from "./store/reducers";

import "./css/index.css";

// ENHANCING STORE WITH FIREBASE
const createStoreWithFirebase = compose(reactReduxFirebase(firebase.firebase))(
  createStore
);
const store = createStoreWithFirebase(
  reducers,
  {},
  applyMiddleware(reduxThunk)
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);
