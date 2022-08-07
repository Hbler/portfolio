import styled from "styled-components";
import { mq } from "../../styles/global";

import BGlight from "../../assets/img/bg/top_l.svg";
import BGdark from "../../assets/img/bg/top_d.svg";

/* prettier-ignore */
export const Section = styled.section`
  background-color: ${({ theme: { bgTwo } }) => bgTwo};

  background-image: url(${({ theme: { bgOne } }) => bgOne === "#000" ? BGdark : BGlight});
  background-size: cover;
  background-position: center;

  .container {
    padding-top: 130px;

    color: ${({ theme: { text } }) => text};

    h2,
    h3 {
      font-weight: 300;
    }

    h2 {
      font-size: 2rem;
    }

    h4 {
      font-weight: 500;
      color: ${({ theme: { link } }) => link};
    }

    img {
      width: 50%;
      border: 3px solid;
      border-radius: 50%;
      border-color: ${({ theme: { bgTwo } }) => bgTwo};
    }

    & > div {
      max-width: 350px;
      margin: auto;

      display: flex;
      flex-direction: column;
    }

    & > div:nth-child(1) {
      gap: 3rem;
    }

    & > div:nth-child(2) {
      padding: 1rem 0;

      h3 {
        font-size: 1.5rem;
        color: ${({ theme: { highlight } }) => highlight};
      }
    }

    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .text {
      padding: 0.8rem;

      gap: 1rem;
      display: flex;
      flex-direction: column;

      border-radius: 3px;
      backdrop-filter: blur(10px);
      /* background-color: ${({ theme: { bgOneA30 } }) => bgOneA30}; */
    }

    .tech_list {
      padding: 0.8rem 0;

      gap: 0.8rem;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      h4 {
        width: 100%;

        letter-spacing: 3px;
      }
    }

    ${mq[1]} {
      padding-top: 100px;
    }

    ${mq[2]} {
      height: 100vh;
      padding: 100px 2rem 0.8rem;

      display: flex;
      align-items: center;
      justify-content: space-between;

      background-size: auto 100%;
      background-repeat: no-repeat;

      & > div {
        width: 38.2%;
        height: 100%;
        max-width: 450px;
        margin: unset;
      }

      & > div:nth-child(2),
      .text {
        overflow: scroll;
      }

      .title {
        img {
          width: 38.2%;
        }
      }
    }

    ${mq[3]} {
      padding: 90px 0.8rem 0.8rem;
    }

    ${mq[4]} {
      height: unset;
    }
  }
`;
