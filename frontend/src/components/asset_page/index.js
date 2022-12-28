import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NavigationBar from '../navbar/index';
import Details from './Details';
import { useActiveWeb3React } from '../../hooks/useWeb3';
import { useArtifact } from '../../hooks/useContract';
// import { utils } from 'ethers';
import { getMetadata, getContractData, getMarketApproved } from '../../utils/getArtifactData';
import { RouteGuard } from '../route_gaurd';
import styles from './index.module.css';
import { Loader } from '@mantine/core';

const AssetPage = () => {

  const { account, chainId } = useActiveWeb3React();
  const { address } = useParams();
  console.log(address)
  const artifact = useArtifact(address);

  const nftsData = useSelector(state => state.nfts.nfts);
  console.log(nftsData)
  const addresses = useSelector(state => state.nfts.addresses);
  console.log(addresses)
  const itemIndex = addresses.indexOf(address);

  const [metadata, setMetadata] = useState();
  const [artifactData, setArtifactData] = useState();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      let metadata;
      if (artifact && account) {
        if (itemIndex === -1) {
          metadata = await getMetadata(artifact);
          // setMetadata(metadata);
        } else {
          metadata = nftsData[itemIndex];
        }
        const contractData = await getContractData(artifact);
        const isApproved = await getMarketApproved(artifact, account, chainId);
        contractData['approved'] = isApproved;
        console.log(metadata);
        console.log(contractData);
        setMetadata(metadata);
        setArtifactData(contractData);
        setLoading(false);
      }
    }
    fetchData();
  }, [account, artifact, chainId, itemIndex, nftsData]);


  return (
    <RouteGuard>
      <NavigationBar />
      {
        loading ? (
          <div style={{ height: "100vh" }}>
            <div className={styles.container}>
              <Loader style={{ alignSelf: 'center' }} />
            </div>
          </div>) : (
          <Details itemDetails={metadata} contractDetails={artifactData} artifact={artifact} />
        )
      }
    </RouteGuard>
  )
}

export default AssetPage;