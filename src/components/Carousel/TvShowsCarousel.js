import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Carousel.css";
import { ImagesUrl } from "../../Data/ImagesUrl";
import { Link } from "react-router-dom";
function TvShowsCarousel() {
  const totalSlides = 9;
  const interval = 3000;

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
            src={ImagesUrl.tvShowsheader_1}
            alt="headerimage"
          />
        </a>
        <div>
          <h3 style={{ color: "white" }}>KAALKOOT</h3>
          <p style={{ color: "darkgray" }}>Hindi Drama U/A 7+</p>
          <p style={{ color: "white" }}>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.tvShowsheader_2} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>GAME OF THRONES</h3>
          <p style={{ color: "white" }}>English Drama U/A 18+</p>
          <p style={{ color: "white" }}>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.tvShowsheader_3} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>BIG BOSS</h3>
          <p style={{ color: "white" }}>Hindi Drama U/A 13+</p>
          <p style={{ color: "white" }}>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </p>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.tvShowsheader_4} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>SUCCESION</h3>
          <p style={{ color: "white" }}></p>
          <p style={{ color: "white" }}>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </p>
        </div>
      </div>
    </Carousel>
  );
}

export default TvShowsCarousel;
