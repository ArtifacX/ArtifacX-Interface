import React from "react";
import NavigationBar from "../navbar";
import CarouselBanner from "./Carousel";
import Collections from "./Collections";

const HomePage = () => {
  return (
    <>
      <NavigationBar />
      <CarouselBanner />
      <Collections />
      <div style={{height: '100vh'}}>

      </div>
    </>
  );
};

export default HomePage;
