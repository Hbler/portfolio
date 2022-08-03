import styled from "styled-components";

export const Teste = styled.div`
  height: 300px;
  width: 300px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme: { text } }) => text};
  background-color: ${({ theme: { bgOne } }) => bgOne};
  border: 2px solid;
  border-color: ${({ theme: { highlight } }) => highlight};
`;
