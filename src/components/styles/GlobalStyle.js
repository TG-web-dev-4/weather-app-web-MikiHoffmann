import { createGlobalStyle } from "styled-components";

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
    background-image: url(images/sunCloudsBlueSky.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-blend-mode: multiply;
    background-color: ${({theme}) => theme.colors.bgClr};
    color: ${({theme}) => theme.colors.Clr};
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 1.1em;
}
a {
    text-decoration: none;
    color: ${({theme}) => theme.colors.Clr}
}
img {
    height: auto;
    max-width: 100%;
}
li {
    list-style-type: none;
}
`

export default GlobalStyles;