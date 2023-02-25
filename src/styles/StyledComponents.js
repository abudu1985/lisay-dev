// import myImage from "../../../services/myPhoto243to242.jpg";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

    --mainTextColor: ${({ theme }) => theme.colors["--mainTextColor"]};
    --secondaryTextColor: ${({ theme }) =>
      theme.colors["--secondaryTextColor"]};
    --mainLinkColor: ${({ theme }) => theme.colors["--mainLinkColor"]};
    --mainBorderColor: ${({ theme }) => theme.colors["--mainBorderColor"]};
    --mainBgColor: ${({ theme }) => theme.colors["--mainBgColor"]};

    background-color: var(--mainBgColor);
  }
`;
// // "Readex Pro"; "Roboto, sans-serif";
// export const CVStylesWrapper = styled.div`
//   * {
//     line-height: 1.5em;
//     box-sizing: border-box;
//     color: var(--mainTextColor);
//   }

//   p,
//   span,
//   li {
//     color: var(--secondaryTextColor);
//     font-size: 17px;
//   }

//   a {
//     text-decoration: none;
//     color: var(--mainLinkColor);
//     font-weight: 500;
//   }

//   li {
//     line-height: 1.9em;
//   }

//   strong {
//     font-size: 20px;
//   }

//   #container--main {
//     max-width: 700px;
//     margin: 0 auto;
//     padding: 1em;
//   }

//   .section--page {
//     padding-top: 1em;
//     padding-bottom: 1em;
//   }

//   #wrapper--hero {
//     display: flex;
//     align-items: center;
//     gap: 4em;
//   }

//   #bio,
//   a {
//     font-weight: 300;
//   }

//   #user-name {
//     font-size: 42px;
//     line-height: 1em;
//   }

//   #profile-pic {
//     width: 150px;
//     height: 150px;
//     object-fit: cover;
//     border-radius: 50%;
//   }

//   #email {
//     color: var(--mainTextColor);
//   }

//   #socials--list {
//     display: flex;
//     justify-content: space-between;
//     column-gap: 1em;
//     flex-wrap: wrap;
//   }

//   #socials--list a {
//     font-weight: 300;
//     color: var(--secondaryTextColor);
//     font-size: 0.9em;
//     transition: 0.3s;
//   }

//   #socials--list a:hover {
//     font-weight: 100;
//     color: var(--mainLinkColor);
//     font-size: 0.9em;
//   }

//   #qualifications--list {
//     list-style: none;
//   }

//   #wrapper--techstack__items {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 1em;
//     font-size: 0.9em;
//   }

//   .card--techstack {
//     border: 1px solid var(--mainBorderColor);
//     border-radius: 5px;
//     padding: 0.5em 1em;
//     align-items: center;
//   }

//   .card--project {
//     padding-top: 1em;
//     padding-bottom: 1em;
//     border-top: 1px solid var(--mainBorderColor);
//   }

//   .card--project a {
//     color: var(--mainTextColor);
//     transition: 0.3s;
//   }

//   .card--project a:hover {
//     color: rgb(30, 190, 214);
//   }

//   .card--work-history {
//     border-left: 1px solid var(--mainBorderColor);
//     margin-top: 3em;
//     margin-bottom: 3em;
//     padding-left: 2em;
//   }

//   .card--additional-skills {
//     border-left: 1px solid var(--mainBorderColor);
//     margin-top: 1em;
//     margin-bottom: 1em;
//     padding-left: 2em;
//   }

//   .line-break {
//     background-color: var(--mainBorderColor);
//     height: 1px;
//   }

//   @media (max-width: 600px) {
//     .section--page {
//       padding-top: 1em;
//       padding-bottom: 1em;
//     }

//     #wrapper--hero {
//       display: flex;
//       align-items: center;
//       gap: 1em;
//     }

//     #profile-pic {
//       width: 200px;
//       height: 200px;
//     }

//     #wrapper--hero {
//       flex-direction: column;
//     }

//     .card--work-history {
//       border-left: none;
//       padding-left: 0;
//     }
//   }
// `;

// export const MyPhoto = styled.div`
//   background-image: url(${myImage});
//   width: 100%;
//   height: 243px;
//   max-width: 243px;
//   border-radius: 50%;
// `;

// export const CollorToggleBlock = styled.div`
//   position: absolute;
//   right: 40px;
//   height: 100px;
//   display: grid;
// `;

export const CollorToggleBlock = styled.div`
  position: absolute;
  right: 40px;
  height: 100px;
  display: grid;
`;

export const LayoutStylesWrapper = styled.div`
  #container--main {
    padding: 15px;
  }
`;
