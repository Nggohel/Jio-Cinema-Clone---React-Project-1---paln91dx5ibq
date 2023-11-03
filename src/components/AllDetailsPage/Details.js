import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/Details.css";
import { fetchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";

function Details() {
  const [data, setData] = useState([]);
  const { itemId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const getData = await fetchApiData(`${ApiUrl["ListShows"]}/${itemId}`);
      if (getData.status == "success") {
        setData(getData.data);
      } else {
        alert(getData.message);
      }
    })();
  }, [itemId]);

  const CheckToken = () => {
    const GetData = JSON.parse(localStorage.getItem("user-info"));
    if (GetData == null) {
      navigate("/login");
    } else {
      navigate(`/gettingvideo/${encodeURIComponent(data.video_url)}`);
    }
  };

  return (
    <>
      <div>
        {data && data?.thumbnail ? (
          <>
            <div
              className="image-container"
              style={{
                backgroundImage: `url(${data.thumbnail})`,
              }}
            >
              <div className="deatils-card-position">
                <div className="deatils-main">
                  {/* <Link
                    to={`/gettingvideo/${encodeURIComponent(data.video_url)}`}
                  > */}
                  <button className="details-button" onClick={CheckToken}>
                    Watch
                  </button>
                  {/* </Link> */}
                  <div className="details-data">
                    <h4>{data.title}</h4>

                    <span>duration</span>

                    <p className="details-data">
                      {data.description}
                      <span>{data.description}</span>
                    </p>
                  </div>
                  <div className="details-data details-data-cast">
                    <h5>Cast:</h5>
                    <p className="details-data-cast">{data.cast.join(", ")}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <span>Thumbnail not available</span>
        )}
      </div>
    </>
  );
}
export default Details;
