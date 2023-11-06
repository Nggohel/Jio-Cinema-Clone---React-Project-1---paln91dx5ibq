import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../../styles/PotraitCarousel.css";
import { fetchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";
import Toaster from "../../Assets/Toaster";

function PotraitCarousel({ category, title }) {
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
      <div className="potraittitle">
        <h4>{title}</h4>

        <Link to={`/Moredatapotrait/${category}/${title}`}>
          <button className="potrait-icon-button">
            view All
            <img className="potrait-icon" src={LogoUrl.rightSideLogo} />
          </button>
        </Link>
      </div>

      <Carousel
        className="portraitcarousel"
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={15}
        emulateTouch={false}
      >
        {data?.length > 0 ? (
          data?.map((item, index) => (
            <Link to={`/details/${item._id}`}>
              <div className="potraitsimg" key={index}>
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
          <h5 style={{ color: "white" }}>Loading....</h5>
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

export default memo(PotraitCarousel);
