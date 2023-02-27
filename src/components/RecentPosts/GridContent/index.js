import React from "react";

import GridGenerator from "./GridGenerator";
import FeedItem from "../FeedItem";
import { useMatchMedia } from "../../../utils/useMatchMedia";

const GridContent = ({ articles }) => {
  const { isMobile, isTablet } = useMatchMedia();

  return (
    <GridGenerator cols={isMobile || isTablet ? 2 : 3}>
      {articles.map((article, index) => (
        <FeedItem article={article} key={index} />
      ))}
    </GridGenerator>
  );
};

export default GridContent;
