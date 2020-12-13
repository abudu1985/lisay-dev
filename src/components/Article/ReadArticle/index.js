import React from 'react'
import withGlobalLayout from "../../hoc/withGlobalLayout";
import './style.css';
import ReactQuill from 'react-quill';
import hljs from "highlight.js";
import 'highlight.js/styles/darcula.css';
import 'react-quill/dist/quill.bubble.css';
import LightBoxImage from "../../LightBoxImage";

const scrollWindowToTop = () => window.scrollTo(0, 0);

const ReadArticle = ({location, history}) => {
    const {state: {data: article}} = location;
    scrollWindowToTop();
    if (!article) {
        history.replace('/')
    }

    hljs.configure({
        languages: ['javascript', 'ruby', 'python', 'rust'],
    });

    const modules = {
        syntax: {
            highlight: text => hljs.highlightAuto(text).value,
        },
    };

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
            <div className="readArticleBodyBlock">
                <ReactQuill
                    defaultValue={article.body}
                    modules={modules}
                    readOnly={true}
                    theme={"bubble"}
                />
            </div>
            <div className="tagLabelsBlock">
                {
                    article.tagList.map((tag, index) => {
                        return (<span className="tagLabel" key={index}>{tag}</span>)
                    })
                }
            </div>
        </div>
    )
};

export default withGlobalLayout(ReadArticle);
