import React from 'react';
import { useHistory } from 'react-router-dom';
import './style.css';
import Card from '../Card';
import {getPublishedArticles, getArticles} from "../../store/selectors/articlesSelectors";
import {useSelector} from "react-redux";
import {Container, Row, Col} from 'react-grid-system';
import { splitEvery } from "../../utils/functions"
import withGlobalLayout from "../hoc/withGlobalLayout";


const FeedItem = ({article}, ) => {
    const history = useHistory();
    if (!article) return null;

    function onViewArticle(data) {
        history.push({
            pathname: `/article/${data.slug}`,
            state: {data}
        })
    }

    return (
            <Card style={{marginBottom: '20px'}} onClick={() => onViewArticle(article)}>
                <div>
                    <img className="postImageWrapper" src={article.articlePreview} alt=""/>
                </div>
                <div className="postImageTitle">{article.title}</div>
            </Card>
    )
};

const FeedRow = ({array}) => {
   return <Container>
        <Row>
            <Col sm={4}>
                <FeedItem article={array[0]} />
            </Col>
            <Col sm={4}>
                <FeedItem article={array[1]} />
            </Col>
            <Col sm={4}>
                <FeedItem article={array[2]} />
            </Col>
        </Row>
    </Container>
};

const RecentPosts = (props) => {
    const publishedArticles = useSelector(getPublishedArticles);  // .slice(0, 3);
    return splitEvery(publishedArticles, 3).map((companyChunk, index) =>
        <FeedRow array={companyChunk} key={index}/>
    )
};

export default withGlobalLayout(RecentPosts);