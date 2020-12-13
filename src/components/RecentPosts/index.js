import React, {Fragment} from 'react'
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
    publishedArticles.filter((el) =>
        el.title.includes(searchString) || el.description.includes(searchString));

const findBySearchTag = (publishedArticles, searchTag) =>
    publishedArticles.filter((el) =>
        el.tagList.includes(searchTag));

const RecentPosts = (props) => {
    const dispatch = useDispatch();
    let publishedArticles = useSelector(getPublishedArticles);  // .slice(0, 3);
    const searchString = useSelector(getSearchString);
    const searchTag = useSelector(getSearchTag);
    const resetSearch = () => {
        dispatch(clearSearch())
    };

    if (searchString) publishedArticles = findBySearchString(publishedArticles, searchString);
    if (searchTag) publishedArticles = findBySearchTag(publishedArticles, searchTag);

    return publishedArticles.length ?
        (<Fragment>
            {
                (searchString || searchTag) &&
                <div id="reset-centered">
                    <button
                        onClick={() => resetSearch()}
                        className="btn-switch"
                    >
                        Reset search
                    </button>
                </div>
            }
            {splitEvery(publishedArticles, 3).map((articlesRowChunk, index) =>
                <FeedRow array={articlesRowChunk} key={index} />)
            }
        </Fragment>) : <Preloader/>
};

export default withGlobalLayout(RecentPosts);


