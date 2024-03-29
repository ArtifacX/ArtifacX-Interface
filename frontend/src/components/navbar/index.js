import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { addressShortner } from "../../utils";
import Logo from "../../assets/images/logo.png";
import Burger from "../../assets/images/burger.png";
import styles from "./navbar.module.css";
import { Link, useLocation } from "react-router-dom";
import { useActiveWeb3React } from "../../hooks/useWeb3";
import WalletModal from "../wallet_modal";
import { Avatar, Tooltip } from "@mantine/core";

const NavigationBar = () => {

  const location = useLocation();
  const { account, deactivate } = useActiveWeb3React();
  const [opened, setOpened] = useState(false);

  const deactivateWallet = () => {
    sessionStorage.setItem("disconnected","true");
    deactivate();
  };

  const walletClickHandler = () => {
    setOpened((prevValue) => {
      return !prevValue;
    });
  };

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
            .dropdown-toggle::after {
              display: none;
            }
            .dropdown-item:active {
              color: #fff;
              text-decoration: none;
              background-color: #03ef62;
            }
        `}
      </style>

      {ReactDOM.createPortal(
        <WalletModal isOpened={opened} eventTrigger={walletClickHandler} />,
        document.getElementById("modal")
      )}
      <Navbar
        className={styles.navbar}
        collapseOnSelect
        expand="md"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className={styles.logo} src={Logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link
                className={
                  location.pathname === "/home"
                    ? styles.activelinks
                    : styles.links
                }
                as={Link}
                to="/home"
              >
                Home
              </Nav.Link>
              <Nav.Link
                className={
                  location.pathname === "/asset/create"
                    ? styles.activelinks
                    : styles.links
                }
                as={Link}
                to="/asset/create"
              >
                Create
              </Nav.Link>
              {/* <Nav.Link
                className={
                  location.pathname === "/assets/someid/sell"
                    ? styles.activelinks
                    : styles.links
                }
                as={Link}
                to="/assets/someid/sell"
              >
                Sell
              </Nav.Link> */}
              {/* <Nav.Link
                className={
                  location.pathname === "/assets/someid"
                    ? styles.activelinks
                    : styles.links
                }
                as={Link}
                to="/assets/someid"
              >
                Item
              </Nav.Link> */}
              {/* <Nav.Link
                className={
                  location.pathname === "/collection/collectionname"
                    ? styles.activelinks
                    : styles.links
                }
                as={Link}
                to="/collection/collectionname"
              >
                Collection
              </Nav.Link>
              <Nav.Link
                className={
                  location.pathname === "/account"
                    ? styles.activelinks
                    : styles.links
                }
                as={Link}
                to="/account"
              >
                Profile
              </Nav.Link> */}
              <Nav.Link
                className={
                  location.pathname === "/" ? styles.activelinks : styles.links
                }
                as={Link}
                to="/"
              >
                About
              </Nav.Link>
            </Nav>
            {account ? (
              <Nav>
                <NavDropdown
                  title={<Avatar radius="xl" color={"blue"} />}
                  id="collasible-nav-dropdown"
                  menuVariant="dark"
                  align={'end'}
                >
                  <NavDropdown.Item>
                    🚀{" "}
                    <span style={{ fontWeight: "bold" }}>
                      {addressShortner(account)}
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  {/* <NavDropdown.Item as={Link} to="/account">
                  🧑🏽{" "}
                    <span>
                      Profile
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider /> */}
                  <NavDropdown.Item as={Link} to="/asset/create">
                  ⚙️{" "}
                    <span>
                      Create
                    </span>
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={deactivateWallet}>
                  🚪{" "}
                    <span>
                      Logout
                    </span>
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            ) : (
              <Nav>
                <Tooltip position="bottom" placement="center" label="Connect Wallet" withArrow style={{zIndex: '10'}}> 
                  <Nav.Link className={styles.links} onClick={walletClickHandler}>
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
                </Tooltip>
              </Nav>
            )}
            {/* <Nav style={{ color: "#C3C3C2" }}>
              {error ? (
                error instanceof UnsupportedChainIdError ? (
                  `Switch to ${NETWORK_LABELS[ALL_SUPPORTED_CHAIN_IDS[0]]}`
                ) : (
                  "Connect Wallet"
                )
              ) : account ? (
                <div className="w-full flex items-center">
                  {addressShortner(account)}
                </div>
              ) : (
                `Switch to ${NETWORK_LABELS[ALL_SUPPORTED_CHAIN_IDS[0]]}`
              )}
            </Nav> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
