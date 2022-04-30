import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Details.module.css';
import Summary from './Summary';
import Main from './Main';
import History from './History';

const Details = (props) => {
  return (
    <div className={styles.contentContainer}>
        <Container>
            <Row>
                <Col lg={5} className={styles.summary}>
                    <Summary name={props.name} hodler={props.hodler} description={props.description} externalLink={props.externalLink}/>
                </Col>
                <Col lg={7} className={styles.main}>
                    <Main price={props.price} status={props.status}/>
                </Col>
            </Row>
            <Row>
                <History />
            </Row>
        </Container>

    </div>
  )
}

export default Details;