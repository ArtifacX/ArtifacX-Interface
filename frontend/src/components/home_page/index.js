import React,{useState,useEffect} from "react";
import { useArtifactory } from "../../hooks/useContract";
import NavigationBar from "../navbar";
import CarouselBanner from "./Carousel";
import Collections from "./Collections";

const HomePage = () => {

  const factory = useArtifactory();
  const [tokens,setTokens] = useState([]);

  // useEffect(()=>{
  //   console.log(factory);
  //   let tx = factory?.tokens().then((response)=>{
  //     console.log(response);
  //   });

  // },[factory])





  return (
    <>
      <NavigationBar />
      <CarouselBanner />
      <div style={{height: '100vh'}}>
        <Collections />
      </div>
    </>
  );
};

export default HomePage;
