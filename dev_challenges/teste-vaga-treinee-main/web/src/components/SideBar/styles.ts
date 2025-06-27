import styled from "styled-components";

export const Container = styled.aside`
  width: 250px;
  max-height: calc(100vh - 60px);

  background-color: #2d3035;

  overflow: auto;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const Nav = styled.nav`
  width: 100%;
`;

export const Ul = styled.ul`
  padding: 2% 5%;

  margin-top: 2rem;
`;

export const Li = styled.li`
  padding: 1rem 0;

  display: flex;
  align-items: center;

  cursor: pointer;

  > svg {
    font-size: 1.5rem;
    color: #6b3bb4;

    margin-right: 1rem;
  }
`;

export const Anchor = styled.span`
  color: #a0a0a0;
  font-weight: 700;

  font-size: 1rem;

  line-height: 24px;

  text-decoration: none;

  &.active {
    color: white;
  }
`;
