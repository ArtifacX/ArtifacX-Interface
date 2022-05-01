import React from 'react';
import { useParams } from 'react-router-dom';
import {useSelector} from 'react-redux';
import NavigationBar from '../navbar/index';
import Details from './Details';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { useArtifact, useMarketX } from '../../hooks/useContract';
import { utils } from 'ethers';

const AssetPage = () => {
  const {address} = useParams();
  const nftsData = useSelector(state => state.nfts.nfts)
  const urisData = useSelector(state => state.nfts.uris)
  console.log(nftsData)
  console.log(urisData)
  const itemIndex = urisData.indexOf(address);
  const itemData = nftsData[itemIndex];
  console.log(itemIndex)
  console.log(itemData)
  return (
    <>
        <NavigationBar />
        <Details itemDetails={itemData} />
    </>
  )
}

export default AssetPage;