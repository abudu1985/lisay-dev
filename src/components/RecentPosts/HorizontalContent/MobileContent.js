import React from "react";
import styled from "styled-components";

import FeedItem from "../FeedItem";

const StyledComponent = styled.div`
  ::-webkit-scrollbar {
    width: 0px;
  }

  .container {
    display: flex;
    overflow-x: scroll;
    width: 100%;
  }

  .card {
    flex-shrink: 0;
    width: 250px;
    height: 370px;
    border-radius: 10px;
    margin: 25px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    .postImageWrapper {
      height: 270px;
    }
  }
`;

const MobileContent = ({ articles }) => (
  <StyledComponent>
    <div className="container">
      {articles.map((article, index) => (
        <div key={index} className="card">
          <FeedItem article={article} key={index} />
        </div>
      ))}
    </div>
  </StyledComponent>
);

export default MobileContent;
