import React, { useState, useEffect, useMemo } from "react";
import {useDispatch} from 'react-redux';
import { useArtifactory } from "../../hooks/useContract";
import NavigationBar from "../navbar";
import CarouselBanner from "./Carousel";
import Collections from "./Collections";
import axios from "axios";
import { Loader } from '@mantine/core';
import styles from './index.module.css';
import {nftsActions} from '../../store/nfts';
import { RouteGuard } from "../route_gaurd";
import { useActiveWeb3React } from "../../hooks/useWeb3";

const HomePage = () => {
  const {account} = useActiveWeb3React();
  const factory = useArtifactory();
  const [N_TOKENS, setNTokens] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [metadata, setMetadata] = useState([]);
  const [uris, setURIs] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const dispatch = useDispatch();

  // const getAddresses = async () => {
  //   let addresses = [];
  //   for (var i = 0; i < N_TOKENS; i++) {
  //     addresses.push(await factory?.getAddressByIndex(i));
  //   }
  //   addresses = await Promise.all(addresses);
  //   console.log(addresses);
  //   return addresses;
  // };



  const getDataFromPinata = async () => {
    const uris = await factory?.getURIs();
    const a = await factory?.getAddresses();
    setURIs(uris);
    const metadata = await Promise.all(
      uris?.map(async (tokenURI) => {
        const url = "getMetadata";
        return axios.get(url, {
          params: {
            tokenURI,
          },
        });
      })
    );
    const data = metadata.map(a => a.data);
    // const a = await getAddresses();
    dispatch(nftsActions.loadNfts({nfts: data}));
    dispatch(nftsActions.loadURIS({uris: uris}));
    dispatch(nftsActions.loadAddresses({addresses: a}));
    console.log(a); 
    setMetadata(metadata);
    setAddresses(a);
    return metadata;
  };

  useEffect(async () => {
    setIsLoading(true);
    if(factory && account){
      // let n_tokens = await factory?.N_TOKENS();
      // setNTokens(n_tokens?.toNumber());
      await getDataFromPinata();
      setIsLoading(false);
    }
  }, [factory,account]);

  return (
    <RouteGuard>
      <NavigationBar />
      <CarouselBanner />
      {
        account ? (
          isLoading ? (
            <div style={{ height: "100vh"}}>
              <div className={styles.container}>
                <h1 className={styles.heading}>Explore Collections</h1>
                <Loader style={{alignSelf: 'center'}}/>
              </div>
            </div>
          ):(
          <div style={{ height: "100vh" }}>
            <Collections nfts={metadata} uri={uris} addresses={addresses}  />
          </div>
          )
        )
          :
         ( 
          <div className={styles.container} >
            Connect Wallet to access ArtifacX
          </div>
        )
      }
    </RouteGuard>
  );
};

export default HomePage;
