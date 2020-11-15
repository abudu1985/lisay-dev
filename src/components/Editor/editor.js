import React from 'react'
import {withRouter} from "react-router-dom";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import 'react-quill/dist/quill.bubble.css';
import './style.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/darcula.css';

class Editor extends React.Component {
    constructor (props) {
        super(props)
        this.state = { editorHtml: props.value ? props.value : '', theme: 'snow' }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange (html) {
        this.setState({ editorHtml: html });
        this.props.onChange(html);
    }

    handleThemeChange (newTheme) {
        if (newTheme === "core") newTheme = null;
        this.setState({ theme: newTheme })
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.props.value !== nextProps.value) {
            this.setState({ editorHtml: nextProps.value });
        }
    }

    render () {
        return (
            <div className={'appEditor'}>
                <ReactQuill
                    theme={this.state.theme}
                    onChange={this.handleChange}
                    value={this.state.editorHtml}
                    modules={Editor.modules}
                    formats={Editor.formats}
                    bounds={'.appEditor'}
                    placeholder={this.props.placeholder}
                />
                <div className="themeSwitcher">
                    <label>Theme </label>
                    <select onChange={(e) =>
                        this.handleThemeChange(e.target.value)}>
                        <option value="snow">Snow</option>
                        <option value="bubble">Bubble</option>
                        <option value="core">Core</option>
                    </select>
                </div>
            </div>
        )
    }
}

hljs.configure({
    languages: ['javascript', 'ruby', 'python', 'rust'],
});

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
    syntax: {
        highlight: text => hljs.highlightAuto(text).value,
    },
    toolbar: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'},
            {'indent': '-1'}, {'indent': '+1'}],
        [{ 'align': [] }],
        ['link', 'image', 'video', "code-block"],
        [{ 'color': [] }, { 'background': [] }],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video',"code-block",
    'color', 'background', 'align',
];

export default  withRouter(Editor);