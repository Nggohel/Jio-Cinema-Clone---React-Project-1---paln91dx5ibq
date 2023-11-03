import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../../styles/Login.css";
import { postApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";
import { notify } from "../../Assets/Toaster";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const JiocinemaLogin = async () => {
    let item = { email: email, password: password, appType: "ott" };

    const getLoginData = await postApiData(`${ApiUrl["Login"]}`, item);

    if (getLoginData.status === "success") {
      notify("You are Logging in Successfully!", "success");
      localStorage.setItem("user-info", JSON.stringify(getLoginData));
      setEmail("");
      setPassword("");
      setTimeout(() => {
        navigate("/foryou");
      }, 1200);
      document.body.style.overflowY = "scroll";
      document.body.style.overflowX = "hidden";
    } else {
      notify(getLoginData.message, "error");
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="login-number-input"
            onChange={(e) => setPassword(e.target.value)}
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ zIndex: 9999 }}
      />
    </>,
    document.getElementById("login-page")
  );
}
export default Login;
