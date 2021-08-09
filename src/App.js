import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import Backdrop from "./components/Backdrop/Backdrop";
import Header from "./components/Header/Header";
import Home from "./containers/Home/Home";
import Search from "./containers/Search/Search";

function App() {
  return (
    <Router>
      <Backdrop />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/search" component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
