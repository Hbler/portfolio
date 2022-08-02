import { createGlobalStyle } from "styled-components";
import HaasGrotesk200 from "../assets/fonts/NeueHaasGrotDisp200.woff2";
import HaasGrotesk300 from "../assets/fonts/NeueHaasGrotDisp300.woff2";
import HaasGrotesk400 from "../assets/fonts/NeueHaasGrotDisp400.woff2";
import HaasGrotesk500 from "../assets/fonts/NeueHaasGrotDisp500.woff2";
import HaasGrotesk700 from "../assets/fonts/NeueHaasGrotDisp700.woff2";

export const GlobalStyle = createGlobalStyle`
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
    font-family: "Neue Haas Grotestk Display";
}
`;
