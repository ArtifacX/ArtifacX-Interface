import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import NavigationBar from "../navbar";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import { useActiveWeb3React, useEagerConnect } from "../../hooks/useWeb3";
import styles from "./index.module.css";
import { UnsupportedChainIdError } from "@web3-react/core";
import { SUPPORTED_WALLETS } from "../../constants/wallet";

const ConnectPage = () => {

  const { account, activate, error, chainId } = useActiveWeb3React();

  const activateConnector = (connector) => {
    if (connector) {
      activate(connector);
    }
  }

  const WalletButtons = Object.keys(SUPPORTED_WALLETS).map((key) => {

    const option = SUPPORTED_WALLETS[key];
    return (
      <ListGroup.Item
        className={styles.wallet}
        key={option.name}
        style={{ cursor: 'pointer' }}
        onClick={account ? undefined : error ? (error instanceof UnsupportedChainIdError ? undefined : () => { activateConnector(option.connector) }) : () => { activateConnector(option.connector) }}>
        <Row>
          <Col sm={1}>
            <img
              src={option.iconURL}
              height="30px"
              style={{ marginRight: "20px" }}
              alt={option.name}
            />
          </Col>
          <Col
            sm={11}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>{option.name}</div>
            {
              option.name == "Metmask"
              &&
              <div className={styles.tag}>Popular</div>
            }
          </Col>
        </Row>
      </ListGroup.Item>
    )
  }
  )

  return (
    <>
      <style type="text/css">
        {`
            .card{
                border: 1px solid white;
            }
            .list-group-item{
                color: white;
                padding: 16px;
                background-color: #141403;
                border: 1px solid white;
            }
        `}
      </style>
      <NavigationBar />
      <Container className={styles.container}>
        <h1 className={styles.heading}>Connect your wallet.</h1>
        <div className={styles.options}>
          <div>
            <p className={styles.subheading}>
              Connect with one of our available wallet providers or create a new
              one.
            </p>
          </div>
          <Card>
            <ListGroup variant="flush">
              {WalletButtons}
            </ListGroup>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ConnectPage;
