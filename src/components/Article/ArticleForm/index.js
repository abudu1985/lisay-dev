import React, {useEffect, useState} from 'react';
import Editor from '../../Editor/editor';
import RoundButton from "../../RoundButton";
import {Container, Row, Col} from 'react-grid-system';
import BootstrapLikeInput from '../../BootstrapLikeInput';
import './style.css';

const ArticleForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [body, setBody] = useState('');
    const [tagList, setTagList] = useState('');
    const [articlePreview, setArticlePreview] = useState('');
    const [isPublished, setIsPublished] = useState(false);


    const handleSubmit = event => {
        event.preventDefault();
        const article = {
            title,
            description,
            body,
            tagList: tagList.split(' '),
            articlePreview,
            isPublished,
        };
        onSubmit(article)
    };

    useEffect(() => {
        if (!initialValues) {
            return
        }
        setTitle(initialValues.title);
        setDescription(initialValues.description);
        setBody(initialValues.body);
        setTagList(initialValues.tagList);
        setArticlePreview(initialValues.articlePreview);
        setIsPublished(initialValues.isPublished);
    }, [initialValues]);



    useEffect(() => {

    }, [articlePreview, isPublished]);


    const bodyChange = (val) => setBody(val);

    const changeIsPublished = () =>
        setIsPublished(!isPublished);

    const handleImageChange = (e) => {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
            setArticlePreview(reader.result);
        };
        reader.readAsDataURL(file);
    };

    return (
        <div className=''>
            <div className="article-save-row">
                <Container>
                    <Row justify="around">
                        <Col xs={3}>
                            <RoundButton
                                type='submit'
                                disabled={false}
                                innerHtml="Save"
                                color={'green'}
                                onClick={handleSubmit}
                            />
                        </Col>
                        <Col xs={3}>
                            <RoundButton
                                type='submit'
                                disabled={false}
                                innerHtml={isPublished ? "Published" : "Unpublished"}
                                onClick={changeIsPublished}
                                color={isPublished ? '' : 'red'}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
            <br/>
            <Container>
                <Row justify="around">
                    <Col md={3}>
                        <div className="previewBox">
                            <div className="rightCircle">
                                <label>
                                    <div className="icon" id="plus">
                                    </div>
                                    <input type="file" name="fileToUpload" id="fileToUpload" size="1"
                                           onChange={handleImageChange}/>
                                </label>
                            </div>
                            <div className="image_preview_admin">
                                <img src={articlePreview} alt=""/>
                            </div>
                        </div>

                    </Col>
                    <Col md={8}>
                        <Row>
                            <Col md={12}>
                                <BootstrapLikeInput
                                    type="text"
                                    className=""
                                    placeholder="Article title"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md={12}>
                                <BootstrapLikeInput
                                    type="text"
                                    className=""
                                    placeholder="What is this article about?"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col md={12}>
                                <BootstrapLikeInput
                                    type="text"
                                    className="form-control form-control-lg"
                                    placeholder="Enter tags"
                                    value={tagList}
                                    onChange={e => setTagList(e.target.value)}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
            <Editor placeholder={'Write something...'} value={body} onChange={bodyChange}/>
        </div>
    )
};
export default ArticleForm;