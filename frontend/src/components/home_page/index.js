import React from "react";
import NavigationBar from "../navbar";
import CarouselBanner from "./Carousel";
import Collections from "./Collections";

const HomePage = () => {
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
