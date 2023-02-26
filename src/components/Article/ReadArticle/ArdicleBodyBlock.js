import React from "react";
import { useHistory } from "react-router-dom";

import LightBoxImage from "../../LightBoxImage";
import PrevNextBlock from "../PrevNextBlock";
import QuillBodyBlock from "./QuillBodyBlock";
import { ReadArticleStyled } from "../../../styles/ReadArticleStyled";

const ArticleBodyBlock = ({ article }) => {
  const history = useHistory();

  const goToArticle = (nextArticle) => {
    history.push({
      pathname: `/article/${nextArticle.slug}`,
      state: { data: nextArticle },
    });
  };

  return (
    <ReadArticleStyled>
      <LightBoxImage
        imageClass="readArticlePreviewImgChild"
        imageSrc={article.articlePreview}
        wrapperClass="readArticlePreviewImgWrap"
      />
      <br />
      <div className="readArticleTitle">{article.title}</div>
      <br />
      <div className="readArticleDescription">{article.description}</div>
      <div className="articleDateBlock">Posted on {article.postedOn}</div>
      <QuillBodyBlock data={article.body} />
      <div className="tagLabelsBlock">
        {article.tagList.map((tag, index) => {
          return (
            <span className="tagLabel" key={index}>
              {tag}
            </span>
          );
        })}
      </div>
      <PrevNextBlock currentId={article.id} goToArticle={goToArticle} />
    </ReadArticleStyled>
  );
};

export default ArticleBodyBlock;
