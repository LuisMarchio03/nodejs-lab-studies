import styled from "styled-components";

export const Container = styled.main`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  margin-top: 3rem;
`;

export const Welcome = styled.section`
  width: 80%;
  padding: 2rem;

  background-color: #ffffff;

  margin-bottom: 2rem;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Support = styled.section`
  width: 80%;
  padding: 2rem;

  background-color: #ffffff;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Heading = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
`;
