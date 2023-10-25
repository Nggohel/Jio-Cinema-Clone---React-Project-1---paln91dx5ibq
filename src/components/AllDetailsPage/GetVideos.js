import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/GetVideos.css";

function GetVideos() {
  const { video_url } = useParams();
  const decodedUrl = decodeURIComponent(video_url);
  const videoRef = useRef(null);

  const id = decodedUrl.split("/").pop().split(".")[0];

  console.log(id);

  const addToWatchlist = async () => {
    try {
      let item = { showId: id };

      const userInfo = JSON.parse(localStorage.getItem("user-info"));
      // console.log(userInfo.token);

      const Header = {
        Authorization: `Bearer ${userInfo.token}`,
        projectID: "paln91dx5ibq",
      };
      // const url = ${process.env.REACT_APP_WATCHLIST_URL}
      let addData = await fetch(
        "https://academics.newtonschool.co/api/v1/ott/watchlist/like",
        {
          method: "PATCH",
          headers: Header,
          body: JSON.stringify(item),
        }
      );

      let response = await addData.json();
      console.log(response);
      console.log(response.data.shows);
      if (response.status == "success") {
        alert(response.message);
      } else {
        alert(response.message);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <video
        className="video"
        ref={videoRef}
        src={decodedUrl}
        controls
        style={{ maxWidth: "100%" }}
      ></video>
      <div
        className="getvideos"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <button className="getvideosbtn" onClick={addToWatchlist}>
          Add to Watchlist
        </button>
      </div>
    </>
  );
}
export default GetVideos;
