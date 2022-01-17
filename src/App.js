import { ThemeProvider } from "styled-components";
import { SubmitButton } from "./components/styledElements/Buttons.styled";
import { SearchBar } from "./components/styledElements/SearchBars.styled";
import { themeDark } from "./components/styles/Themes";
import { themeLight } from "./components/styles/Themes";
import GlobalStyles from "./components/styles/GlobalStyle";
import { MainPageLayout } from "./components/styledElements/MainSection.styled";
import Header from "./components/appComponents/Header";

function App() {
  return (
    <ThemeProvider theme={themeLight}>
      <>
        <GlobalStyles />
        <Header />
        <MainPageLayout>
          <ThemeProvider theme={themeDark}>
            <SearchBar type="text" />
            <SubmitButton>Click me!</SubmitButton>
          </ThemeProvider>
        </MainPageLayout>
      </>
    </ThemeProvider>
  );
}

export default App;
