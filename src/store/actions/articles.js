import {apiCallError, beginApiCall} from "./apiStatus";
import * as types from './actionTypes'
import Firestore from "../../services/db/articleFunctions";

// get articles from firestore
export const getAllArtiles = () => async dispatch => {
    try {
        dispatch(beginApiCall());
        Firestore.getArticles()
            .then(snapshot => {
                let midArr = [];
                snapshot.forEach(doc => {
                    const obj = Object.assign({}, doc.data(), {id: doc.id});
                    midArr.push(obj);
                });
                dispatch({type: types.GET_ARTICLES, payload: midArr})
            })
            .catch(error => {
                alert(error);
            })
    } catch (err) {
        dispatch(apiCallError());
        dispatch({ type: types.SIGNIN_ERROR, payload: "Can not get all articles" });
    }
};

export const setSearchByString = (str) => async dispatch => {
    dispatch({type: types.SET_SEARCH_BY_STRING, payload: str})
};

export const setSearchByTag = (tag) => async dispatch => {
    dispatch({type: types.SET_SEARCH_BY_TAG, payload: tag})
};

export const clearSearch = () => async dispatch => {
    dispatch({type: types.CLEAR_SEARCH})
};