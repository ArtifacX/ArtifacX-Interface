import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavigationBar from '../navbar/index';
import Details from './Details';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { useArtifact, useMarketX } from '../../hooks/useContract';
import { utils } from 'ethers';

const AssetPage = () => {

  //Use this Artifact Address to test : 0x84EC82Ad8D2755F75e8BEA2370828759f40ca9B2

  // enum Status {
    //     Created,
    //     Minted,
    //     Hodl,
    //     Staked,
    //     Unverified,
    //     Paused
    // }


  const { address } = useParams();
  const { account, chainId } = useActiveWeb3React();
  const artifact = useArtifact(address);
  const market = useMarketX();
  const [price, setPrice] = useState(undefined);
  const [name, setName] = useState(undefined);
  // const [hodler, setHodler] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const [id, setId] = useState(undefined);
  const [uri, setURI] = useState(undefined);
  const [nLedger, setNLedger] = useState(undefined);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    // console.log(artifact);
    let _name = await artifact?.NAME();
    let data = await artifact?.getData();
    console.log(data);
    // console.log(data[3].toString());
    if (data) {
      let _id = data[0].toString();
      let _price = utils.formatEther(data[1].toString());
      let _nLedger = data[2].toString();
      let _status = data[3].toString();
      setName(_name);
      setPrice(_price);
      setStatus(_status);
      setId(_id);
      setNLedger(_nLedger);
      // console.log(_nLedger);
    }
    let _uri = await artifact?.uri(0);
    // console.log(_uri);
    setURI(_uri);
    let creator = await artifact?.LEDGER(0);
    // console.log(creator);

  }, [account, artifact]);




  return (
    <>
      <NavigationBar />
      <Details description={"This is description"} status={status} externalLink={"This is External Link"} name={name} price={price} hodler={"hodler address"} />
    </>
  )
}

export default AssetPage;