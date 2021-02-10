import React, {useEffect} from 'react'
import {connect, useSelector} from "react-redux";
import {useHistory} from 'react-router-dom';
import {branch, compose, lifecycle, pure, renderComponent, withProps, withState} from 'recompose';

import './style.css';
import withGlobalLayout from "../../hoc/withGlobalLayout";
import {getSearchString, getSearchTag} from "../../../store/selectors/searchSelectors";
import { getArticles } from "../../../store/selectors/articlesSelectors";
import ArticleBodyBlock from "./ArdicleBodyBlock";
import Preloader from "../../Preloader";
import NotFound from "../../NotFound";

const scrollWindowToTop = () => window.scrollTo(0, 0);

const ReadArticle = ({article,seconds}) => {
    const searchString = useSelector(getSearchString);
    const searchTag = useSelector(getSearchTag);
    const history = useHistory();

    useEffect(() => {
    if (searchString.trim().length || searchTag.trim().length) {
            history.push({
                pathname: `/`,
                state: {}
            })
        }
    }, [article, searchTag, searchString, seconds]);

    scrollWindowToTop();
    return article ? <ArticleBodyBlock article={article}/> : <NotFound />

};

const mapStateToProps = state => {
    return {
        articles: getArticles(state)
    };
};

export default compose(
    connect(mapStateToProps),
    withProps(({articles, location}) => {
        const currentPath = location.pathname;
        let slug = currentPath.replace('/article/' , '');
        const article = articles.find(ar => ar.slug === slug);
        return {article};
    }),
    withState('seconds', 'updateSeconds', 0),
    lifecycle({
        componentDidMount() {
            const { seconds, updateSeconds} = this.props;
            setTimeout(
                () => {
                    updateSeconds(seconds + 1);
                },
                4000,
            );
        }
    }),
    pure,
    branch(
    ({ article, seconds }) => !article && !seconds,
    renderComponent(Preloader)
    ),
    withGlobalLayout
)(ReadArticle);
