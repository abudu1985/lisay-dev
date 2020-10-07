import { createSelector } from 'reselect';
import currentUserAuth from "./userSelectors";

export const getSearchString = state => state.searchReducer.searchString;

export const getSearchTag = state => state.searchReducer.searchTag;

