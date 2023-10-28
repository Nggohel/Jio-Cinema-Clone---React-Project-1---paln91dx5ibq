import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Carousel.css";
import { ImagesUrl } from "../../Data/ImagesUrl";
import { Link } from "react-router-dom";
function MovieCarousel() {
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
      showThumbs={false}
      showStatus={false}
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
            src={ImagesUrl.movieheader_1}
            alt="headerimage"
          />
        </a>
        <div>
          <h3 style={{ color: "white" }}>Bebbak</h3>
          <p style={{ color: "darkgray" }}>Hindi Movie U/A 7+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.movieheader_2} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>FAST X</h3>
          <p style={{ color: "white" }}>English Movie U/A 7+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.movieheader_3} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white" }}>BHEDIYA</h3>
          <p style={{ color: "white" }}>Hindi Thriller Movie U/A 13+</p>
          <Link to="/carouseldata">
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </Link>
        </div>
      </div>
      <div className="main-carouselimage">
        <a>
          <img className="" src={ImagesUrl.movieheader_4} alt="headerimage" />
        </a>
        <div>
          <h3 style={{ color: "white", fontSize: 35 }}>The NUN</h3>
          <p style={{ color: "white" }}>English Horror Movie U/A 7+</p>
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

export default MovieCarousel;
