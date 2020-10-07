import * as types from '../actions/actionTypes'

const INITIAL_STATE = {
    searchString: '',
    searchTag: ''
};

export default function(state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_SEARCH_BY_STRING:
            return {...state, searchString: action.payload};
        case types.SET_SEARCH_BY_TAG:
            return {...state, searchTag: action.payload};
        case types.CLEAR_SEARCH:
            return {...state, searchString: '', searchTag: ''};
        default:
            return state
    }
}