import React from "react";

import GridGenerator from "./GridGenerator";
import FeedItem from "../FeedItem";
import useWindowSize from "../../../utils/useWindowSize";
import * as Constant from "../../../utils/constants";

const GridContent = ({ articles }) => {
  const { width } = useWindowSize();
  const getNumOfColumns = () => (width < Constant.MIDDLE_SIZE ? 2 : 3);

  return (
    <GridGenerator cols={getNumOfColumns()}>
      {articles.map((article, index) => (
        <FeedItem article={article} key={index} />
      ))}
    </GridGenerator>
  );
};

export default GridContent;
