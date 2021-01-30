import React, {useEffect, useState} from 'react'
import {useSelector} from "react-redux";
import {Container, Row, Col} from 'react-grid-system';
import {getPublishedArticles} from "../../store/selectors/articlesSelectors";
import RoundButton from "../RoundButton";
import Spinner from "../Spinner";

const PrevNextBlock = ({currentId, goToArticle}) => {
    const articles = useSelector(getPublishedArticles);
    const [loadingName, setLoadingName] = useState('');
    const currentArticleIndex = articles.findIndex(post => post.id === currentId);
    const prev = currentArticleIndex - 1 >= 0 ? currentArticleIndex - 1 : null;
    const next = currentArticleIndex + 1 < articles.length ? currentArticleIndex + 1 : null;

    useEffect(() => {
        if (loadingName) goToArticle(articles[loadingName === 'next' ? next : prev]);
        return () => { setLoadingName('') }
    },[loadingName]);

    const handleDecrement = () => {
        if(loadingName) return;
        setLoadingName('prev');
    };
    const handleIncrement = event => {
        event.preventDefault();
        if(loadingName) return;
        setLoadingName('next');
    };

    return (
        <div className="article-save-row">
            <Container>
                <Row justify="around">
                    <Col xs={6}>
                        {(prev || prev === 0) &&
                        <RoundButton
                            innerHtml={loadingName && loadingName === 'prev' ? <Spinner/> : "< PREV"}
                            color={'green'}
                            onClick={handleDecrement}
                            additionalClass={"noOutline"}
                        />
                        }
                    </Col>
                    <Col xs={6}>
                        {next &&
                        <RoundButton
                            innerHtml={loadingName && loadingName === 'next' ? <Spinner/> : "NEXT >"}
                            onClick={e => handleIncrement(e)}
                            color={'green'}
                            additionalClass={"noOutline"}
                        />
                        }
                    </Col>
                </Row>
            </Container>
        </div>
    )
};

export default PrevNextBlock;