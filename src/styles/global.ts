import { createGlobalStyle } from "styled-components";

import { Theme } from "./theme";

import HaasGrotesk200 from "../assets/fonts/NeueHaasGrotDisp200.woff2";
import HaasGrotesk300 from "../assets/fonts/NeueHaasGrotDisp300.woff2";
import HaasGrotesk400 from "../assets/fonts/NeueHaasGrotDisp400.woff2";
import HaasGrotesk500 from "../assets/fonts/NeueHaasGrotDisp500.woff2";
import HaasGrotesk700 from "../assets/fonts/NeueHaasGrotDisp700.woff2";

const breakpoints = [576, 768, 992, 1200, 2000];
export const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);

export const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
@font-face {
    font-family: "Neue Haas Grotestk Display";
    font-style: normal;
    font-weight: 200;
    src: url(${HaasGrotesk200});
}
@font-face {
    font-family: "Neue Haas Grotestk Display";
    font-style: normal;
    font-weight: 300;
    src: url(${HaasGrotesk300});
}
@font-face {
    font-family: "Neue Haas Grotestk Display";
    font-style: normal;
    font-weight: 400;
    src: url(${HaasGrotesk400});
}
@font-face {
    font-family: "Neue Haas Grotestk Display";
    font-style: normal;
    font-weight: 500;
    src: url(${HaasGrotesk500});
}
@font-face {
    font-family: "Neue Haas Grotestk Display";
    font-style: normal;
    font-weight: 700;
    src: url(${HaasGrotesk700});
}

*{
    margin: 0;
    padding: 0;
    transition: 0.2s;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: "Neue Haas Grotestk Display";
}

body{
    background-color: ${({ theme: { bgOne } }) => bgOne};
}

button{
    border: none;
    
    :hover{
        cursor: pointer;
    }
}

a{
    font-weight: 700;
    text-decoration: none;
    color: ${({ theme: { link } }) => link};

    :hover{
        color: ${({ theme: { highlight } }) => highlight};
    }
}

ul, ol{
    list-style: none;
}

img {
    width: 100%;
}

.container{
    width: 100%;
    max-width: 1200px;
    margin: auto;
    padding: 0.8rem;
}
`;
