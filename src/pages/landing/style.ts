import styled from "styled-components";

import { mq } from "../../styles/global";

import BGlight from "../../assets/img/bg/lan_l.svg";
import BGdark from "../../assets/img/bg/lan_d.svg";

/* prettier-ignore */
export const Section = styled.section`
  background-image: url(${({ theme: { bgOne } }) => bgOne === "#000" ? BGdark : BGlight});
  background-size: cover;
  background-position: center;

  .container {
    padding-top: 120px;

    color: ${({ theme: { text } }) => text};

    .title {
      gap: 1rem;
      display: flex;
      flex-direction: column;

      h1,
      h2 {
        color: ${({ theme: { link } }) => link};
      }

      h1 {
        font-size: 2.5rem;
      }

      h2 {
        font-weight: 300;
      }
    }

    p {
      font-weight: 400;

      span {
        color: ${({ theme: { highlight } }) => highlight};
      }
    }

    a {
      gap: 0.5rem;
      display: flex;
      align-items: center;

      svg {
        font-size: 1.3rem;
      }
    }

    & > div {
      max-width: 350px;
      margin: auto;
      padding: 2rem 0;

      gap: 3rem;
      display: flex;
      flex-direction: column;
    }

    ${mq[0]} {
      padding-top: 100px;
      & > div {
        margin: 0 9.55%;
      }
    }

    ${mq[2]} {
      height: 100vh;
      padding: 2rem;
      padding-top: 80px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-size: auto 100%;
      background-repeat: no-repeat;

      p {
        width: 80%;
        font-size: 1.1rem;
      }

      & > div {
        width: 38.2%;
        max-width: 450px;
        margin: unset;
      }

      & > div:nth-child(1) {
        align-self: flex-end;
      }
    }

    ${mq[3]} {
      padding: 90px 0.8rem 0.8rem;

      h2 {
        font-size: 1.8rem;
      }

      p {
        font-size: 1.2rem;
      }
    }

    ${mq[4]} {
      height: unset;
    }
  }
`;
