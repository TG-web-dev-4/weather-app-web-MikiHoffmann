import { Routes, Route } from "react-router";
import { ThemeProvider } from "styled-components";
import { themeLight } from "./styles/Themes";
import GlobalStyles from "./styles/GlobalStyle";

import WeatherOverview from "./pages/WeatherOverview";
import WeatherMyCity from "./pages/WeatherMyCity";
import WeatherDetails from "./pages/WeatherDetails";

import NavBar from "./components/appComponents/NavBar";

import { FlexContainer } from "./components/styledElements/Containers.styled";
import { MainTitle } from "./components/styledElements/Titles.styled";

function App() {
  
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
      <FlexContainer>
        <MainTitle>Weather forecast</MainTitle>
        <NavBar />
      </FlexContainer>
      <Routes>
        <Route path="/" element={<WeatherOverview />} />
        <Route path="/WeatherMyCity" element={<WeatherMyCity />} />
        <Route path="/WeatherDetails" element={<WeatherDetails />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
