import styled from "styled-components";

export const Table = styled.section`
  width: 70rem;
  font-weight: 300;

  margin-top: 3rem;

  @media (max-width: 850px) {
    padding: 2%;
  }

  overflow: auto;
`;

export const Row = styled.div`
  width: 100%;
  color: #444;
  padding: 8px 0;
  border-bottom: 1px solid #ccc;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  background: #ffffff;

  @media (max-width: 850px) {
    padding: 2%;
  }

  &:first-child {
    font-weight: normal;
    background: #0091ea;
    padding: 0.8rem 0;
    color: white;
  }

  padding: 0.7rem 0;
`;

export const Col = styled.div`
  width: 20%;

  display: flex;
  justify-content: center;
  align-items: center;

  line-height: 22px;
`;

export const ColText = styled.span`
  word-break: break-all;

  font-size: 1rem;
  font-weight: 700;
`;
