import React from "react";
import Navbar from "../components/Navbar";
import Popular from "../components/Popular";
import Slider from "../components/Slider";

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <Slider />
      <Popular />
    </div>
  );
};

export default Home;
