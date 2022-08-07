import styled from "styled-components";
import { mq } from "../../styles/global";

export const Card = styled.article`
  scroll-snap-align: start;

  width: 95%;
  max-width: 285px;

  gap: 1rem;
  display: flex;
  flex-direction: column;

  color: ${({ theme: { text } }) => text};

  h3 {
    font-weight: 400;
    text-transform: uppercase;
    color: ${({ theme: { highlight } }) => highlight};
  }

  figure {
    width: 100%;
    height: 150px;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    img {
      width: auto;
      height: 100%;
    }
  }

  .info {
    gap: 0.8rem;
    display: flex;
    flex-direction: column;

    small {
      font-weight: 700;
      color: ${({ theme: { highlight } }) => highlight};
    }

    p {
      height: 80px;
      overflow: scroll;
    }
  }

  .links {
    gap: 0.5rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    a {
      gap: 0.5rem;
      display: flex;
      align-items: center;

      svg {
        font-size: 0.9rem;
      }
    }
  }

  ${mq[1]} {
    scroll-snap-align: center;
  }

  ${mq[3]} {
    .info {
      p {
        height: 160px;
      }
    }
  }
`;
