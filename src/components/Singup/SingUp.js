import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-toastify/dist/ReactToastify.min.css";
import "../../styles/SingUp.css";
import { Link, useNavigate } from "react-router-dom";
import { postApiData } from "../../Api/Api";
import { ApiUrl } from "../../Data/ApiUrl";
import { LogoUrl } from "../../Data/LogoUrl";
import { notify } from "../../Assets/Toaster";

function SingUp() {
  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const JiocinemaSingUP = async () => {
    let item = {
      name: name,
      email: email,
      password: password,
      appType: "ott",
    };

    const getSingUPData = await postApiData(`${ApiUrl["Signup"]}`, item);

    if (getSingUPData.status == "success") {
      notify(" Welcome! You are SignUp in Successfully!", "success");
      setName("");
      setEmail("");
      setPassword("");
      navigate("/login");
    } else {
      notify(getSingUPData.message, "error");
    }
    localStorage.setItem("user-info", JSON.stringify(getSingUPData));
  };

  return ReactDOM.createPortal(
    <>
      <div className="singup-page">
        <div className="singup">
          <Link to="/back">
            <button className="singup-button">
              <img
                src={LogoUrl.backarrowLogo}
                className="singup-button-image"
              />
            </button>
          </Link>
          <h4 style={{ color: "white" }}>SingUp to continue</h4>
        </div>

        <p className="singup-number">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="singup-number-input"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <br></br>
          <input
            type="email"
            placeholder="Enter Your Email Id"
            className="singup-number-input"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <br></br>
          <input
            type="password"
            placeholder="Enter Your Password"
            className="singup-number-input"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </p>
        <button className="singup-continue-btn" onClick={JiocinemaSingUP}>
          Continue
        </button>
        <p className="singup-para">
          By continuing you agree to our
          <span className="singupdetails">Terms of Use</span> and
          <p className="singup-para">
            acknowledge that you have read our
            <a href="https://help.jiocinema.com/">
              <span className="singupdetails">Privacy Policy</span>.
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
    document.getElementById("sing-up")
  );
}

export default SingUp;
