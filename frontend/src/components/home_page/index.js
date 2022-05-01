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

const HomePage = () => {
  const factory = useArtifactory();
  const [N_TOKENS, setNTokens] = useState(undefined);
  const [isLoading, setIsLoading] = useState(undefined);
  const [metadata, setMetadata] = useState([]);
  const [tokens, setTokens] = useState([]);

  const dispatch = useDispatch();

  const getURIs = async () => {
    let uri = [];
    for (var i = 0; i < N_TOKENS; i++) {
      uri.push(await factory?.getURIByIndex(i));
    }
    uri = await Promise.all(uri);
    return uri;
  };

  const TOKENS = useMemo(() => {
    if (N_TOKENS != undefined) {
      return getURIs();
    }
  }, [N_TOKENS]);

  const getDataFromPinata = async () => {
    const t = await TOKENS;
    setTokens(t);
    const metadata = await Promise.all(
      t?.map(async (tokenURI) => {
        const url = "getMetadata";
        return axios.get(url, {
          params: {
            tokenURI,
          },
        });
      })
    );
    console.log(metadata);
    const data = metadata.map(a => a.data);
    dispatch(nftsActions.loadNfts({nfts: data}));
    dispatch(nftsActions.loadURIS({uris: t}));
    console.log(data);
    setMetadata(metadata);
    return metadata;
  };

  const METADATA = useMemo(async () => {
    if (N_TOKENS != undefined) {
      const result = await getDataFromPinata();
      setIsLoading(false);
      return result;
    }
  }, [N_TOKENS]);

  useEffect(async () => {
    setIsLoading(true);
    let n_tokens = await factory?.N_TOKENS();
    setNTokens(n_tokens?.toNumber());
  }, [factory]);

  return (
    <>
      <NavigationBar />
      <CarouselBanner />
      {(metadata.length == 0 && isLoading === true) ? (
        <div style={{ height: "100vh"}}>
          <div className={styles.container}>
            <h1 className={styles.heading}>Explore Collections</h1>
            <Loader style={{alignSelf: 'center'}}/>
          </div>
        </div>
      ) : (
        <div style={{ height: "100vh" }}>
          <Collections nfts={metadata} uri={tokens} />
        </div>
      )}
    </>
  );
};

export default HomePage;
