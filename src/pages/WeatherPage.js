import { ThemeProvider } from "styled-components";
import { themeLight } from "../components/styles/Themes";

import { MainPageLayout } from "../components/styledElements/MainSection.styled";
import { FlexContainer } from "../components/styledElements/Containers.styled";
import WeatherData from "../components/appComponents/WeatherData";

export default function WeatherPage() {
  return (
    <ThemeProvider theme={themeLight}>
      <MainPageLayout>
        <FlexContainer>
          <WeatherData />
        </FlexContainer>
      </MainPageLayout>
    </ThemeProvider>
  );
}
