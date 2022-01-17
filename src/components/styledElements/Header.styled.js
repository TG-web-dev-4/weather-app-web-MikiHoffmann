import styled from "styled-components";

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: .5em;
    @media only screen and (min-width: 31.25em) {
        flex-direction: row;
    }
`