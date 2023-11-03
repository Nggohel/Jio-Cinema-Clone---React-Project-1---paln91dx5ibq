import React, { useState, useEffect } from "react";
import AllData from "../../AllDetailsPage/AllData";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { fetchApiData } from "../../../Api/Api";
import { ApiUrl } from "../../../Data/ApiUrl";
import Toaster from "../../../Assets/Toaster";

function Searchpage() {
  const [data, setData] = useState([]);
  const { query } = useParams();
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  useEffect(() => {
    (async () => {
      const getData = await fetchApiData(
        `${ApiUrl["ListShows"]}?search={"keywords":"${query}"}`
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
  }, [query]);

  return (
    <>
      {query.trim() === "" ? (
        <AllData />
      ) : (
        <div className="allportrait-card">
          {data.length > 0 ? (
            data?.map((item, index) => (
              <div className="allportrait-data" key={index}>
                {console.log("item._id:", item._id)}
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
            <p>No results found</p>
          )}
        </div>
      )}
      {toast.status == "error" ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </>
  );
}
export default Searchpage;
