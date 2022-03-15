import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from './Banner.module.css';
import Disc from '../../assets/images/disc.gif';

const Banner = () => {
  return (
    <Container fluid>
    <Row className={styles.row} style={{height:'82vh', width:'100%'}}>
        <Col className={styles.typography} sm={7} style={{height:'100%'}} />
        <Col className={styles.chip} sm={5} style={{height:'100%'}}>
            <div>
                <img src={Disc} alt="Chip" height='550px'/>
            </div>
        </Col>
    </Row>
    </Container>
  )
}

export default Banner;