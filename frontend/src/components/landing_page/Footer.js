import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <>
        <div className={styles.wrapper}>
          <div className={styles.division} style={{fontWeight: 'bold'}}>ArtifacX is a Web3 marketplace where product authenticity is the prime focus! <br />
            buy, transact, sell products in the form of NFTS</div>
          <br />
          <div className={styles.division} style={{fontWeight: 'bold'}}>Group Members</div>
          <ul className={styles.division}>
            <li>Aayush Malde - 1911090</li>
            <li>Aditya Malwade - 1911091</li>
            <li>Rahul Panchal - 1911097</li>
          </ul>
        </div>
    </>
  )
}

export default Footer;