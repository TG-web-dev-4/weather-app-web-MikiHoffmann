import styled from 'styled-components'

export const SubmitButton = styled.button`
margin: a.2em;
    padding: .2em;
    background-color: ${({theme}) => theme.colors.btnBgClr};
    color: ${({theme}) => theme.colors.btnClr};
    border: none;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        transform: translateY(5px);
        box-shadow: 2px 2px 3px black;
    }
`
export const CancelButton = styled.button`
    padding: .2em;
    background-color: ${({theme}) => theme.colors.btClr};
    color: ${({theme}) => theme.colors.btnBgClr};
    border: none;
    border-radius: 7px;
    cursor: pointer;
    &:hover {
        transform: translateY(5px);
        box-shadow: 2px 2px 3px black;
    }
`