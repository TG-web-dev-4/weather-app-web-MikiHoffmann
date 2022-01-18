import styled from "styled-components";

export const IconContainer = styled.div`
display: grid;
grid-template-rows: 1fr;
grid-template-columns: repeat(5, 1fr);
width: 100%;
img {
    width: 100%;
grid-area: 1/3/2/6;
}
h3 {
    position: relative;
    width: 100%;
    grid-area: 1/1/2/6;
    align-self: flex-end;
    font-size: 2em;
    line-height: 4em;
    z-index: 1;
}
`