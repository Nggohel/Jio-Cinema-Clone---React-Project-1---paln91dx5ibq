import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/AllLandsacpeData.css";
import { fetchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";
function AllLandscapeData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const getData = await fetchApiData(
        `${ApiUrl["ListShows"]}?page=${page}&limit=20`
      );
      if (getData.status == "success") {
        setData((prev) => [...prev, ...getData.data]);
      } else {
        alert(getData.message);
      }
    })();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 <=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handelInfiniteScroll);
    return () => window.removeEventListener("scroll", handelInfiniteScroll);
  }, []);

  return (
    <>
      <div className="alllandscape-title">
        <Link to="/back">
          <button className="alllandscape-button">
            <img
              className="alllandscape-icon"
              src={LogoUrl.leftSideArrowLogo}
            />
          </button>
        </Link>
        <h4 className="alllandscape-name">All Options....</h4>
      </div>

      <div className="alllandscape-card">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="alllandscape-data" key={index}>
              <Link to={`/details/${item._id}`}>
                <img
                  className="alllandscape-img"
                  src={item.thumbnail}
                  alt={`Image ${index}`}
                />
              </Link>
            </div>
          ))
        ) : (
          <h2 style={{ color: "white" }}>Loading....</h2>
        )}
      </div>
    </>
  );
}

export default AllLandscapeData;
