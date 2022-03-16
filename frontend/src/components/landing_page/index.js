import React from 'react';
import NavigationBar from '../navbar';
import Banner from './Banner';
import Divider from './Divider';
import Cards from './Cards';

const LandingPage = () => {
  return (
    <>
      <NavigationBar />
      <Banner />
      <div style={{marginTop: '40px'}}>
        <Divider delay={85} adjust="-20px 0px 0px 0px" angle="-2"/>
        <Divider delay={150} adjust="-30px 0px 0px 0px" angle="4"/>
      </div>
      <Cards />
    </>
  );
};

export default LandingPage;
