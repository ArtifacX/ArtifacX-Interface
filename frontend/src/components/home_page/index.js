import React, { useState, useEffect, useMemo } from "react";
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
  const [N_TOKENS, setNTokens] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [metadata, setMetadata] = useState([]);
  const [uris, setURIs] = useState([]);
  const [data, setData] = useState([]);
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

  // const getMetaData = async (tokenURI) => {
  //   console.log("getting");
  //   try {
  //     const response = await axios.get(
  //       "/getMetadata", { params: { tokenURI } }
  //     )
  //     console.log(response);
  //     return response;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // const allMetaData = async () => {
  //   const data = [];
  //   for (let i = 0; i < uris.length; i++) {
  //     data[i] = await getMetaData(uris[i]);
  //   }
  //   return data;
  // }

  // useEffect(() => {
  //   setIsLoading(true);
  //   console.log("here");
  //   async function loadURIs() {
  //     if (factory && account) {
  //       const urisFetch = await factory.getAddresses({});
  //       console.log("fetched token uris from contract: ", urisFetch);
  //       if (urisFetch.length > 0) {
  //         const a = await factory?.getAddresses();
  //         setURIs(urisFetch);
  //         dispatch(nftsActions.loadURIS({ uris: urisFetch }));
  //         dispatch(nftsActions.loadAddresses({ addresses: a }));
  //         setAddresses(a);
  //         let data = [];
  //         for (let i = 0; i < urisFetch.length; i++) {
  //           let d = await getMetaData(urisFetch[i]);
  //           data.push(d);
  //         }
  //         data = await Promise.all(data);
  //         console.log("data: ", data);
  //         setMetadata(data);
  //         dispatch(nftsActions.loadNfts({ nfts: data }));
  //       }
  //       setIsLoading(false);
  //     }
  //   }
  //   loadURIs();
  // }, [factory, account]);

  const getDataFromPinata = async () => {
    const urisFetch = await factory?.getURIs();
    setURIs(urisFetch);
    const metadata = await Promise.all(
      urisFetch?.map(async (tokenURI) => {
        const url = "getMetadata";
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

  useEffect(async () => {
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
