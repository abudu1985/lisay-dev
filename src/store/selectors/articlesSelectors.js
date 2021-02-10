import { createSelector } from 'reselect';

export const getArticles = state => state.articlesReducer.articles;

export const getPublishedArticles = createSelector(
    getArticles,
    articles => articles.filter(a => a.isPublished)
);

export const getArticlesTagsTally = createSelector(
    getPublishedArticles,
    articles => {
        if (!articles.length) return {};
        const arr = articles.map(cur => cur.tagList)
            .reduce((prev,cur) => prev.concat(cur));
        const counts = {};
        for (let i = 0; i < arr.length; i++) {
            let num = arr[i];
            counts[num] = counts[num] ? counts[num] + 1 : 1;
        }
        return counts;
    }
);

