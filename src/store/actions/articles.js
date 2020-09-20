
import {apiCallError, beginApiCall} from "./apiStatus";
import {SIGNIN_ERROR, SIGNIN_SUCCESS} from "./actionTypes";
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
                dispatch({type: 'GET_ARTICLES', payload: midArr})
            })
            .catch(error => {
                alert(error);
            })
    } catch (err) {
        dispatch(apiCallError());
        dispatch({ type: SIGNIN_ERROR, payload: "Can not get all articles" });
    }
};