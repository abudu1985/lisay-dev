import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Card from "../Card";
import { clearSearch } from "../../store/actions/articles";

import "./style.css";

const FeedItem = ({ article }) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [chosenArticle, setChosenArticle] = useState(null);

  useEffect(() => {
    if (chosenArticle) {
      dispatch(clearSearch());
      history.push({
        pathname: `/article/${chosenArticle.slug}`,
        state: { data: chosenArticle },
      });
    }
  }, [chosenArticle, dispatch, history]);

  if (!article) return null;

  return (
    <>
      {chosenArticle && <div className="overlaySpinner"></div>}
      <Card
        style={{ marginBottom: "20px" }}
        onClick={() => setChosenArticle(article)}
      >
        <div>
          <img
            className="postImageWrapper"
            src={article.articlePreview}
            alt=""
          />
        </div>
        <div className="postImageTitle">{article.title}</div>
      </Card>
    </>
  );
};

export default FeedItem;
