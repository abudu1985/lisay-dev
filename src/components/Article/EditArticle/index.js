import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ArticleForm from "../ArticleForm";
import withToastProvider from "../../../components/Toaster/withToastProvider";
import useToast from "../../../components/Toaster/useToast";
import Firestore from "../../../services/db/articleFunctions";

const EditArticle = ({ location, history }) => {
  const [initialValues, setInitialValues] = useState(null);
  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    const {
      state: { data },
    } = location;
    if (!data) {
      history.replace("/");
    }

    setInitialValues({
      title: data.title,
      description: data.description,
      body: data.body,
      tagList: data.tagList.join(" "),
      articlePreview: data.articlePreview ? data.articlePreview : "",
      isPublished: data.isPublished,
      id: data.id,
    });
  }, [location, history]);

  const onSubmit = (newArticle) => {
    const {
      state: { data },
    } = location;
    const obj = Object.assign({}, data, newArticle);
    Firestore.updateArticle(obj)
      .then((ref) => {
        dispatch({ type: "EDIT_ARTICLE", payload: obj });
        toast.add("Article was updated!", "success");
      })
      .catch((error) => {
        toast.add(`${error}`, "danger");
      });
  };

  return (
    <div>
      <ArticleForm onSubmit={onSubmit} initialValues={initialValues} />
    </div>
  );
};

export default withToastProvider(EditArticle);
