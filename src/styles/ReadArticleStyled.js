import styled from "styled-components";

export const ReadArticleStyled = styled.div`
  .readArticleTitle {
    text-align: center;
    font-size: x-large;
    color: var(--mainTextColor);
  }

  .readArticleDescription {
    text-align: center;
    font-size: large;
    color: var(--mainTextColor);
  }

  .readArticleBodyBlock {
    background-color: #fff;
    border-radius: 7px;
    margin-top: 15px;
    margin-bottom: 12px;
    /*padding: 15px;*/
  }

  .tagLabelsBlock {
    margin: 12px 12px 20px 12px;
    display: flex;
    justify-content: flex-end;
  }

  .tagLabel {
    color: white;
    padding: 5px 7px 5px 7px;
    border-radius: 5px;
    font-size: 12px;
    margin-left: 8px;
    background-color: #2196f3;
  }

  .articleDateBlock {
    display: flex;
    justify-content: flex-end;
    font-size: 12px;
    color: var(--mainTextColor);
  }

  .readArticlePreviewImgWrap {
    width: 100%;
    max-height: 400px;
    display: flex;
    justify-content: center;
  }

  .readArticlePreviewImgChild {
    width: 100%;
    max-width: 420px;
    height: auto;
  }

  .noOutline {
    outline: 0 none;
    border: none;
  }

  .prevNextBlock {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin-bottom: 35px;
  }
`;
