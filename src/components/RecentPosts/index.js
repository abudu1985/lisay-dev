import React, {Fragment, useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import './style.css';
import {getPublishedArticles} from "../../store/selectors/articlesSelectors";
import {getSearchString, getSearchTag} from "../../store/selectors/searchSelectors";
import withGlobalLayout from "../hoc/withGlobalLayout";
import {clearSearch} from "../../store/actions/articles";
import Preloader from "../Preloader";
import FeedItem from "./FeedItem";
import GridGenerator from "./GridGenerator";

const findBySearchString = (publishedArticles, searchString) =>
    publishedArticles.filter(el =>
        el.title.includes(searchString) ||
        el.description.includes(searchString) ||
        el.tagList.includes(searchString)
    );

const findBySearchTag = (publishedArticles, searchTag) =>
    publishedArticles.filter((el) =>
        el.tagList.includes(searchTag));

const ResetButton = ({resetSearch}) => <div id="reset-centered">
    <button
        onClick={() => resetSearch()}
        className="btn-switch"
    >
        Reset search
    </button>
</div>;

const RecentPosts = (props) => {
    const dispatch = useDispatch();
    let publishedArticles = useSelector(getPublishedArticles);
    const searchString = useSelector(getSearchString);
    const searchTag = useSelector(getSearchTag);
    const [timer, setTimer] = useState(0);
    const [noArticles, setNoArticles] = useState(false);

    // useEffect(() => {
    //     const interval1 = setInterval(() => console.log('publishedArticles -> -> -> ', publishedArticles), 2000);
    //     return () => {
    //         clearInterval(interval);
    //     };
    // }, []);

    useEffect(() => {
        const interval = setInterval(
            () => {
                setTimer((currentTimer) => currentTimer + 1)
            },
            1000
        );
        if (timer > 2) {
            if (!publishedArticles.length) setNoArticles(true);
            clearInterval(interval)
        }
        return () => clearInterval(interval);
    }, [timer, publishedArticles, searchString]);

    const resetSearch = () => {
        dispatch(clearSearch());
        setNoArticles(false);
    };

    if (searchString) publishedArticles = findBySearchString(publishedArticles, searchString);
    if (searchTag) publishedArticles = findBySearchTag(publishedArticles, searchTag);
    if (noArticles && searchString) {
        return <Fragment>
            <div id="reset-centered">
                <h2>No articles found(=</h2>
            </div>
            <ResetButton
                resetSearch={resetSearch}
            />
        </Fragment>
    }
    return publishedArticles.length ?
        (<Fragment>
            {
                (searchString || searchTag) &&
                <ResetButton
                    resetSearch={resetSearch}
                />
            }
            {
                <GridGenerator cols={3}>
                    {
                        publishedArticles.map((article, index) => (<FeedItem article={article} key={index}/>))
                    }
                </GridGenerator>
            }
        </Fragment>) : <Preloader/>
};

export default withGlobalLayout(RecentPosts);


