import React from "react";
import styles from "./History.module.css";
import { Card } from "react-bootstrap";
import { Accordion, Table } from "@mantine/core";

const History = (props) => {
  console.log(props.ledger)
  
  const rows = props.ledger.map((address, i) => {
    if (i === 0) {
      return (<tr key={address}>
        <td>📜 Creator</td>
        <td>{address}</td>
      </tr>);
    } else if (i === 1) {
      return (<tr key={address}>
        <td>🪙 Minter</td>
        <td>{address}</td>
      </tr>);
    }else{
      return (<tr key={address}>
      <td>↪️ Transferred</td>
      <td>{address}</td>
    </tr>);
    }
  });
  console.log(rows)
  return (
    <>
    <style type="text/css">
        {`
        .mantine-Table-root{
          color: white;
        }
      `}
      </style>
      <div className={styles.mainContainer}>
        <Card>
          <Card.Body>
            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label="Item Activity">
                <Table>
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Address</th>
                    </tr>
                  </thead>
                  <tbody>{rows}</tbody>
                </Table>
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card>
        {/* <Card>
          <Card.Body>
            <Accordion iconPosition="right" initialItem={0}>
              <Accordion.Item label="More From This Collection">
                Colors, fonts, shadows and many other parts are customizable to
                fit your design needs
              </Accordion.Item>
            </Accordion>
          </Card.Body>
        </Card> */}
      </div>
    </>
  );
};

export default History;
