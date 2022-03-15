import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import Burger from "../../assets/images/burger.png";
import styles from "./navbar.module.css";

const NavigationBar = () => {
  return (
    <>
      <style type="text/css">
        {`
            .navbar-dark .navbar-toggler{
                border: none;
            }
            .navbar-dark .navbar-toggler-icon{
                background-image: url(${Burger});
            }
            .navbar-toggler:focus,
            .navbar-toggler-icon:focus
            {
                outline: none !important;
            }
        `}
      </style>
      <Navbar
        className={styles.navbar}
        collapseOnSelect
        expand="md"
        variant="dark"
      >
        <Container>
          <Navbar.Brand href="home">
            <img className={styles.logo} src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className={styles.links} href="home">
                Home
              </Nav.Link>
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link className={styles.links} href="home">
                <svg
                  height="30"
                  width="30"
                  version="1.1"
                  viewBox="0 0 17 17"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g />
                  <path
                    d="M1.564 2c-0.854 0-1.55 0.69-1.55 1.538h-0.014v10.939c0 0.848 0.695 1.538 1.55 1.538h13.492v-1.655h1.958v-12.36h-15.436zM1.55 15.014c-0.303 0-0.55-0.241-0.55-0.538v-9.583c0.024 0.007 0.054 0.005 0.078 0.012 0.143 0.042 0.293 0.068 0.453 0.071 0.007 0 0.012 0.003 0.019 0.003h12.493v3.035h-2.859c-0.862 0-1.563 0.673-1.563 1.5v1c0 0.827 0.701 1.5 1.563 1.5h2.859v3h-12.493zM11.183 11.014c-0.311 0-0.563-0.224-0.563-0.5v-1c0-0.276 0.253-0.5 0.563-0.5h4.817v2h-4.817zM16 13.359h-0.958v-1.345h0.958v1.345zM15.042 8.014v-4.035h-13.478c-0.273 0-0.55-0.137-0.55-0.441 0.001-0.297 0.248-0.538 0.55-0.538h14.436v5.014h-0.958z"
                    fill="#FFFFFF"
                  />
                </svg>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;