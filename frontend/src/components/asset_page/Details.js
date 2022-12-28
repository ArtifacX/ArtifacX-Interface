import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Details.module.css';
import Summary from './Summary';
import Main from './Main';

const Details = (props) => {
  return (
    <div className={styles.contentContainer}>
        <Container>
            <Row>
                <Col lg={5} className={styles.summary}>
                    <Summary summary={props.itemDetails} />
                </Col>
                <Col lg={7} className={styles.main}>
                    <Main itemDetails={props.itemDetails} contractDetails={props.contractDetails} artifact={props.artifact}/>
                </Col>
            </Row>
            {/* <Row>
                <History ledger={props.contractDetails.ledger}/>
            </Row> */}
        </Container>

    </div>
  )
}

export default Details;