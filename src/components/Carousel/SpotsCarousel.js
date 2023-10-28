import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Carousel.css";
import { ImagesUrl } from "../../Data/ImagesUrl";
import { Link } from "react-router-dom";

function SubscribeCarousel() {
  const totalSlides = 9;
  const interval = 4500;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, interval);

    return () => {
      clearInterval(intervalId);
    };
  }, [totalSlides, interval]);
  return (
    <Carousel
      showArrows={true}
      showStatus={false}
      showThumbs={false}
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={100}
      emulateTouch={false}
      showIndicators={true}
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
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
          <h3 style={{ color: "white" }}>SMAT STORIES</h3>
          <p style={{ color: "darkgray" }}>Cricket Update U/A 7+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.spotheader_2} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>
            Best Of IndianFootBall
          </h3>
          <p style={{ color: "white" }}>FootBall U/A 7+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.spotheader_3} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>SMAT MATTERS</h3>
          <p style={{ color: "white" }}>Hindi Cricket U/A 13+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.spotheader_4} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>Akashvani</h3>
          <p style={{ color: "white" }}>Cricket Discussion with Experts</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
    </Carousel>
  );
}

export default SubscribeCarousel;
