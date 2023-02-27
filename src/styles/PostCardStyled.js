import styled from "styled-components";

export const PostCardStyled = styled.div`
  width: ${({ width }) => (width ? width : "100%")};
  margin-bottom: 20px;
  background: var(--cardBgColor);
  transition: all 0.3s ease;
  border-radius: 7px;
  box-shadow: var(--mainBoxShadowColor);

  &:hover {
    transform: scale(1.03);
  }

  .postImageWrapper {
    height: ${({ isMobile }) => (isMobile ? "180px" : "310px")};
    width: 100%;
    border-radius: 7px 7px 0 0;
  }

  .postImageTitle {
    min-height: 60px;
    line-height: 21px;
    text-align: center;
    border-radius: 0 0 7px 7px;
    padding: 10px 15px;
    font-size: larger;
    background: var(--cardBgColor);
    color: var(--mainTextColor);
  }
`;
