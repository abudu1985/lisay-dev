import * as React from "react";
import styled from "styled-components";

import FeedItem from "../FeedItem";

const StyledComponent = styled.div`
  .container {
    display: flex;
    overflow-x: hidden;

    max-width: 70rem;
    margin: 0 auto;
    height: 74vh;
  }

  .card {
    padding: 2rem 1rem;
    margin: 2rem 1rem;

    .postImageWrapper {
      height: 310px;
      width: 290px;
      border-radius: 7px 7px 0 0;
    }
  }
`;

const WideContent = ({ articles }) => {
  const scroller = React.useRef();

  React.useEffect(() => {
    if (scroller && scroller.current) {
      const handleWheel = (event) => {
        event.preventDefault();
        scroller.current.scrollBy({
          left: event.deltaY < 0 ? -30 : 30,
        });
      };

      scroller.current.addEventListener("wheel", handleWheel);
      return function cleanup() {
        scroller.current.removeEventListener("wheel", handleWheel, false);
      };
    }
  }, []);

  return (
    <StyledComponent>
      <div className="container" ref={scroller}>
        {articles.map((article, index) => (
          <div key={index} className="card">
            <FeedItem article={article} key={index} />
          </div>
        ))}
      </div>
    </StyledComponent>
  );
};

export default WideContent;
