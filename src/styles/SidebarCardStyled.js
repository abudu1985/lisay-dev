import styled from "styled-components";

export const SidebarCardStyled = styled.div`
  margin-bottom: 20px;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 7px;
  border: 1px solid var(--mainBorderColor);
  background: var(--cardBgColor);

  .cardHeader {
    text-transform: uppercase;
    font-size: 15px;
    text-align: center;
    box-sizing: border-box;
    letter-spacing: 2px;
    color: var(--mainTextColor);
  }

  .cardHeaderSecond {
    text-transform: capitalize;
  }

  .sidebarCardText {
    font-size: 14px;
    font-weight: 300;
    color: var(--mainTextColor);
  }

  .profileImageContainer {
    width: 100%;
    box-sizing: border-box;
  }

  .profileImageContainer img {
    max-width: 100%;
    max-height: 100%;
    margin: 20px 0;
  }
`;
