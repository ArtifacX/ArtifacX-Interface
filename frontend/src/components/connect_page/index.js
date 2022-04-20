import React,{useState} from "react";
import {useNavigate} from 'react-router-dom';
import NavigationBar from "../navbar";
import { Container, Card, ListGroup, Row, Col } from "react-bootstrap";
import styles from "./index.module.css";
import {ethers} from 'ethers';

const ConnectPage = () => {
  const [defaultAccount, setDefaultAccount] = useState('');
  const [accountBalance, setAccountBalance] = useState(0);
  const history = useNavigate();

  const connectWalletHandler = async () => {
    if(typeof window.ethereum !== undefined) {
      const accounts = await window.ethereum.request({method: 'eth_requestAccounts'});
      console.log(accounts[0]);
      accountChangeHandler(accounts[0]);
    }else{
      console.log('Install Metamask!');
    }
  }

  const accountChangeHandler = async(address) => {
    setDefaultAccount(address);
    await getUserBalance(address.toString());
    history('/account');
  }

  const chainChangeHandler = () => {
    window.location.reload();
  }

  const getUserBalance = async(address) => {
    const balance = await window.ethereum.request({method: 'eth_getBalance', params: [address, 'latest']});
    console.log(ethers.utils.formatEther(balance));
    setAccountBalance(ethers.utils.formatEther(balance));
  }

  window.ethereum.on('accountChanged', accountChangeHandler);
  window.ethereum.on('chainChanged', chainChangeHandler);

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
              <ListGroup.Item className={styles.wallet} style={{cursor: 'pointer'}} onClick={connectWalletHandler}>
                <Row>
                  <Col sm={1}>
                    <img
                      src="https://opensea.io/static/images/logos/metamask-alternative.png"
                      height="30px"
                      style={{ marginRight: "20px" }}
                      alt="MetaMask"
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
                      alt="Coinbase Wallet"
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
                      alt="WalletConnect"
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
                      alt="Trust"
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
