import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

    --mainTextColor: ${({ theme }) => theme.colors["--mainTextColor"]};
    --secondaryTextColor: ${({ theme }) =>
      theme.colors["--secondaryTextColor"]};
    --mainLinkColor: ${({ theme }) => theme.colors["--mainLinkColor"]};
    --mainBorderColor: ${({ theme }) => theme.colors["--mainBorderColor"]};
    --mainBgColor: ${({ theme }) => theme.colors["--mainBgColor"]};

    --cardBgColor: ${({ theme }) => theme.colors["--cardBgColor"]};
    --mainBoxShadowColor: ${({ theme }) =>
      theme.colors["--mainBoxShadowColor"]};

    background-color: var(--mainBgColor);
  }
`;

export const LayoutStylesWrapper = styled.div`
  #container--main {
    padding: 15px;
  }
`;
