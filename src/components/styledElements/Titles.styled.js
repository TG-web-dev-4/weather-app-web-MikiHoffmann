import styled from "styled-components";

export const MainTitle = styled.h1`
  width: 100%;
  color: ${({ theme }) => theme.colors.titleClr};
  text-align: center;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  background-color: ${({theme}) => theme.colors.titleBgClr};
  color: ${({ theme }) => theme.colors.titleClr};
  text-align: center;
`;
