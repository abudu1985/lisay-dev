import * as types from "../actions/actionTypes";

const INITIAL_STATE = {
  isLoading: false,
  articles: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.LOADING:
      return { ...state, isLoading: true };
    case types.ADD_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload],
        isLoading: false,
      };
    case types.EDIT_ARTICLE:
      const articlesWithoutEdited = state.articles.filter(
        (t) => t.id !== action.payload.id
      );
      return {
        ...state,
        articles: [...articlesWithoutEdited, action.payload],
        isLoading: false,
      };
    case types.GET_ARTICLES:
      return { ...state, articles: action.payload, isLoading: false };
    case types.DELETE_ARTICLE:
      const withoutDeletedArticle = state.articles.filter(
        (t) => t.id !== action.payload
      );
      return { ...state, articles: withoutDeletedArticle, isLoading: false };
    default:
      return state;
  }
}
