import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useArtifactory } from "../../hooks/useContract";
import NavigationBar from "../navbar";
import CarouselBanner from "./Carousel";
import Collections from "./Collections";
import axios from "axios";
import { Loader } from '@mantine/core';
import styles from './index.module.css';
import { nftsActions } from '../../store/nfts';
import { RouteGuard } from "../route_gaurd";
import { useActiveWeb3React } from "../../hooks/useWeb3";

const HomePage = () => {
  const { account } = useActiveWeb3React();
  const factory = useArtifactory();
  const [isLoading, setIsLoading] = useState(true);
  const [metadata, setMetadata] = useState([]);
  const [uris, setURIs] = useState([]);
  const [addresses, setAddresses] = useState([]);

  const dispatch = useDispatch();

  const getDataFromPinata = async () => {
    const urisFetch = await factory?.getURIs();
    setURIs(urisFetch);
    const metadata = await Promise.all(
      urisFetch?.map(async (tokenURI) => {
        const url = `http://localhost:8000/getMetadata`;
        return axios.get(url, {
          params: {
            tokenURI,
          },
        });
      })
    );
    const data = metadata.map(a => a.data);
    console.log(data);
    const a = await factory.getAddresses();
    console.log(a);
    dispatch(nftsActions.loadNfts({ nfts: data }));
    dispatch(nftsActions.loadURIS({ uris: urisFetch }));
    dispatch(nftsActions.loadAddresses({ addresses: a }));
    console.log(a);
    setMetadata(metadata);
    setAddresses(a);
    return metadata;
  };

  useEffect(() => {
    setIsLoading(true);
    if (factory && account) {
      getDataFromPinata();
      setIsLoading(false);
    }
  }, [factory, account]);

  return (
    <RouteGuard>
      <NavigationBar />
      <CarouselBanner />
      {
        account ? (
          isLoading ? (
            <div style={{ height: "100vh" }}>
              <div className={styles.container}>
                <h1 className={styles.heading}>Explore Collections</h1>
                <Loader style={{ alignSelf: 'center' }} />
              </div>
            </div>
          ) : (
            <div style={{ height: "100vh" }}>
              <Collections nfts={metadata} uri={uris} addresses={addresses} />
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
