import styled from "styled-components";

export const Button = styled.button`
  width: 200px;

  padding: 1%;
  margin: 0.8rem;

  border: 0;
  border-radius: 20px;
  background-color: #6b3bb4;
  opacity: 0.7;

  font-size: 1.1rem;
  font-weight: 700;
  color: #ffffff;

  cursor: pointer;

  transition: filter 0.2s;

  &.category {
    width: 100px;
  }

  &.edit {
    width: 100px;
    padding: 5%;

    font-size: 1rem;
    background-color: #f4b03e;

    @media (max-width: 850px) {
      width: 80px;
      padding: 2%;
    }
  }

  &.delete {
    width: 100px;
    padding: 5%;

    font-size: 1rem;
    background-color: #e05c4e;

    @media (max-width: 850px) {
      width: 80px;
      padding: 2%;
    }
  }

  &:hover {
    filter: brightness(0.8);
  }
`;
