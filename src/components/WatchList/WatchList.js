import React, { useState, useEffect, memo } from "react";
import { Link } from "react-router-dom";
import "../../styles/WatchList.css";
import Toaster from "../../Assets/Toaster";
import { watchListApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";

function WatchList() {
  const [data, setData] = useState([]);
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    (async () => {
      const getData = await watchListApiData(
        `${ApiUrl["Watchlist"]}`,
        userInfo
      );
      if (getData.status == "success") {
        setData(getData.data.shows);
      } else {
        setToast({
          status: "error",
          message: getData.message,
        });
      }
    })();
  }, []);

  return (
    <>
      <h4 style={{ color: "white", marginLeft: "2rem" }}>WatchList</h4>
      <div className="allportrait-card">
        {data?.length > 0 ? (
          data?.map((item, index) => (
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
      {toast.status == "success" ||
      toast.status == "error" ||
      toast.status == "workingOn" ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </>
  );
}

export default memo(WatchList);
