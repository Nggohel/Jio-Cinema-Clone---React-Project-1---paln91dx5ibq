import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { fetchApiData } from "../../../Api/Api";
import { ApiUrl } from "../../../Data/ApiUrl";
import Toaster from "../../../Assets/Toaster";
import { useDebounce } from "../../../Debounce";
import { srcValue } from "../JioCinemaNavBar";
// import useSearch from "../../../use-search";

function Searchpage() {
  const [data, setData] = useState([]);
  // const { searchValue: searchText } = useSearch();
  const [debouncedValue, setDebouncedValue] = useState();
  // const { query } = useParams();
  // console.log(searchText);
  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  const searchValue = useContext(srcValue);
  console.log(searchValue);
  const debouncedFetchData = useDebounce(searchValue, 1500);

  const searchData = async (value) => {
    const getData = await fetchApiData(
      `${ApiUrl["ListShows"]}?search={"title":"${value}"}`
    );
    console.log(getData);
    if (getData.status === "success") {
      setData(getData.data);
    } else {
    }
  };

  useEffect(() => {
    setDebouncedValue(debouncedFetchData);
  }, [searchValue]);

  useEffect(() => {
    if (searchValue) {
      searchData(debouncedValue);
    }
  }, [debouncedValue]);

  // useEffect(() => {
  //   console.log(searchText);
  // }, [searchText]);

  return (
    <>
      {searchValue == "" ? (
        ""
      ) : (
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
