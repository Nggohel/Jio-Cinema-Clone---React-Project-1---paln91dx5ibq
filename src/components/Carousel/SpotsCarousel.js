import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Carousel.css";
import { ImagesUrl } from "../../Data/ImagesUrl";

function SubscribeCarousel() {
  return (
    <Carousel
      showArrows={true} // Show navigation arrows
      showStatus={false} // Hide status indicator
      showThumbs={false} // Hide thumbnail images
      infiniteLoop={true} // Enable infinite loop
      centerMode={true} // Center the current slide
      centerSlidePercentage={100} // Show one items at a time
      emulateTouch={false}
      showIndicators={true}
    >
      <div className="main-carouselimage">
        <a>
          <img
            className="main-img"
            src={ImagesUrl.spotheader_1}
            alt="headerimage"
          />
        </a>
        <div>
          <h3 style={{ color: "white" }}>MEIN, MEHMOOD</h3>
          <p style={{ color: "darkgray" }}>Hindi Drama U/A 7+</p>
          <Button variant="primary" className="watchbutton">
            WATCH
          </Button>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.spotheader_2} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>
            Sautrashtra vs Rest of India,Day 3
          </h3>
          <p style={{ color: "white" }}></p>
          <Button variant="primary" className="watchbutton">
            WATCH
          </Button>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.spotheader_3} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Rat In The Kitchen</h3>
          <p style={{ color: "white" }}>Hindi Thriller U/A 13+</p>
          <Button variant="primary" className="watchbutton">
            WATCH
          </Button>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.spotheader_4} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>FC Goa 1-0 Punjab FC</h3>
          <p style={{ color: "white" }}></p>
          <Button variant="primary" className="watchbutton">
            WATCH
          </Button>
        </div>
      </div>
    </Carousel>
  );
}

export default SubscribeCarousel;
