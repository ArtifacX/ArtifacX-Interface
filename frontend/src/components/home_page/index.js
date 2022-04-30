import React, { useState, useEffect, useMemo } from "react";
import { useArtifactory } from "../../hooks/useContract";
import NavigationBar from "../navbar";
import CarouselBanner from "./Carousel";
import Collections from "./Collections";
import axios from 'axios';

const HomePage = () => {

  const factory = useArtifactory();
  const [N_TOKENS, setNTokens] = useState(undefined);

  const getURIs = async () => {
    let uri = [];
    for (var i = 0; i < N_TOKENS; i++) {
      uri.push(await factory?.getURIByIndex(i));
    }
    uri = await Promise.all(uri);
    console.log(uri);
    return uri;
  }

  const TOKENS = useMemo(() => {
    if (N_TOKENS != undefined) {
      return getURIs();
    }
  }, [N_TOKENS]);

  const getDataFromPinata = async () => {
    let t = await TOKENS;
    let metadata = await Promise.all (
      t?.map(async(tokenURI)=>{
        let url = "getMetadata";
        console.log(url);
        return axios
          .get(url, {
            params:{
              tokenURI
            }
          });
      }) 
    )

    console.log(metadata);
    return metadata;
  };

  const METADATA = useMemo(()=>{
    if (N_TOKENS != undefined) {
      return getDataFromPinata();
    }
  },[N_TOKENS]);




useEffect(async () => {
  let n_tokens = await factory?.N_TOKENS();
  setNTokens(n_tokens?.toNumber());
}, [factory]);

return (
  <>
    <NavigationBar />
    <CarouselBanner />
    <div style={{ height: '100vh' }}>
      <Collections />
    </div>
  </>
);
};

export default HomePage;
