import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import "../../styles/LoginPage.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { LogoUrl } from "../../Data/LogoUrl";
function LoginPage() {
  const [isCardMoved, setIsCardMoved] = useState(false);

  const handleLoginClick = () => {
    setIsCardMoved(!isCardMoved);
  };

  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  console.log(userInfo);
  const username =
    userInfo && userInfo.data.name ? userInfo.data.name : "Guest";
  const email = userInfo && userInfo.data.email ? userInfo.data.email : "";

  const handleLogout = () => {
    localStorage.removeItem("user-info");
    navigate("/foryou");
    setIsCardMoved(!isCardMoved);
    document.body.style.overflow = "scroll";
  };

  const navigate = useNavigate();

  return (
    <Card className={`loginpagelayout ${isCardMoved ? "moved" : ""}`}>
      <div className="parentcard">
        <div className="carddiv">
          <Image
            src={LogoUrl.avtarLogo}
            width="65"
            height="65"
            roundedCircle
            alt="User Avatar"
            className="ml-2 img"
          />
          <Card style={{ width: "18rem" }} className="mb-2 subcard">
            <Card.Body>
              <Card.Title className="title">{username}</Card.Title>

              {!userInfo ? (
                <>
                  <Link to="/login">
                    <Button
                      variant="primary"
                      className="button"
                      onClick={handleLoginClick}
                    >
                      Login
                    </Button>
                  </Link>
                  <Link to="/singup">
                    <Button
                      variant="primary"
                      className="button"
                      onClick={handleLoginClick}
                    >
                      SingUp
                    </Button>
                  </Link>
                </>
              ) : (
                <Card.Title className="login-email">{email}</Card.Title>
              )}
              <Card.Body className="innercard">
                <Image
                  src={LogoUrl.avtarLogo}
                  width="35"
                  height="35"
                  roundedCircle
                  alt="User Avatar"
                  className=""
                />
                <span className="cardspan">Kids</span>
              </Card.Body>
            </Card.Body>
          </Card>
        </div>
        {userInfo ? (
          <>
            <div className="editprofile">
              <Link to="/editprofile">
                <h6 onClick={handleLoginClick}>Edit Profile</h6>
              </Link>
            </div>
            <Link to="/subscribe">
              <h6>Subcribe Now!</h6>
            </Link>
            <Link to="/watchlist">
              <h6 onClick={handleLoginClick}>My WatchList!</h6>
            </Link>
            <h6>Setting</h6>
          </>
        ) : (
          <>
            <hr class="solid"></hr>
            <h6>Subcribe Now!</h6>
          </>
        )}
        <hr class="solid"></hr>
        <h6>Help & Legal</h6>
        {userInfo ? (
          <>
            <h6 className="" onClick={handleLogout}>
              LogOut!!
            </h6>
          </>
        ) : (
          ""
        )}
        <div className="footer">
          <a href="https://help.jiocinema.com/">
            <h8 className="underline-pink">Privacy and T&C</h8>
          </a>
          <br />
          <h8 className="text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h8>
        </div>
      </div>
    </Card>
  );
}

export default LoginPage;
