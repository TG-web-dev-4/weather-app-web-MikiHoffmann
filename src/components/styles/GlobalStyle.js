import { createGlobalStyle } from "styled-components";
import { themeDark } from "./Themes";
const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    height: 100%;
    scroll-behavior: smooth;
}
body {
    background-color: ${({theme}) => theme.colors.myBlack};
    color: ${({theme}) => theme.colors.myWhite};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.1em;
}
img {
    height: auto;
    max-width: 100%;
}
`

export default GlobalStyles;