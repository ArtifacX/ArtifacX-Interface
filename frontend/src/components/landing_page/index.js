import React from "react";
import NavigationBar from "../navbar";
import Banner from "./Banner";
import Divider from "./Divider";

const LandingPage = () => {
  return (
    <>
      <NavigationBar />
      <Banner />
      <div style={{marginTop: '40px'}}>
        <Divider delay={85} margin="-20px 0px 0px 0px" angle="-4"/>
        <Divider delay={150} margin="10px 0px 0x 0px" angle="4"/>
      </div>
    </>
  );
};

export default LandingPage;
