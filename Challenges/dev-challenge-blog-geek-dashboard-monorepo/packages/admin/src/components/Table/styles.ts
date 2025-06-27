import styled from "styled-components";

export const Container = styled.table`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Thead = styled.thead`
  width: 100%;
  padding: 1%;

  display: flex;
  justify-content: center;
  align-items: center;

  > tr {
    width: 100%;
    padding: 1%;

    display: flex;
    justify-content: center;
    align-items: center;

    > th {
      font-size: 1.5rem;
    }
  }
`;

export const Th = styled.th`
  width: 100%;

  margin-bottom: 1rem;

  font-weight: 700;
`;

export const Tbody = styled.tbody`
  width: 80%;
  padding: 1%;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const Tr = styled.tr`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Td = styled.td`
  margin-bottom: 3rem;

  line-height: 28px;
`;
