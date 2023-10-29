import React from "react";
import "../../styles/JiocinemaFooter.css";
import { Link } from "react-router-dom";
import { LogoUrl } from "../../Data/LogoUrl";

function JiocinemaFooter() {
  return (
    <>
      <div className="jiocinema-footer">
        <div className="left-side-footer">
          <div>
            <h6>jiocinema</h6>
            <div className="footer-span">
              <Link to="/foryou">
                <span>For You</span>
              </Link>
              <br />
              <Link to="/sport">
                <span>Sport</span>
              </Link>
              <br />
              <Link to="/movies">
                <span>Movie</span>
              </Link>
              <br />
              <Link to="/tvshow">
                <span>Tv Show</span>
              </Link>
              <br />
            </div>
          </div>
          <div>
            <h6>Support</h6>
            <div className="footer-span">
              <span>Help Center</span>
              <br />
              <span>Terms of Use</span>
              <br />
              <span>Privacy Policy</span>
              <br />
              <span>content complaints</span>
              <br />
            </div>
          </div>
        </div>
        <hr className="footer-hr"></hr>
        <div className="right-side-footer">
          <div className="footer-connect">
            <h4>Connect With Us</h4>
            <button className="footer-connect-button">
              <a href="https://www.facebook.com">
                <img loading="lazy" src={LogoUrl.facebookLogo} />
              </a>
            </button>
            <button className="footer-connect-button">
              <a href="https://www.twitter.com">
                <img loading="lazy" src={LogoUrl.twitterLogo} />
              </a>
            </button>
            <button className="footer-connect-button">
              <a href="https://www.instagram.com">
                <img loading="lazy" src={LogoUrl.instagramLogo} />
              </a>
            </button>
            <button className="footer-connect-button">
              <a href="https://www.youtube.com">
                <img loading="lazy" src={LogoUrl.youtubeLogo} />
              </a>
            </button>
          </div>
          <div className="footer-download">
            <h4>Download the App</h4>
            <div>
              <button className="footer-button-playstore">
                <a href="https://play.google.com/">
                  <img
                    loading="lazy"
                    src={LogoUrl.googleplayLogo}
                    style={{ height: "100%", width: "100%" }}
                  />
                </a>
              </button>
              <button className="footer-button-appstore">
                <a href="https://www.apple.com">
                  <img
                    loading="lazy"
                    src={LogoUrl.applestoreLogo}
                    style={{ height: "100%", width: "100%" }}
                  />
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="lower-footer">
        <p>Copyright © 2023 Viacom18 Media PVT LTD.All rights reserved.</p>
        <a href="https://www.jio.com">
          <img
            loading="lazy"
            src={LogoUrl.jioCinemaLogo}
            className="lower-footer-img"
          />
        </a>
      </div>
    </>
  );
}
export default JiocinemaFooter;
