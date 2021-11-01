import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";
import { ThemeProvider } from "styled-components";
import theme from "theme";
import { QueryClient, QueryClient, QueryClientProvider } from "react-query";

const QueryClient = new QueryClient();
const history = createBrowserHistory();

export default function AppProviders({ children }) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme(true)}>
        <BrowserRouter history={history}>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
