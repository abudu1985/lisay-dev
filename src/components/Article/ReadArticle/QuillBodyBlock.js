import React from 'react'
import ReactQuill from 'react-quill';
import hljs from "highlight.js";
import 'highlight.js/styles/vs2015.css';
import 'react-quill/dist/quill.bubble.css';
import './style.css';


const QuillBodyBlock = ({ data }) => {
    hljs.configure({
        languages: ['javascript'],
    });

    const modules = {
        syntax: {
            highlight: text => hljs.highlightAuto(text).value,
        },
    };
    return (
        <div className="readArticleBodyBlock">
            <ReactQuill
                value={data}
                modules={modules}
                readOnly={true}
                theme={"bubble"}
            />
        </div>
    )
};

export default QuillBodyBlock;