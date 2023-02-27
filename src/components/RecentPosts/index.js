import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Preloader from "../Preloader";
import GridContent from "./GridContent";
import ScrollContent from "./ScrollContent";
import useLocalStorage from "../../utils/useLocalStorage";
import * as Constants from "../../utils/constants";
import { getPublishedArticles } from "../../store/selectors/articlesSelectors";
import {
  getSearchString,
  getSearchTag,
} from "../../store/selectors/searchSelectors";
import withGlobalLayout from "../hoc/withGlobalLayout";
import { clearSearch } from "../../store/actions/articles";
import RoundButton from "../RoundButton";

import "./style.css";

const findBySearchString = (publishedArticles, searchString) =>
  publishedArticles.filter(
    (el) =>
      el.title.toLowerCase().includes(searchString.toLowerCase()) ||
      el.description.toLowerCase().includes(searchString.toLowerCase()) ||
      el.tagList.includes(searchString.toLowerCase())
  );

const findBySearchTag = (publishedArticles, searchTag) =>
  publishedArticles.filter((el) => el.tagList.includes(searchTag));

const ResetButton = ({ resetSearch }) => (
  <div id="reset-centered">
    <RoundButton innerHtml={"Reset search"} onClick={resetSearch} />
  </div>
);

const RecentPosts = (props) => {
  const dispatch = useDispatch();
  let publishedArticles = useSelector(getPublishedArticles);
  const searchString = useSelector(getSearchString);
  const searchTag = useSelector(getSearchTag);
  const [timer, setTimer] = useState(0);
  const [noArticles, setNoArticles] = useState(false);
  const [renderPostsMode, setRenderPostsMode] =
    useLocalStorage("renderPostsMode");

  useEffect(() => {
    if (!renderPostsMode)
      setRenderPostsMode(JSON.stringify(Constants.GRID_MODE));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((currentTimer) => currentTimer + 1);
    }, 1000);
    if (timer > 2) {
      if (!publishedArticles.length) setNoArticles(true);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [timer, publishedArticles, searchString]);

  const resetSearch = () => {
    dispatch(clearSearch());
    setNoArticles(false);
  };

  const renderArticlesByMode = (data, mode) => {
    const renderPostsModeEnum = {
      [Constants.GRID_MODE]: <GridContent articles={data} />,
      [Constants.VERTICAL_MODE]: <ScrollContent articles={data} />,
    };
    return renderPostsModeEnum[mode];
  };

  if (searchString)
    publishedArticles = findBySearchString(publishedArticles, searchString);
  if (searchTag)
    publishedArticles = findBySearchTag(publishedArticles, searchTag);
  if (noArticles && searchString) {
    return (
      <>
        <div id="reset-centered">
          <h2>
            No articles found{" "}
            <span role="img" aria-label="smile">
              &#128512;
            </span>
          </h2>
        </div>
        <ResetButton resetSearch={resetSearch} />
      </>
    );
  }

  return publishedArticles.length ? (
    <>
      {(searchString || searchTag) && <ResetButton resetSearch={resetSearch} />}
      {renderArticlesByMode(publishedArticles, renderPostsMode)}
    </>
  ) : (
    <Preloader />
  );
};

export default withGlobalLayout(RecentPosts);
