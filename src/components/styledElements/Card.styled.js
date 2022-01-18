import styled from "styled-components";

export const StyledCard = styled.li`
  width: 100%;
  margin: .5em auto;
  padding: 1em;
  background-image: url(images/sunCloudsBlueSky.jpg);
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  border: 1px solid ${({ theme }) => theme.colors.Clr};
  border-radius: 3px;
`;
