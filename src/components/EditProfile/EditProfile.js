import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "../../styles/EditProfile.css";
import { Link, useNavigate } from "react-router-dom";
import { patchApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";
import Toaster from "../../Assets/Toaster";

function EditProfile() {
  const [name, setName] = useState("");

  const [address, setAddress] = useState("");

  const [number, setNumber] = useState("");

  const [profileImageFile, setProfileImageFile] = useState(null);

  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  const [isAlert, setIsAlert] = useState(false);

  const navigate = useNavigate();

  const JiocinemaEdit = async () => {
    const GetData = JSON.parse(localStorage.getItem("user-info"));
    let item = {
      name: name,
      email: GetData.data.email,
      address: [{ street: address }],
    };

    const getUpdatedData = await patchApiData(
      `${ApiUrl["EditProfile"]}`,
      item,
      GetData
    );
    if (getUpdatedData.status == "success") {
      setToast({
        status: "success",
        message: "Your newData is Updated!!!",
      });
      setIsAlert(true);
      setName("");
      setNumber("");
      setAddress("");
      GetData.data.name = getUpdatedData.data.user.name;
      localStorage.setItem("user-info", JSON.stringify(GetData));
      setTimeout(() => {
        navigate("/foryou");
      }, 1200);
      document.body.style.overflowY = "scroll";
      document.body.style.overflowX = "hidden";
    } else {
      setIsAlert(true);
      setToast({
        status: "error",
        message: getUpdatedData.message,
      });
    }
  };

  async function handleProfileImageUpdate() {
    setIsAlert(true);
    setToast({
      status: "workingOn",
      message: "currently working on this Phase !",
    });
  }

  return ReactDOM.createPortal(
    <>
      <div className="editprofile-page">
        <div className="editprofile">
          <Link to="/back">
            <button className="editprofile-button">
              <img
                loading="lazy"
                src={LogoUrl.backarrowLogo}
                className="editprofile-button-image"
              />
            </button>
          </Link>
          <h4 style={{ color: "white" }}>Edit Profile</h4>
        </div>
        <div className="editprofile-form">
          <div className="edit-image">
            <img
              loading="lazy"
              src={LogoUrl.avtarLogo}
              width="65"
              height="65"
              alt="User Avatar"
              onClick={handleProfileImageUpdate}
            />
            <br></br>
            <input
              type="file"
              // accept=".png, .jpg, .jpeg ,.webp"
              onClick={handleProfileImageUpdate}
            />
          </div>
          <p className="editprofile-number">
            <label className="editprofile-number-lable">Name</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Name"
              className="editprofile-number-input"
              onChange={(e) => {
                setIsAlert(false), setName(e.target.value);
              }}
              value={name}
            />
            <br></br>
            <label className="editprofile-number-lable">Address</label>
            <br></br>
            <input
              type="text"
              placeholder="Enter Your Address"
              className="editprofile-number-input"
              onChange={(e) => {
                setIsAlert(false), setAddress(e.target.value);
              }}
              value={address}
            />
            <br></br>
            <label className="editprofile-number-lable">Number</label>
            <br></br>
            <input
              type="phone"
              placeholder="Enter Your Number"
              className="editprofile-number-input"
              onChange={(e) => {
                setIsAlert(false), setNumber(e.target.value);
              }}
              value={number}
            />
          </p>
        </div>
        <button className="editprofile-continue-btn" onClick={JiocinemaEdit}>
          Save
        </button>
      </div>
      {(toast.status == "success" ||
        toast.status == "error" ||
        toast.status == "workingOn") &&
      isAlert ? (
        <Toaster status={toast.status} message={toast.message} />
      ) : (
        ""
      )}
    </>,
    document.getElementById("editprofile")
  );
}

export default EditProfile;
