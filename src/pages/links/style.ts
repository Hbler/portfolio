import styled from "styled-components";
import { mq } from "../../styles/global";

import BGlight from "../../assets/img/bg/bot_l.svg";
import BGdark from "../../assets/img/bg/bot_d.svg";

/* prettier-ignore */
export const Section = styled.footer`
  background-color: ${({ theme: { bgTwo } }) => bgTwo};

  background-image: url(${({ theme: { bgOne } }) => bgOne === "#000" ? BGdark : BGlight});
  background-size: cover;
  background-position: center;

  .container {
    padding-top: 130px;

    gap: 2rem;
    display: flex;
    flex-direction: column;

    color: ${({ theme: { text } }) => text};

    h2 {
      width: 100%;
      font-weight: 300;
      font-size: 2rem;
    }
    h3 {
      font-weight: 500;

      gap: 0.5rem;
      display: flex;
      align-items: center;
    }
    h4 {
      width: 100%;

      font-size: 1.5rem;
      font-weight: 700;
      text-align: center;
    }

    p {
      border-radius: 3px;
      backdrop-filter: blur(10px);
      span {
        letter-spacing: 2px;
        color: ${({ theme: { highlight } }) => highlight};
      }
    }

    & > div {
      max-width: 350px;
      margin: auto;

      gap: 1rem;
      display: flex;
      flex-wrap: wrap;
    }

    .link_list {
      width: 100%;

      gap: 2rem;
      display: flex;
      flex-wrap: wrap;

      section {
        gap: 0.5rem;
        display: flex;
        flex-direction: column;

        a {
          gap: 0.5rem;
          display: flex;
          align-items: center;
        }
      }
    }

    ${mq[1]} {
      padding-top: 100px;
    }

    ${mq[2]} {
      height: 100vh;
      padding: 100px 2rem 0.8rem;

      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      background-repeat: no-repeat;

      h4 {
        align-self: flex-end;

        font-size: 2rem;
      }

      & > div {
        width: 38.2%;
        height: 100%;
        max-width: 450px;
        margin: unset;
      }

      .link_list {
        gap: unset;
        flex-direction: row;
        justify-content: space-between;

        section {
          width: 175px;
        }
      }
    }

    ${mq[3]} {
      padding: 100px 0.8rem 0.8rem;
    }

    ${mq[4]} {
      height: unset;
    }
  }
`;
