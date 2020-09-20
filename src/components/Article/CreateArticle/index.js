import React, { useEffect, useContext} from 'react'
import {useDispatch} from "react-redux";

import ArticleForm from '../ArticleForm'
import withToastProvider from  "../../../components/Toaster/withToastProvider";
import useToast from "../../../components/Toaster/useToast";
import Firestore from "../../../services/db/articleFunctions";
import {getMonthDay, toDashedLatin} from "../../../utils/functions";
import './style.css';


const CreateArticle = () => {
  //  const [articlesData, dispatch] = useContext(ArticlesDataContext);
    const dispatch = useDispatch();
    const toast = useToast();
    const initialValues = {
        title: '',
        description: '',
        body: '',
        tagList: '',
        articlePreview: '',
        isPublished: false,
        id: '',
    };

    const onSubmit = (article) => {
        article.slug = toDashedLatin(article.title);
        article.postedOn = getMonthDay();
        console.log('article -> ', article);
        // Firestore.addArticle(article);


        Firestore.addArticle(article).then(ref => {
            dispatch({type: 'ADD_ARTICLE', payload: article});
            toast.add('Article was created!', 'success');
        })
            .catch(error => {
                toast.add(`${error}`, 'danger');
            });
     //   toast.add('Article was created!', 'success');
        //  firebase.addArticle(article).then(ref => {
        //      dispatch({type: 'ADD_ARTICLE', payload: [...articlesData.articles, article]});
        //      toast.add('Article was created!', 'success');
        // })
        //  .catch(error => {
        //      toast.add(`${error}`, 'danger');
        //  });

    };

    return (
        <div>
            <ArticleForm
                onSubmit={onSubmit}
                initialValues={initialValues}
            />
        </div>
    )
};

export default withToastProvider(CreateArticle);
