import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../../../assets/images/logo192.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <NavLink to="/practice" className="nav-link" exact>
            <img
              src={logo}
              width={30}
              height={30}
              className="d-inline align-top"
              alt="React Bootstrap logo"
            />
            React-APP
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/practice" className="nav-link" exact>
              Home
            </NavLink>
            <NavLink to="/practice/dashboard" className="nav-link">
              Dashboard
            </NavLink>
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">
                <NavLink to="/practice/login" className="nav-link">
                  Login
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                <NavLink to="/practice/logout" className="nav-link">
                  Login
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
