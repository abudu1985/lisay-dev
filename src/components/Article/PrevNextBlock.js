import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPublishedArticles } from "../../store/selectors/articlesSelectors";
import Spinner from "../Spinner";
import RoundButton from "../RoundButton";

const PrevNextBlock = ({ currentId, goToArticle }) => {
  const articles = useSelector(getPublishedArticles);
  const [loadingName, setLoadingName] = useState("");
  const currentArticleIndex = articles.findIndex(
    (post) => post.id === currentId
  );
  const prev = currentArticleIndex - 1 >= 0 ? currentArticleIndex - 1 : null;
  const next =
    currentArticleIndex + 1 < articles.length ? currentArticleIndex + 1 : null;
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
          <RoundButton
            innerHtml={
              loadingName && loadingName === "prev" ? (
                <Spinner />
              ) : (
                `< ${articles[prev].title}`
              )
            }
            onClick={handleDecrement}
          />
        )}
      </div>
      <div>
        {next && (
          <RoundButton
            innerHtml={
              loadingName && loadingName === "next" ? (
                <Spinner />
              ) : (
                `${articles[next].title} >`
              )
            }
            onClick={handleIncrement}
          />
        )}
      </div>
    </div>
  );
};

export default PrevNextBlock;
