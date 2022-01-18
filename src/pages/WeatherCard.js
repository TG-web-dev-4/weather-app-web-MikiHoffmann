import { ThemeProvider } from "styled-components";
import { themeLight } from "../components/styles/Themes";

import { MainPageLayout } from "../components/styledElements/MainSection.styled";
import { FlexContainer } from "../components/styledElements/Containers.styled";
import Card from "../components/appComponents/Card";

export default function WeatherCard() {
  return (
      <MainPageLayout>
        <ThemeProvider theme={themeLight}>
          <FlexContainer>
            <Card/>
          </FlexContainer>
        </ThemeProvider>
      </MainPageLayout>
  );
}
