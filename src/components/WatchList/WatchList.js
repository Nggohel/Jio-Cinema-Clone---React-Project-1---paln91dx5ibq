import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/WatchList.css";
function WatchList() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const userInfo = JSON.parse(localStorage.getItem("user-info"));

        const Header = {
          Authorization: `Bearer ${userInfo.token}`,
          projectID: "paln91dx5ibq",
        };

        const response = await fetch(`${process.env.REACT_APP_WATCHLIST_URL}`, {
          method: "GET",
          headers: Header,
        });

        const json = await response.json();
        setData(json.data.shows);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData(data);
  }, []);

  console.log(data);

  return (
    <>
      <h4 style={{ color: "white", marginLeft: "2rem" }}>WatchList</h4>
      <div className="allportrait-card">
        {data.length > 0 ? (
          data?.map((item, index) => (
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

export default WatchList;
