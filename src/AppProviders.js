import { createBrowserHistory } from "history";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter } from "react-router-dom";
import useStore from "store";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "styles/globalStyle";
import theme from "theme";
import { ReactQueryDevtools } from "react-query/devtools";
import "lib/date-config";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const history = createBrowserHistory();

export default function AppProviders({ children }) {
  const { isDarkTheme } = useStore();

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <Toaster position="bottom-center" />
      <ThemeProvider theme={theme(isDarkTheme)}>
        <GlobalStyle />
        <BrowserRouter history={history}>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
