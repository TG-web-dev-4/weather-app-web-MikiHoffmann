import { ThemeProvider } from "styled-components";
import { themeLight } from "./components/styles/Themes";
import GlobalStyles from "./components/styles/GlobalStyle";

import Header from "./components/appComponents/Header";
import {Routes, Route} from 'react-router-dom';

import WeatherCard from "./pages/WeatherCard";
import WeatherOverview from "./pages/WeatherOverview";
import WeatherDetails from "./pages/WeatherDetails";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path='/' element={<WeatherCard/>}/>
        <Route path='/WeatherOverview' element={<WeatherOverview/>}/>
        <Route path='/WeatherDetails' element={<WeatherDetails/>}/>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
