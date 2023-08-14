import React from "react";
import "./styles/nav.scss";
import { NavLink } from "react-router-dom";
class Navigation extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <NavLink to="/" activeClassName="active" exact={true}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/to-do-app" activeClassName="active">
            Todoapp1
          </NavLink>
        </li>
        <li>
          <NavLink to="/to-do-app-2" activeClassName="active">
            Todoapp2
          </NavLink>
        </li>
        <li>
          <NavLink to="/axios" activeClassName="active">
            Axios
          </NavLink>
        </li>
        <li>
          <NavLink to="/to-do-redux" activeClassName="active">
            TodoRedux
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navigation;
