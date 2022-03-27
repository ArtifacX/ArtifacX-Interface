import React from 'react';
import styles from './Form.module.css';
import { Button, Container } from 'react-bootstrap';


const Form = () => {
  return (
    <div className={styles.container}>
        <Container>
            <div style={{width: '100%', display: 'flex', justifyContent: 'center', margin: '0px 0px 50px 0px'}}>
                <div className={styles.formWrapper}>
                    <h1 className={styles.headline}>List item for sale</h1>
                    <div className={styles.labelContainer}>
                        <div>List price cannot be edited once the item is listed. You will need to cancel <br/>
                            your listing and relist the item with the updated price.<span className={styles.required}>*</span>
                        </div>
                    </div>
                    <form>
                        <div className={styles.fieldContainer}>
                            <div className={styles.labelContainer}>
                                <label for="amount">Amount</label>
                                <div>The price at which the item will be listed.</div>
                            </div>
                            <div className={styles.amountField}>
                                <input id="amount" type="number" placeholder='Amount' min={0}/>
                            </div>
                        </div>
                        <hr />
                        <div className={styles.fees}>
                            <h1>Fees</h1>
                            <div className={styles.labelContainer}>
                                <div>Listing is free. Once sold, the following fees will be deducted.<span className={styles.required}>*</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.serviceFees}>
                            <h1>Service Fee</h1>
                            <div>
                                2.5%
                            </div>
                        </div>
                        <div className={styles.creatorFees}>
                            <h1>Creator Fee</h1>
                            <div>
                                10.0%
                            </div>
                        </div>
                        <Button className={styles.btn} size='large'>Complete Listing</Button>
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Form