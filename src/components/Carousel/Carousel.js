import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Button from "react-bootstrap/Button";
import { Carousel } from "react-responsive-carousel";
import "../../styles/Carousel.css";
import { ImagesUrl } from "../../Data/ImagesUrl";
import { Link } from "react-router-dom";

function CarouselCard() {
  return (
    <>
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
            <h3 style={{ color: "white", fontSize: 35 }}>
              Sautrashtra vs RestofIndia
            </h3>
            <p style={{ color: "white" }}></p>

            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_3} alt="headerimage" />
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
            <img className="" src={ImagesUrl.header_4} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white", fontSize: 35 }}>
              FC Goa 1-0 Punjab FC
            </h3>
            <p style={{ color: "white" }}></p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_5} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Shark tank</h3>
            <p style={{ color: "white" }}>English Reality U/A 7+</p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_6} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white", fontSize: 35 }}>Peacock Hub</h3>
            <p style={{ color: "white" }}></p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_7} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Aakashvani-Oct 3</h3>
            <p style={{ color: "white" }}></p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_8} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white" }}>Udaariyaan</h3>
            <p style={{ color: "white" }}>Hindi Drama U/A 13+</p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </div>
        </div>
        <div className="main-carouselimage">
          <a>
            <img className="" src={ImagesUrl.header_9} alt="headerimage" />
          </a>
          <div>
            <h3 style={{ color: "white", fontSize: 35 }}>
              Top Goals ft.Boumous
            </h3>
            <p style={{ color: "white" }}></p>
            <Button variant="primary" className="watchbutton">
              WATCH
            </Button>
          </div>
        </div>
      </Carousel>
    </>
  );
}

export default CarouselCard;
