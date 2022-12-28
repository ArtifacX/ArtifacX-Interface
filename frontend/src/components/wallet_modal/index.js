import React from "react";
import { UnsupportedChainIdError } from "@web3-react/core";
import { Modal } from "@mantine/core";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import { useActiveWeb3React } from "../../hooks/useWeb3";
import styles from "./index.module.css";
import { SUPPORTED_WALLETS } from "../../constants/wallet";



function WalletModal(props) {
  const { account, activate, error } = useActiveWeb3React();

  const activateConnector = (connector) => {
    if (connector) {
      activate(connector);
    }
  };

  const WalletButtons = Object.keys(SUPPORTED_WALLETS).map((key) => {
    const option = SUPPORTED_WALLETS[key];
    return (
      <ListGroup.Item
        className={styles.wallet}
        key={option.name}
        style={{ cursor: "pointer" }}
        onClick={
          account
            ? undefined
            : error
            ? error instanceof UnsupportedChainIdError
              ? undefined
              : () => {
                  activateConnector(option.connector);
                  props.eventTrigger();
                }
            : () => {
                activateConnector(option.connector);
                props.eventTrigger();
              }
        }
      >
        <Row>
          <Col sm={2}>
            <img
              src={option.iconURL}
              height="30px"
              style={{ marginRight: "20px" }}
              alt={option.name}
            />
          </Col>
          <Col
            sm={10}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>{option.name}</div>
            {option.name === "Metamask" && (
              <div className={styles.tag}>Popular</div>
            )}
          </Col>
        </Row>
      </ListGroup.Item>
    );
  });

  return (
    <>
      <Modal
        centered
        opened={props.isOpened}
        onClose={() => {props.eventTrigger()}}
        withCloseButton={false}
      >
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
            .mantine-Paper-root{
                background: rgba(18, 18, 18, 0.7);
                backdrop-filter: blur(20px);
                transform: translateZ(0px);
                border-radius: 5px;
            }
        `}
          </style>
          <Container className={styles.container}>
            <h1 className={styles.heading}>Connect your wallet.</h1>
            <div className={styles.options}>
              <div>
                <p className={styles.subheading}>
                  Connect with one of our available wallet providers or create a
                  new one.
                </p>
              </div>
              <Card>
                <ListGroup variant="flush">{WalletButtons}</ListGroup>
              </Card>
            </div>
          </Container>
        </>
      </Modal>
    </>
  );
}

export default WalletModal;
