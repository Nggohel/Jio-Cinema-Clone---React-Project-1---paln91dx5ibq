import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../../styles/AllPotraitData.css";
import { fetchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";

function AllData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      const getData = await fetchApiData(`${ApiUrl["ListShows"]}?limit=1000`);
      if (getData.status == "success") {
        setData(getData.data);
      } else {
        alert(getData.message);
      }
    })();
  }, []);

  return (
    <>
      <div className="potraittitle">
        <h5 style={{ color: "grey" }}>
          currently working..Here some more options to watch...
        </h5>
      </div>

      <div className="allportrait-card">
        {data.length > 0 ? (
          data.map((item, index) => (
            <div className="allportrait-data" key={index}>
              <Link to={`/details/${item._id}`}>
                <img
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
    </>
  );
}
export default AllData;