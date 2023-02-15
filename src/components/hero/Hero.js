import React from "react";
import { useNavigate } from "react-router-dom";
import "./Hero.scss";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="Hero">
      <div className="hero-content center">
        <h2 className="heading">Exclusive Print and Artwork</h2>
        <p className="subheading">
          Exclusive Art Pieces, for the Exclusive you.
        </p>
        <button
          onClick={() => navigate("/category")}
          className="cta btn-primary"
        >
          Explore More
        </button>
      </div>
    </div>
  );
};

export default Hero;
