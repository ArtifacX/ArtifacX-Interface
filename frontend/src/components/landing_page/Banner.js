import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import styles from './Banner.module.css';
import Disc from '../../assets/images/disc.gif';
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';

const Banner = () => {
  return (
    <Container fluid>
    <Row className={styles.row} style={{height:'82vh', width:'100%'}}>
        <Col className={styles.typography} sm={7} style={{height:'100%'}} > 
            <div className={styles.hiddenContent}>
                <img src={Disc} alt="Chip" height='450px'/>
                <Button as={Link} to="/home" className={styles.btn} variant="dark" size="lg">Explore the marketplace</Button>
            </div>
        </Col>
        <Col className={styles.chip} sm={5} style={{height:'100%'}}>
            <div style={{display:'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <img src={Disc} alt="Chip" height='550px'/>
                <Button as={Link} to="/home" className={styles.btn} variant="dark" size="lg">Explore the marketplace</Button>
            </div>
        </Col>
    </Row>
    </Container>
  )
}

export default Banner;