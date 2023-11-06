import React, { useState, useEffect, memo } from "react";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/PotraitCarousel.css";
import PotraitCarousel from "./PotraitCarousel";
import LandscapCarousel from "../LandscapCarousel/LandscapCarousel";

function CardCarousel({ category, title, mode }) {
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

export default memo(CardCarousel);
