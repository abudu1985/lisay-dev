import React from "react";
import styled from "styled-components";

const StyledComponent = styled.div`
  .spinner-wrapper {
    display: flex;
    justify-content: center;
  }

  .spinner {
    border: 0.2em solid rgba(0, 0, 0, 0.1);
    border-top: 0.2em solid blue;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    animation: spin 0.6s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = () => (
  <StyledComponent>
    <div className="spinner-wrapper">
      <div className="spinner"></div>
    </div>
  </StyledComponent>
);
export default Spinner;
