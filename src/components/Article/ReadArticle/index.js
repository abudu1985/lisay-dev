import React, {useEffect} from 'react'
import {useSelector} from "react-redux";
import './style.css';
import withGlobalLayout from "../../hoc/withGlobalLayout";
import LightBoxImage from "../../LightBoxImage";
import {getSearchString, getSearchTag} from "../../../store/selectors/searchSelectors";
import PrevNextBlock from "../PrevNextBlock";
import QuillBodyBlock from "./QuillBodyBlock";

const scrollWindowToTop = () => window.scrollTo(0, 0);

const ReadArticle = ({location, history}) => {
    const {state: {data, data: article}} = location;
    const searchString = useSelector(getSearchString);
    const searchTag = useSelector(getSearchTag);

    useEffect(() => {
    if (searchString.trim().length || searchTag.trim().length) {
            history.push({
                pathname: `/`,
                state: {data}
            })
        }
    }, [history, location, searchTag, searchString]);

    const goToArticle = nextArticle => {
        history.push({
            pathname: `/article/${nextArticle.slug}`,
            state: {data: nextArticle}
        })
    };

    scrollWindowToTop();
    if (!article) {
        history.replace('/')
    }

    return (
        <div>
            <LightBoxImage
                imageClass="readArticlePreviewImgChild"
                imageSrc={article.articlePreview}
                wrapperClass="readArticlePreviewImgWrap"
            />
            <br/>
            <div className="readArticleTitle">
                {article.title}
            </div>
            <br/>
            <div className="readArticleDescription">
                {article.description}
            </div>
            <div className="articleDateBlock">
                Posted on {article.postedOn}
            </div>
            <QuillBodyBlock data={article.body}/>
            <div className="tagLabelsBlock">
                {
                    article.tagList.map((tag, index) => {
                        return (<span className="tagLabel" key={index}>{tag}</span>)
                    })
                }
            </div>
            <PrevNextBlock currentId={article.id} goToArticle={goToArticle}/>
        </div>
    )
};

export default withGlobalLayout(ReadArticle);
