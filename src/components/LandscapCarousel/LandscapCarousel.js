import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/LandscapCarousel.css";
import { fetchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";
import Toaster from "../../Assets/Toaster";

function LandscapCarousel({ category, title }) {
  const [data, setData] = useState([]);

  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    (async () => {
      const getData = await fetchApiData(
        `${ApiUrl["ListShows"]}?filter={"type": "${category}"}&limit=200`
      );
      if (getData.status == "success") {
        setData(getData.data);
      } else {
        setToast({
          status: "error",
          message: getData.message,
        });
      }
    })();
  }, [category]);

  return (
    <>
      <div className="landscapetitle">
        <h4> {title}</h4>
        <Link to="/Moredatalandscape">
          <button className="landscape-icon-button">
            view All
            <img
              loading="lazy"
              className="landscape-icon"
              src={LogoUrl.rightSideLogo}
            />
          </button>
        </Link>
      </div>

      <Carousel
        className="landscapecarousel"
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={23.2}
        emulateTouch={false}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Link to={`/details/${item._id}`}>
              <div className="landscape-img" key={index}>
                <img
                  loading="lazy"
                  src={item.thumbnail}
                  alt={`Image ${index}`}
                  style={{ width: "100%", height: "100%" }}
                />
              </div>
            </Link>
          ))
        ) : (
          <h2 style={{ color: "white" }}>Loading....</h2>
        )}
      </Carousel>
      {toast.status == "error" ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </>
  );
}

export default LandscapCarousel;
