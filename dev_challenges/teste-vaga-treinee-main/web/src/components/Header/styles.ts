import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;

  background-color: #26282d;
`;

export const Logo = styled.div`
  width: 250px;
  height: 60px;

  background-color: #26282d;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.8rem;
  color: #ffffff;
`;

export const Anchor = styled.span`
  display: none;

  @media (max-width: 850px) {
    font-size: 1.1rem;
    color: #ffffff;

    display: flex;
    align-items: center;

    cursor: pointer;

    > svg {
      font-size: 1.5rem;
      color: #ffffff;

      margin-top: -3px;
      margin-right: 0.5rem;
    }
  }
`;
