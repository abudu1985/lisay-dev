import React, { useEffect } from "react";
import { Col } from "react-grid-system";
import FeedItem from "../FeedItem";
import "./styles.css";

const ScrollContent = ({ articles }) => {
  useEffect(() => {
    const boxes = document.querySelectorAll(".scroll_content_item");

    window.addEventListener("scroll", checkBoxes);

    checkBoxes();

    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4;

      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }
  }, [articles]);

  return (
    <div className="scroll_content_block">
      <Col xxl={4} xl={6} lg={8} md={8} sm={8} xs={12}>
        {articles.map((article, index) => {
          return (
            <div class="scroll_content_item" key={index}>
              <FeedItem article={article} key={index} />
            </div>
          );
        })}
      </Col>
    </div>
  );
};

export default ScrollContent;
