import Header from "components/Header";
import { useAuthUser } from "lib/firebase";
import CreatePost from "pages/CreatePost";
import Home from "pages/Home";
import Login from "pages/Login";
import Signup from "pages/Signup";
import { Route, Switch } from "react-router-dom";
import useStore from "store";

export default function App() {
  useAuthUser();
  const { user } = useStore();

  return (
    <>
      <Route component={Header} />
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/createpost" component={CreatePost} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
}
