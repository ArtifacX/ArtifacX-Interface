import React from "react";
import styles from "./Summary.module.css";
import { Card } from "react-bootstrap";
import { Accordion } from "@mantine/core";

const Summary = (props) => {

  return (
    <>
      <style type="text/css">
        {`
            .card{
                width: 100%;
                border: 1px solid #303030;
                border-radius: 16px;
                background-color: #1c1d1d;
            }
            .mantine-Accordion-item{
                border-bottom: 1px solid #303030;
            }
            .mantine-Accordion-item:last-child{
                border-bottom: none;
            }
            .mantine-Accordion-icon{
                color: white;
            }
            .mantine-Accordion-label{
                font-family: 'Poppins';
                font-size: 16px;
                font-weight: 600;
                color: white;
            }
            .mantine-Accordion-control:hover{
                background-color: #1c1d1d;
            }
            .mantine-Accordion-content{
                color: white;
                font-family: 'Poppins';
                font-size: 14px;
            }
        `}
      </style>
      <div className={styles.mainContainer}>
        <div className={styles.basicInfo}>
          <div className={styles.details}>
            <div className={styles.collection}>
              <h1>Some Collection Name</h1>
            </div>
            <div className={styles.name}>
              <h1>{props.name}</h1>
            </div>
            <div className={styles.owner}>
              <h1>{props.hodler}</h1>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}></div>
        <div className={styles.description}>
          <Card>
            <Card.Body>
              <Accordion iconPosition="right" initialItem={0} multiple>
                <Accordion.Item label="Description">
                  {props.description}
                </Accordion.Item>

                <Accordion.Item label="External Link">
                  {props.externalLink}
                </Accordion.Item>

                {/* <Accordion.Item label="Details">
                  With new :focus-visible pseudo-class focus ring appears only
                  when user navigates with keyboard
                </Accordion.Item> */}
              </Accordion>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Summary;
