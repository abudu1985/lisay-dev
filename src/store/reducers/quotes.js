import * as types from '../actions/actionTypes'

const INITIAL_STATE = {
    quotes: []
};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case types.SET_QUOTES:
            return {...state, quotes: action.payload};
        case types.ADD_QUOTE:
            return {...state, quotes: [action.payload, ...state.quotes]};
        case types.EDIT_QUOTE:
            return {
                ...state,
                quotes: state.quotes.map(
                    quote => quote._id === action.payload._id ? action.payload
                        : quote
                )
            };
        case types.DELETE_QUOTE:
            return {
                ...state,
                quotes: state.quotes.filter(quote => quote._id !== action.payload)
            };
        default:
            return state
    }
}