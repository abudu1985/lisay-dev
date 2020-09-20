import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import articlesReducer from "./articles";

export default combineReducers({
  firebaseReducer,
  authReducer,
  apiStatusReducer,
  articlesReducer
});
