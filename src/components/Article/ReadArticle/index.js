import React, {useState, useEffect} from 'react'
import withGlobalLayout from "../../hoc/withGlobalLayout";
import './style.css';
import ReactQuill from 'react-quill';
import hljs from "highlight.js";
import 'highlight.js/styles/darcula.css';
import 'react-quill/dist/quill.bubble.css';


const ReadArticle = ({location, history}) => {
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const {state: {data}} = location;
        console.log('data -> ', data);
        if (!data) {
            history.replace('/')
        }
        setArticle(data);
    },[]);
    if (!article) return null;

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
            <div className="readArticlePreviewImgWrap">
                <img className="readArticlePreviewImgChild" src={article.articlePreview} alt=""/>
            </div>
            <br/>
            <div className="readArticleTitle">
                {article.title}
            </div>
            <div className="readArticleTitle">
                {article.description}
            </div>
            <div className="readArticleBodyBlock">
                <ReactQuill
                    defaultValue={article.body}
                    modules={modules}
                    readOnly={true}
                    theme={"bubble"}
                />
            </div>
        </div>
    )
};

export default withGlobalLayout(ReadArticle);
