import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import Toaster from "../../Assets/Toaster";
import "../../styles/Login.css";
import { postApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const [toast, setToast] = useState({
    status: "",
    message: "",
  });

  const [isAlert, setIsAlert] = useState(false);

  const JiocinemaLogin = async () => {
    let item = { email: email, password: password, appType: "ott" };

    const getLoginData = await postApiData(`${ApiUrl["Login"]}`, item);

    if (getLoginData.status === "success") {
      setToast({
        status: "success",
        message: "You are Logging in Successfully!",
      });
      localStorage.setItem("user-info", JSON.stringify(getLoginData));
      setIsAlert(true);
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/foryou");
      }, 1000);
      document.body.style.overflowY = "scroll";
      document.body.style.overflowX = "hidden";
    } else {
      setIsAlert(true);
      setToast({
        status: "error",
        message: getLoginData.message,
      });
    }
  };

  return ReactDOM.createPortal(
    <>
      <div className="login-page">
        <div className="login">
          <Link to="/back">
            <button className="login-button">
              <img src={LogoUrl.backarrowLogo} className="login-button-image" />
            </button>
          </Link>
          <h4 style={{ color: "white" }}>Login to continue</h4>
        </div>

        <p className="login-number">
          <input
            type="email"
            placeholder="Enter Your Email Id"
            className="login-number-input"
            onChange={(e) => {
              setIsAlert(false), setEmail(e.target.value);
            }}
            value={email}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="login-number-input"
            onChange={(e) => {
              setIsAlert(false), setPassword(e.target.value);
            }}
            value={password}
          />
        </p>
        <button className="login-continue-btn" onClick={JiocinemaLogin}>
          Continue
        </button>
        <p className="login-para">
          By continuing you agree to our
          <span className="logindetails">Terms of Use</span> and
          <p className="login-para">
            acknowledge that you have read our
            <a href="https://help.jiocinema.com/">
              <span className="logindetails">Privacy Policy</span>.
            </a>
          </p>
        </p>
      </div>
      {/* toast.status == "success" ||
      toast.status == "error" ||
      toast.status == "workingOn" */}
      {isAlert ? <Toaster status={toast.status} message={toast.message} /> : ""}
    </>,
    document.getElementById("login-page")
  );
}
export default Login;
