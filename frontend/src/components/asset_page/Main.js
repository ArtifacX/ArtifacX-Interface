import React, { useState, useEffect } from "react";
import styles from "./Main.module.css";
import { Card, Button } from 'react-bootstrap';
// import { Accordion } from "@mantine/core";
import { statusMap } from "../../utils/statusMap";
import { useActiveWeb3React } from "../../hooks/useWeb3";
import { useMarketX } from "../../hooks/useContract";
import { MARKETX_ADDRESS } from "../../constants/addresses";
import { useParams } from "react-router-dom";
import { utils } from "ethers";
import { addressShortner } from "../../utils";
import { useToasts } from 'react-toast-notifications';
import History from './History';

const Main = (props) => {

  const { account, chainId } = useActiveWeb3React();
  const { address } = useParams();
  const [status, setStatus] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [approved, setApproved] = useState(undefined);
  const market = useMarketX();
  const { addToast } = useToasts();

  const approve = () => {
    if (props.contractDetails.approved === false) {
      setLoading(true);
      props.artifact?.setApprovalForAll(MARKETX_ADDRESS[chainId], true)
        .then((res) => {
          console.log(res);
          setApproved(true);
        }).catch((err) => {
          console.error(err);
        });
      setLoading(false);
    }
  }

  const stake = () => {
    setLoading(true);
    if (approved === true) {
      setLoading(true);
      market?.stake(address, { value: utils.parseEther(props.itemDetails.price) })
        .then((res) => {
          console.log(res);

        }).catch((err) => {
          console.error(err);
        })
      setLoading(false);
    } else if (approved === false) {
      console.log("not approved");
      approve();
    }
  }

  const mint = () => {
    setLoading(true);
    console.log(props.itemDetails.price);
    market?.mintArtifact(address, { value: utils.parseEther(props.itemDetails.price) })
      .then((res) => {
        console.log(res);
        addToast('Artifact Received', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000 ,placement: 'bottom-right' });
        window.location.reload();

      }).catch((err) => {
        console.error(err);
      })
    setLoading(false);
  }

  const verify = () => {
    setLoading(true);
    market?.verify(address, true)
      .then((res) => {
        console.log(res);
        addToast('Artifact Verified', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000 ,placement: 'bottom-right' });
        window.location.reload();
      }).catch((err) => {
        console.error(err);
      })
    setLoading(false);
  }

  const buy = () => {
    setLoading(true);
    market?.buy(address, { value: utils.parseEther(props.itemDetails.price) })
      .then((res) => {
        console.log(res);
        addToast('Artifact Received', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000 ,placement: 'bottom-right' });
        window.location.reload();

      }).catch((err) => {
        console.error(err);
      })
    setLoading(false);
  }

  const withdraw = () => {
    setLoading(true);
    market?.withdraw()
      .then((res) => {
        console.log(res);
        addToast('Withdraw success', { appearance: 'success', autoDismiss: true, autoDismissTimeout: 2000 ,placement: 'bottom-right' })

      }).catch((err) => {
        addToast('No funds to withdraw!', { appearance: 'error', autoDismiss: true, autoDismissTimeout: 2000 ,placement: 'bottom-right' })
        console.error(err);
      })
    setLoading(false);
  }

  const onClickHandler = () => {
    if (status.s === "Mint" && status.active) {
      mint();
    }
    else if (status.s === "Stake" && status.active) {
      stake();
    }
    else if (status.s === "Verify" && status.active) {
      verify();
    }
    else if (status.s === "Buy" && status.active) {
      buy();
    }
  }

  const onWithdrawHandler = () => {
    withdraw();
  }

  useEffect( () => {
    setLoading(true);
    const ledger = props.contractDetails.ledger;
    let isCreator = false;
    let isHodler = false;
    if (ledger[0] === account) {
      isCreator = true;
    }
    if (ledger.length > 1 && ledger[ledger.length-1] === account) {
      isHodler = true;
    }
    const res = statusMap(props.contractDetails.status, isCreator, isHodler);
    console.log(res);
    setApproved(props.contractDetails.approved);
    setStatus(res);
    setLoading(false);
  }, [account, props.contractDetails.ledger, props.contractDetails.approved, props.contractDetails.status]);



  return (
    <>
      <style type="text/css">
        {`
        .card{
          width: 100%;
          border: 1px solid #303030;
          border-radius: 16px;
          background-color: #1c1d1d;
          color: white;
          margin-bottom: 20px;
        }
        .card-header{
          background-color: #242424;
          border-top-right-radius: 16px !important;
          border-top-left-radius: 16px !important;
        }
        .btn-primary{
          background-color: rgb(32, 129, 226);
          font-family: 'Poppins';
          font-size: 16px;
          font-weight: 600;
        }
      `}
      </style>
      <div className={styles.mainContainer}>
        <div className={styles.details}>
          <div className={styles.collection}>
            <h1>Nike Exclusives</h1>
          </div>
          <div className={styles.name}>
            <h1>{props.itemDetails['name']}</h1>
          </div>
          <div className={styles.owner}>
            <h1>{addressShortner(props.contractDetails['ledger'].slice(-1))}</h1>
          </div>
        </div>
        <Card>
          <Card.Header as="h5">Transact</Card.Header>
          <Card.Body>
            {/* <Card.Title>Place your bids here</Card.Title> */}
            {
              loading ? "" : (
                <>
                  <Button size="lg" style={{margin: "10px"}} disabled={!(status.active)} onClick={onClickHandler}>
                    <svg
                      height="22"
                      width="22"
                      version="1.1"
                      viewBox="0 0 17 17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g />
                      <path
                        d="M1.564 2c-0.854 0-1.55 0.69-1.55 1.538h-0.014v10.939c0 0.848 0.695 1.538 1.55 1.538h13.492v-1.655h1.958v-12.36h-15.436zM1.55 15.014c-0.303 0-0.55-0.241-0.55-0.538v-9.583c0.024 0.007 0.054 0.005 0.078 0.012 0.143 0.042 0.293 0.068 0.453 0.071 0.007 0 0.012 0.003 0.019 0.003h12.493v3.035h-2.859c-0.862 0-1.563 0.673-1.563 1.5v1c0 0.827 0.701 1.5 1.563 1.5h2.859v3h-12.493zM11.183 11.014c-0.311 0-0.563-0.224-0.563-0.5v-1c0-0.276 0.253-0.5 0.563-0.5h4.817v2h-4.817zM16 13.359h-0.958v-1.345h0.958v1.345zM15.042 8.014v-4.035h-13.478c-0.273 0-0.55-0.137-0.55-0.441 0.001-0.297 0.248-0.538 0.55-0.538h14.436v5.014h-0.958z"
                        fill="#FFFFFF"
                      />
                    </svg> <span style={{ marginLeft: '10px' }}>{`${status.s} | ${props.itemDetails.price}`}⧫</span>
                  </Button>
                  <Button size="lg" style={{margin: "10px"}} onClick={onWithdrawHandler}>
                    <svg
                      height="22"
                      width="22"
                      version="1.1"
                      viewBox="0 0 17 17"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g />
                      <path
                        d="M1.564 2c-0.854 0-1.55 0.69-1.55 1.538h-0.014v10.939c0 0.848 0.695 1.538 1.55 1.538h13.492v-1.655h1.958v-12.36h-15.436zM1.55 15.014c-0.303 0-0.55-0.241-0.55-0.538v-9.583c0.024 0.007 0.054 0.005 0.078 0.012 0.143 0.042 0.293 0.068 0.453 0.071 0.007 0 0.012 0.003 0.019 0.003h12.493v3.035h-2.859c-0.862 0-1.563 0.673-1.563 1.5v1c0 0.827 0.701 1.5 1.563 1.5h2.859v3h-12.493zM11.183 11.014c-0.311 0-0.563-0.224-0.563-0.5v-1c0-0.276 0.253-0.5 0.563-0.5h4.817v2h-4.817zM16 13.359h-0.958v-1.345h0.958v1.345zM15.042 8.014v-4.035h-13.478c-0.273 0-0.55-0.137-0.55-0.441 0.001-0.297 0.248-0.538 0.55-0.538h14.436v5.014h-0.958z"
                        fill="#FFFFFF"
                      />
                    </svg> <span style={{ marginLeft: '10px' }}>Withdraw</span>
                  </Button>
                </>
              )
            }
          </Card.Body>
        </Card>
        <History ledger={props.contractDetails.ledger}/>
        {/* <Card>
          <Card.Body>
            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label="Offers">
                Colors, fonts, shadows and many other parts are customizable
                to fit your design needs
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card> */}
      </div>
    </>
  );
};

export default Main;
