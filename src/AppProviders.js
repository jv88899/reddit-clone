import { BrowserRouter } from "react-router-dom";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

export default function AppProviders({ children }) {
  return <BrowserRouter history={history}>{children}</BrowserRouter>;
}
