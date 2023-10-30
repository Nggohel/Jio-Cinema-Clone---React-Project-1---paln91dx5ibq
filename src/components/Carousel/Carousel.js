import React, { useState, useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Carousel.css";
import { ImagesUrl } from "../../Data/ImagesUrl";
import { Link } from "react-router-dom";

function CarouselCard() {
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
    <>
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
        useKeyboardArrows={true}
        onChange={(index) => setCurrentIndex(index)}
      >
        <div className="main-carouselimage">
          <a>
            <img
              className="main-img"
              src={ImagesUrl.header_1}
              alt="headerimage"
            />
          </a>
          <div>
            <h3 style={{ color: "white" }}>MEIN, MEHMOOD</h3>
            <p style={{ color: "darkgray" }}>Hindi Drama U/A 7+</p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a></a>
          <img className="" src={ImagesUrl.header_2} alt="headerimage" />
          <div>
            <h3 style={{ color: "white" }}>Sautrashtra vs RestofIndia</h3>
            <p style={{ color: "white" }}></p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_3} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Rat In The Kitchen</h3>
            <p style={{ color: "white" }}>Hindi Thriller U/A 13+</p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_4} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>FC Goa 1-0 Punjab FC</h3>
            <p style={{ color: "white" }}></p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_5} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Shark tank</h3>
            <p style={{ color: "white" }}>English Reality U/A 7+</p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_6} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Peacock Hub</h3>
            <p style={{ color: "white" }}></p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_7} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Aakashvani-Oct 3</h3>
            <p style={{ color: "white" }}></p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_8} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Udaariyaan</h3>
            <p style={{ color: "white" }}>Hindi Drama U/A 13+</p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_9} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Top Goals ft.Boumous</h3>
            <p style={{ color: "white" }}></p>
            <Link to="/carouseldata">
              <Button variant="primary" className="watchbutton">
                WATCH
              </Button>
            </Link>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default CarouselCard;
