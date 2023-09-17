import logo from "./logo.svg";
import "./App.css";
import MyToDoApp from "../components/todo-app-2";
import Navigation from "../components/nav";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoApplication from "../components/todo-app";
import MyComponent from "../components/patials/test";
import AxiosComponent from "../components/axios";
import AxiosDetailComponent from "../components/axios/detail";
import TodolistRedux from "../components/redux";
import TodolistReduxLocalStorage from "../components/redux-local-storage";
import NotfoundView from "./404";
import YtbSearch from "../components/ytb-search";
import Practice from "../components/practice";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <Navigation />
            <img src={logo} className="App-logo" alt="logo" />
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route exact path="/">
                <MyComponent />
              </Route>
              <Route path="/to-do-app">
                <TodoApplication />
              </Route>
              <Route path="/to-do-app-2">
                <MyToDoApp />
              </Route>
              <Route path="/to-do-redux" exact>
                <TodolistRedux />
              </Route>
              <Route path="/to-do-redux/local-storage">
                <TodolistReduxLocalStorage />
              </Route>
              <Route path="/axios" exact>
                <AxiosComponent />
              </Route>
              <Route path="/axios/detail/:id">
                <AxiosDetailComponent />
              </Route>
              <Route path="/ytb-search">
                <YtbSearch />
              </Route>
              <Route path="/practice">
                <Practice />
              </Route>
              <Route path="*">
                <NotfoundView />
              </Route>
            </Switch>
          </div>
        </Router>
        {/* <MyComponent /> */}
        {/* <TodoApplication /> */}
        {/* <MyToDoApp /> */}
      </header>
    </div>
  );
}

export default App;
