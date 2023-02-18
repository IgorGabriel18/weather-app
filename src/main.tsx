import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";

import { theme } from "~styles/theme";

import { App } from "./App";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </QueryClientProvider>
);
