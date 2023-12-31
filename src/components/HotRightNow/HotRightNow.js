import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/HotRightNow.css";
function HotRightNow() {
  const [data, setData] = useState([]);
  const filterType = " short film";
  const carouselRef = useRef(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_GET_DATA_URL}?limit=11`,
          {
            method: "GET",
            headers: {
              projectID: "paln91dx5ibq",
            },
          }
        );
        const json = await response.json();
        console.log(json.data);
        setData(json.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="hotrightnow-title">
        <h4>Trending</h4>
      </div>

      <Carousel
        className="hotrightnow "
        showArrows={true} // Show navigation arrows
        showStatus={false} // Hide status indicator
        showThumbs={false} // Hide thumbnail images
        infiniteLoop={true} // Enable infinite loop
        centerMode={true} // Center the current slide
        centerSlidePercentage={21}
        emulateTouch={false}
      >
        {data.length > 0 ? (
          data.map((item, index) => (
            <Link to={`/details/${item._id}`}>
              <div className="hotrightnowimg" key={index}>
                <img
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
    </>
  );
}

export default HotRightNow;
