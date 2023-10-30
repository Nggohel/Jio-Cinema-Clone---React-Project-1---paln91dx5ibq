import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Carousel.css";
import { ImagesUrl } from "../../Data/ImagesUrl";
import { Link } from "react-router-dom";
function NewsCarousel() {
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
      useKeyboardArrows={true}
      selectedItem={currentIndex}
      onChange={(index) => setCurrentIndex(index)}
    >
      <div className="main-carouselimage">
        <a>
          <img
            className="main-img"
            src={ImagesUrl.newsheader_1}
            alt="headerimage"
          />
        </a>
        <div>
          <h3 style={{ color: "white" }}>CNN News</h3>
          <p style={{ color: "darkgray" }}>Hindi News U/A 7+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.newsheader_2} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Today's Spots News</h3>
          <p style={{ color: "white" }}>Hindi News U/A 7+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.newsheader_3} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Sikkim News</h3>
          <p style={{ color: "white" }}>Hindi News U/A 13+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.newsheader_4} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>CNBC Awaaz</h3>
          <p style={{ color: "white" }}>Hindi News U/A 7+</p>
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

export default NewsCarousel;
