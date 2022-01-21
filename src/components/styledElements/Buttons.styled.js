import styled from 'styled-components'

export const Button = styled.button`
margin: a.2em;
    padding: .1em;
    background-color: ${({theme}) => theme.colors.btnBgClr};
    font-family: ${({theme}) => theme.fonts.font};
    font-size: 1.2em;
    color: ${({theme}) => theme.colors.btnClr};
    border: none;
    border-radius: 3px;
    cursor: pointer;
    &:hover {
        transform: translateY(5px);
        box-shadow: 2px 2px 3px black;
    }
`