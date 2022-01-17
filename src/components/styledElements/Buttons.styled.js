import styled from 'styled-components'

export const SubmitButton = styled.button`
    padding: .4em;
    background-color: ${({theme}) => theme.colors.myRed};
    color: ${({theme}) => theme.colors.myWhite};
    border: none;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        transform: translateY(5px);
        box-shadow: 2px 2px 3px black;
    }
`