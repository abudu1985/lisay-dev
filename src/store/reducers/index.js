import { combineReducers } from "redux";
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./auth";
import apiStatusReducer from "./apiStatus";
import articlesReducer from "./articles";
import searchReducer from "./search";
import quotesReducer from "./quotes";

export default combineReducers({
  firebaseReducer,
  authReducer,
  apiStatusReducer,
  articlesReducer,
  searchReducer,
    quotesReducer,
});
