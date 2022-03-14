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
        fixed="top"
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
                More deets
              </Nav.Link>
              <Nav.Link className={styles.links} eventKey={2} href="home">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
