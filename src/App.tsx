import { AppContainer } from "@components/AppContainer";
import { Header } from "@components/Header";
import { Main } from "@components/Main";
import { WeatherContextProvider } from "@contexts/WeatherContext";
import GlobalStyles from "@styles/GlobalStyles";
import { theme } from "@styles/theme";
import { ThemeProvider } from "styled-components";

export function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <WeatherContextProvider>
                <AppContainer>
                    <Header />
                    <Main />
                </AppContainer>
            </WeatherContextProvider>
        </ThemeProvider>
    );
}
