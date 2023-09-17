import React from "react";
import Header from "./header/header";
import TableUser from "./table/table";
import { Container } from "react-bootstrap";
import AddUser from "./add/add";
import { useState } from "react";
import CsvComponent from "./csv/csv";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./account/login";
export default function Practice() {
  const [newUser, setNewUser] = useState("");
  const updateNewUser = (user) => {
    setNewUser(user);
  };
  return (
    <div>
      <Router>
        <Header />
        <br />
        <Switch>
          <Route path="/practice" exact>
            <h1>HEHE</h1>
          </Route>
          <Route path="/practice/dashboard">
            <Container>
              {/* <CsvComponent /> */}
              <AddUser handleUpdateUser={updateNewUser} />
              <TableUser newUser={newUser} />
            </Container>
          </Route>
          <Route path="/practice/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
