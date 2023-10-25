import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/PotraitCarousel.css";
import PotraitCarousel from "./PotraitCarousel";
import LandscapCarousel from "../LandscapCarousel/LandscapCarousel";

function CardPortraitCarousel({ category, title, mode }) {
  return (
    <>
      {mode == "Potrait" ? (
        <PotraitCarousel category={category} title={title} />
      ) : (
        <LandscapCarousel category={category} title={title} />
      )}
    </>
  );
}

export default CardPortraitCarousel;
