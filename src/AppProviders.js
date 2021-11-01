import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import GlobalStyle from "styles/globalStyle";

const queryClient = new QueryClient();
const history = createBrowserHistory();

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster position="bottom-center" />
      <ThemeProvider theme={theme(false)}>
        <GlobalStyle />
        <BrowserRouter history={history}>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
