import styled from "styled-components";

export const Nav = styled.nav`
  width: 100vw;
  .container {
    gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    ul {
      width: 45%;

      gap: 1rem;
      display: flex;
      flex-direction: column;

      li {
        gap: 0.5rem;
        display: flex;
        align-items: center;

        cursor: pointer;

        color: ${({ theme: { link } }) => link};
        font-weight: 700;

        svg {
          font-size: 1.3rem;
        }

        button {
          font-size: 1rem;
          font-weight: 700;
          color: ${({ theme: { link } }) => link};

          background-color: transparent;

          &.active,
          :hover {
            color: ${({ theme: { highlight } }) => highlight};
            text-decoration: underline;
          }
        }
      }
    }
  }
`;
