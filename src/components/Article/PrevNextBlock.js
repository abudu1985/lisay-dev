import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-grid-system";
import { getPublishedArticles } from "../../store/selectors/articlesSelectors";
import RoundButton from "../RoundButton";
import Spinner from "../Spinner";

const PrevNextBlock = ({ currentId, goToArticle }) => {
  const articles = useSelector(getPublishedArticles);
  console.log("qwe  ~ articles", articles);
  const [loadingName, setLoadingName] = useState("");
  const currentArticleIndex = articles.findIndex(
    (post) => post.id === currentId
  );
  const prev = currentArticleIndex - 1 >= 0 ? currentArticleIndex - 1 : null;
  console.log("qwe  ~ prev", prev);
  const next =
    currentArticleIndex + 1 < articles.length ? currentArticleIndex + 1 : null;
  console.log("qwe  ~ next", next);
  useEffect(() => {
    if (loadingName)
      goToArticle(articles[loadingName === "next" ? next : prev]);
    return () => {
      setLoadingName("");
    };
  }, [loadingName, articles, goToArticle, next, prev]);

  const handleDecrement = () => {
    if (loadingName) return;
    setLoadingName("prev");
  };
  const handleIncrement = (event) => {
    event.preventDefault();
    if (loadingName) return;
    setLoadingName("next");
  };

  return (
    <div className="prevNextBlock">
      <div>
        {(prev || prev === 0) && (
          <button onClick={handleDecrement} className="btn-switch">
            {loadingName && loadingName === "prev" ? (
              <Spinner />
            ) : (
              `< ${articles[prev].title}`
            )}
          </button>
        )}
      </div>
      <div>
        {next && (
          <button onClick={handleIncrement} className="btn-switch">
            {loadingName && loadingName === "next" ? (
              <Spinner />
            ) : (
              `${articles[next].title} >`
            )}
          </button>
        )}
      </div>
    </div>
  );
};

export default PrevNextBlock;
