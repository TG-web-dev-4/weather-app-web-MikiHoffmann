import styled from "styled-components";

export const StyledCard = styled.div`
  width: 100%;
  margin: 0.8em;
  padding: 1em;
  background-image: url(images/sunCloudsBlueSky.jpg);
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  border: 1px solid ${({ theme }) => theme.colors.Clr};
`;
