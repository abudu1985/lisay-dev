import { createSelector } from 'reselect';
import currentUserAuth from "./userSelectors";

export const getArticles = state => state.articlesReducer.articles;

export const getPublishedArticles = createSelector(
    getArticles,
    articles => articles.filter(a => a.isPublished)
);

