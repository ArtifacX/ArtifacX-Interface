import React from "react";
import NavigationBar from "../navbar";
import CarouselBanner from "./Carousel";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <CarouselBanner />
      <div style={{height: '100vh'}}>

      </div>
    </>
  );
};

export default HomePage;
