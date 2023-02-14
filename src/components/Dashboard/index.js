import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spinner from "../Spinner";
import RoundButton from "../RoundButton";
import withToastProvider from "../../components/Toaster/withToastProvider";
import useToast from "../../components/Toaster/useToast";
import Firestore from "../../services/db/articleFunctions";
import { getArticles } from "../../store/selectors/articlesSelectors";
import Table from "../../components/Table";

import "./style.css";

const Dashboard = ({ history }) => {
  const [tableData, setTableData] = useState([]);
  const toast = useToast();
  const articles = useSelector(getArticles);
  const dispatch = useDispatch();

  useEffect(() => {
    setTableData(articles);
  }, [articles]);

  function onEdit(data) {
    history.push({
      pathname: `/articles/${data.slug}/edit`,
      state: { data },
    });
  }

  function onDelete(id) {
    window.confirm("Are you sure you wish to delete this article?");
    if (!id) {
      toast.add("No ID in request!", "danger");
      return;
    }
    Firestore.deleteArticle(id)
      .then((ref) => {
        dispatch({ type: "DELETE_ARTICLE", payload: id });
        toast.add("Article was deleted!", "success");
      })
      .catch((error) => {
        toast.add(`${error}`, "danger");
      });
  }

  const columns = [
    {
      heading: "Title",
      value: ({ title }) => title,
    },
    {
      heading: "Tags",
      value: ({ tagList }) => {
        return tagList.map((tag, index) => (
          <span key={`${tag}${index}`}>{tag}&nbsp;</span>
        ));
      },
    },
    {
      heading: "Published",
      value: ({ isPublished }) => {
        return (
          <span className={isPublished ? "published-blue" : "published-red"}>
            {isPublished ? <span>&#10004;</span> : <span>&#x2716;</span>}
          </span>
        );
      },
    },
    {
      heading: "Preview",
      value: ({ articlePreview }) => (
        <img className="dashboardPreviewImage" src={articlePreview} alt="" />
      ),
    },
    {
      heading: "Actions",
      value: (doc) => (
        <div className="dashboardActionsCell">
          <RoundButton
            innerHtml={"Edit"}
            onClick={() => onEdit(doc)}
            color={"green"}
          />
          <RoundButton
            innerHtml={"Delete"}
            onClick={() => onDelete(doc.id)}
            color={"red"}
          />
        </div>
      ),
    },
  ];

  return (
    <>
      {tableData.length > 0 ? (
        <Table data={tableData} columns={columns} />
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default withToastProvider(Dashboard);
