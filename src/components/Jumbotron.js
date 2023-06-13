import React from "react";
import { Link } from "react-router-dom";
import video from "../assets/video/Jumbotron.mp4";

const Jumbotron = () => {
  return (
    <div className="relative">
      <video src={video} autoPlay loop muted className="w-full">
        Sorry, your browser doesn't support embedded videos.
      </video>
      <Link to="/properties">
        <button className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-6 py-3 text-white  rounded-md bg-gray-600 hover:bg-gray-400 text-sm font-medium">
          On y va ⮞
        </button>
      </Link>
    </div>
  );
};

export default Jumbotron;
