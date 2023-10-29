import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
import "../../styles/MobileSearch.css";
import PotraitCarousel from "../PotraitCarousel/PotraitCarousel";
import AllData from "../AllDetailsPage/AllData";

function MobileSearchPage() {
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  // const arr = [
  //   { category: "movie", title: "Movie" },
  //   { category: "movie", title: "Movie" },
  // ];

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);

    if (searchValue.trim() !== "") {
      navigate(`/mobilesearch/${searchValue}`);
    } else {
      navigate(`/mobilesearch`);
    }
  };
  return (
    <>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search Here"
            className=" mr-sm-1 searchbar from"
            value={searchValue}
            onChange={handleSearchChange}
          />
        </Col>
      </Row>
      {/* {arr.map((item, index) => {
        <PotraitCarousel category={item.category} title={item.title} />;
      })} */}
      <AllData />
    </>
  );
}
export default MobileSearchPage;
