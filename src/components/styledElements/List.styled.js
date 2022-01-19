import styled from "styled-components";

export const StyledList = styled.ul`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
@media only screen and (min-width:31.25em) {
    flex-direction: row;
    column-gap: .8em;
}
`