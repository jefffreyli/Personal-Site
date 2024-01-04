import React from "react";
import Song from "../components/Song";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const currentlyPlaying = () => {
  return (
    <div>
      <Nav />
      <Song />
      <Footer/>
    </div>
  );
};

export default currentlyPlaying;
