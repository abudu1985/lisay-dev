import React, {Fragment, useState, useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {Container, Row, Col} from 'react-grid-system';
import './style.css';
import {getPublishedArticles} from "../../store/selectors/articlesSelectors";
import {getSearchString, getSearchTag} from "../../store/selectors/searchSelectors";
import {splitEvery} from "../../utils/functions"
import withGlobalLayout from "../hoc/withGlobalLayout";
import {clearSearch} from "../../store/actions/articles";
import Preloader from "../Preloader";
import FeedItem from "./FeedItem";


const FeedRow = ({array}) => {
    return <Container>
        <Row>
            <Col lg={4} md={6} sm={6} xs={12}>
                <FeedItem article={array[0]}/>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
                <FeedItem article={array[1]}/>
            </Col>
            <Col lg={4} md={6} sm={6} xs={12}>
                <FeedItem article={array[2]}/>
            </Col>
        </Row>
    </Container>
};

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
    let publishedArticles = useSelector(getPublishedArticles);  // .slice(0, 3);
    const searchString = useSelector(getSearchString);
    const searchTag = useSelector(getSearchTag);
    const [timer, setTimer] = useState(0);
    const [noArticles, setNoArticles] = useState(false);
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
            {splitEvery(publishedArticles, 3).map((articlesRowChunk, index) =>
                <FeedRow array={articlesRowChunk} key={index}/>)
            }
        </Fragment>) : <Preloader/>
};

export default withGlobalLayout(RecentPosts);


