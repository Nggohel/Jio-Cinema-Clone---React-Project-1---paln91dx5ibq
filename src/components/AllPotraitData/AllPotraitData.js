import React, { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/AllPotraitData.css";
import { fetchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";
import Toaster from "../../Assets/Toaster";

function AllPotraitData() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const { itemcategery } = useParams();
  const { itemtitle } = useParams();
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    // iife function
    (async () => {
      const getData = await fetchApiData(
        `${ApiUrl["ListShows"]}?filter={"type": "${itemcategery}"}&page=${page}&limit=20`
      );
      if (getData.status == "success") {
        setData((prev) => [...prev, ...getData.data]);
      } else {
        setToast({
          status: "error",
          message: getData.message,
        });
      }
    })();
  }, [page]);

  const handelInfiniteScroll = async () => {
    // console.log("scrollHeight" + document.documentElement.scrollHeight);
    // console.log("innerHeight" + window.innerHeight);
    // console.log("scrollTop" + document.documentElement.scrollTop);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 10 >=
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
      <div className="allportrait-title">
        <Link to="/backtohome">
          <button className="allportrait-button">
            <img
              loading="lazy"
              className="allportrait-icon"
              src={LogoUrl.leftSideArrowLogo}
            />
          </button>
        </Link>
        <h4 className="allportrait-name">All {itemtitle}.... </h4>
      </div>

      <div className="allportrait-card">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="allportrait-data" key={index}>
              <Link to={`/details/${item._id}`}>
                <img
                  loading="lazy"
                  className="allportrait-img"
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
      {toast.status == "error" ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </>
  );
}

export default memo(AllPotraitData);
