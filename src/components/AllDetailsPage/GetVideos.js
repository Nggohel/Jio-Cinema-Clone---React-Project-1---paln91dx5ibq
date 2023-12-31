import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import "../../styles/GetVideos.css";
import { patchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import Toaster from "../../Assets/Toaster";

function GetVideos() {
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  const { video_url } = useParams();
  const decodedUrl = decodeURIComponent(video_url);
  const videoRef = useRef(null);

  const id = decodedUrl.split("/").pop().split(".")[0];

  const addToWatchlist = async () => {
    const GetData = JSON.parse(localStorage.getItem("user-info"));
    let item = { showId: id };
    const getUpdatedData = await patchApiData(
      `${ApiUrl["Watchlist"]}`,
      item,
      GetData
    );

    if (getUpdatedData.status == "success") {
      setToast({
        status: "success",
        message: getUpdatedData.message,
      });
    } else {
      setToast({
        status: "error",
        message: getUpdatedData.message,
      });
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
      <div className="getvideos">
        <button className="getvideosbtn" onClick={addToWatchlist}>
          Add to Watchlist
        </button>
      </div>
      {toast.status == "success" || toast.status == "error" ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </>
  );
}
export default GetVideos;
