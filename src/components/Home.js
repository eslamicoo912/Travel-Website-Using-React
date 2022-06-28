import React from "react";
import video2 from "../assets/video-2.mp4";

const Home = () => {
  return (
    <div className="home">
      <video src={video2} autoPlay loop muted />
      <div>
        <h1>ADVENTURE AWAITS</h1>
        <h4 className="py-3">What are you waiting for?</h4>
      </div>
    </div>
  );
};

export default Home;
