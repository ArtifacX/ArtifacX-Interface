import React from "react";
import NavigationBar from "../navbar";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";

const ConnectPage = () => {
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
              Connect with one of out available wallet providers or create a new
              one.
            </p>
          </div>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item className={styles.wallet} style={{cursor: 'pointer'}}>
                <Row>
                  <Col sm={1}>
                    <img
                      src="https://opensea.io/static/images/logos/metamask-alternative.png"
                      height="30px"
                      style={{ marginRight: "20px" }}
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
                    <div>MetaMask</div>
                    <div className={styles.tag}>Popular</div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className={styles.wallet} style={{backgroundColor: 'rgba(0,0,0,0.85)', cursor:'not-allowed'}}>
                <Row>
                  <Col sm={1}>
                    <img
                      src="https://storage.opensea.io/static/wallets/walletlink/walletlink-alternative.png"
                      height="30px"
                      style={{ marginRight: "20px" }}
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
                    <div>Coinbase Wallet</div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className={styles.wallet} style={{backgroundColor: 'rgba(0,0,0,0.85)', cursor:'not-allowed'}}>
                <Row>
                  <Col sm={1}>
                    <img
                      src="https://storage.opensea.io/static/wallets/walletconnect/walletconnect-alternative.png"
                      height="30px"
                      style={{ marginRight: "20px" }}
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
                    <div>WalletConnect</div>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className={styles.wallet} style={{backgroundColor: 'rgba(0,0,0,0.85)', cursor:'not-allowed'}}>
                <Row>
                  <Col sm={1}>
                    <img
                      src="	https://storage.opensea.io/static/wallets/trust/trust-alternative.png"
                      height="30px"
                      style={{ marginRight: "20px" }}
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
                    <div>Trust</div>
                    <div className={styles.tag}>mobile only</div>
                  </Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default ConnectPage;
