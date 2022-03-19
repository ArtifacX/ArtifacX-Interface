import React from "react";
import styles from "./History.module.css";
import { Card } from "react-bootstrap";
import { Accordion } from "@mantine/core";

const History = () => {
  return (
    <>
      <div className={styles.mainContainer}>
        <Card>
          <Card.Body>
            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label="Item Activity">
                Colors, fonts, shadows and many other parts are customizable to
                fit your design needs
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label="More From This Collection">
                Colors, fonts, shadows and many other parts are customizable to
                fit your design needs
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default History;
