import styled from "styled-components";

import { mq } from "../../styles/global";

import BGlight from "../../assets/img/bg/mid_l.svg";
import BGdark from "../../assets/img/bg/mid_d.svg";

/* prettier-ignore */
export const Section = styled.main`
  background-image: url(${({ theme: { bgOne } }) => bgOne === "#000" ? BGdark : BGlight});
  background-size: cover;
  background-position: center;
  .container {
    padding-top: 130px;

    color: ${({ theme: { text } }) => text};

    h2 {
      font-size: 2rem;
      font-weight: 300;
    }

    h4 {
      font-size: 1.2rem;
      font-weight: 700;

      cursor: pointer;

      :hover {
        color: ${({ theme: { highlight } }) => highlight};
      }
    }

    & > div {
      width: 100%;
    }

    .menu {
      padding: 2rem 0;
      gap: 1rem;
      display: flex;
      flex-wrap: wrap;
    }

    .list {
      gap: 0.5rem;
      display: flex;
      overflow-x: scroll;

      scroll-snap-type: both mandatory;
    }

    ${mq[1]} {
      padding-top: 100px;

      & > div:nth-child(1) {
        gap: 2rem;
        display: flex;
        align-items: center;
      }

      .list {
        gap: 3rem;
      }
    }

    ${mq[2]} {
      height: 100vh;
      padding: 100px 2rem 0.8rem;

      background-repeat: no-repeat;

      .list {
        gap: 5rem;
      }
    }

    ${mq[3]} {
      padding: 90px 0.8rem 0.8rem;

      .list {
        gap: 6rem;
      }
    }

    ${mq[4]} {
      height: unset;
    }
  }
`;
