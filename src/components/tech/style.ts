import styled from "styled-components";

export const Container = styled.div`
  width: 45%;

  gap: 0.5rem;
  display: flex;

  i {
    font-size: 1.3rem;
    color: ${({ theme: { highlight } }) => highlight};
  }
`;
