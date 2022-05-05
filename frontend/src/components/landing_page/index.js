import React, { useEffect } from 'react';
import NavigationBar from '../navbar';
import Banner from './Banner';
import Divider from './Divider';
import Cards from './Cards';
import Pattern from '../../assets/images/pattern.png';
import Footer from './Footer';
import { RouteGuard } from '../route_gaurd';

const LandingPage = () => {

  return (
    <RouteGuard>
      <NavigationBar />
      <Banner />
      <div style={{marginTop: '40px'}}>
        <Divider delay={85} adjust="-20px 0px 0px 0px" angle="-2"/>
        <Divider delay={150} adjust="-30px 0px 0px 0px" angle="4"/>
      </div>
      <div style={{width: '100%', backgroundImage: `url(${Pattern})`, backgroundRepeat: 'repeat'}}>
        <Cards />
      </div>
      <Footer />
    </RouteGuard>
  );
};

export default LandingPage;
