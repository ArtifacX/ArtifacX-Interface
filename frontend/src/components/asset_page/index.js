import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavigationBar from '../navbar/index';
import Details from './Details';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { useArtifact, useMarketX } from '../../hooks/useContract';
import { utils } from 'ethers';
import { getMetadata,getContractData, getMarketApproved } from '../../utils/getArtifactData';
import { RouteGuard } from '../route_gaurd';

const AssetPage = () => {

  const { account,chainId } = useActiveWeb3React();
  const { address } = useParams();
  const artifact = useArtifact(address);

  const nftsData = useSelector(state => state.nfts.nfts);
  const addresses = useSelector(state => state.nfts.addresses);
  const itemIndex = addresses.indexOf(address);

  const [metadata,setMetadata] = useState();
  const [artifactData,setArtifactData] = useState(); 

  const [loading,setLoading] = useState(true);
  
  useEffect(async () => {
    setLoading(true);
    let metadata;
    if(artifact && account){
      if(itemIndex == -1){
        metadata = await getMetadata(artifact);
        // setMetadata(metadata);
      } else {
        metadata = nftsData[itemIndex];
      }
      const contractData = await getContractData(artifact);
      const isApproved = await getMarketApproved(artifact,account,chainId);
      contractData['approved'] = isApproved;
      console.log(metadata);
      console.log(contractData);
      setMetadata(metadata);
      setArtifactData(contractData);
      setLoading(false);
    }
  }, [account, artifact]);


  return (
    <RouteGuard>
      <NavigationBar />
      {
        loading ? (<h2>loading...</h2>) : (
          <Details itemDetails={metadata} contractDetails={artifactData} artifact={artifact}  />
        )
      }
    </RouteGuard>
  )
}

export default AssetPage;