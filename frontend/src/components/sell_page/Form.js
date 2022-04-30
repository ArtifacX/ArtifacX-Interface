import React, {useEffect,useState} from 'react';
import styles from './Form.module.css';
import { Button, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useArtifact, useMarketX } from '../../hooks/useContract';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { MARKETX_ADDRESS } from '../../constants/addresses';
import { utils } from 'ethers';

const Form = () => {

    // enum Status {
    //     Created,
    //     Minted,
    //     Hodl,
    //     Staked,
    //     Unverified,
    //     Paused
    // }

    //Use this Artifact Address to test : 0x84EC82Ad8D2755F75e8BEA2370828759f40ca9B2

    const {address} = useParams();
    const {account,chainId} = useActiveWeb3React();
    const artifact = useArtifact(address);
    const market = useMarketX();
    const [price,setPrice] = useState(undefined);
    const [name,setName] = useState(undefined);
    const [hodler,setHodler] = useState(undefined);
    const [status,setStatus] = useState(undefined);
    const [id,setId] = useState(undefined);
    const [approved,setApproved] = useState(undefined);
    const [loading,setLoading] = useState(false);

    
    useEffect(async()=>{
        console.log(artifact);
        let _price = await artifact?.getData();
        console.log(_price);
        setPrice(price);
        let _id = await artifact?.ID();
        setId(_id);
        let _hodler = await artifact?.getHodler();
        console.log(_hodler);
        let _approved = await artifact?.isApprovedForAll(_hodler,MARKETX_ADDRESS[chainId]);
        console.log(_approved);
        setApproved(_approved);
    },[account,artifact,approved])

    const approve = () => {
        console.log(approved);
        if(approved==false){
            setLoading(true);
            artifact?.setApprovalForAll(MARKETX_ADDRESS[chainId],true)
            .then((res)=>{
                console.log(res);
                setApproved(true);
            }).catch((err)=>{
                console.error(err);
                setLoading(false);
            });
        }
    }

    const stake = () => {
        setLoading(true);
        if(approved==true){
            setLoading(true);
            market?.stake(address, {value: utils.parseEther(price)})
            .then((res)=>{
                console.log(res);
                
            }).catch((err)=>{
                console.error(err);
                setLoading(false);
            })
        } else if(approved==false) {
            console.log("not approved");
            approve();
        }
    }

    // const buy = () => {
    //     setLoading(true);
    //     if()
    // }


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
                                <label htmlFor="amount">Amount</label>
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
                        <Button className={styles.btn} size='large' onClick={(e)=>stake()} disable={loading.toString()}>Stake</Button>
                    </form>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Form