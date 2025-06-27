import styled from "styled-components";

export const Content = styled.main`
  width: calc(100% - 250px);
  height: 90vh;

  overflow: auto;

  @media (max-width: 850px) {
    width: 100%;
  }
`;
