import React from 'react';
import styles from './Divider.module.css';

const Divider = (props) => {
  return (
    <div className={styles.cautionTape} style={{margin: `${props.adjust}`, height: '45px', width: '100%', backgroundColor: '#EAD83A', transform: `rotate(${props.angle}deg)`, verticalAlign: 'center'}}>
        <marquee className={styles.scrollText} style={{lineHeight: '45px', fontSize: '30px', fontWeight: 'bold'}} scrolldelay={props.delay} > &#9648; Authenticity on chain &#9648; <span style={{width: '100px', marginRight: '550px'}} /> &#9648; Authenticity on chain &#9648; </marquee>
    </div>
  )
}

export default Divider;