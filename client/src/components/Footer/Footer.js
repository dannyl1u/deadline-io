import React from "react";
import "./footer.scss";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import logosmall from "../../assets/logo/logo-sm.png";

export default function footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="footer-text">© Danny & Chantelle 2023. All rights reserved.</p>
          </div>
          <div className="footer-image">
            <img src={logosmall} alt="logo" className="footer-logo" />
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 footer-box">
            <ul className="social-icons">
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/dannyliu421/"
                  className="footer-icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                {" "}
                <a
                  href="https://www.linkedin.com/in/chantellepasceri/"
                  className="footer-icon"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                {" "}
                <a href="https://github.com/dannyl1u" className="footer-icon">
                  <FaGithub />
                </a>
              </li>
              <li>
                {" "}
             
                <a href="https://github.com/bella77-69" className="footer-icon">
                  <FaGithub />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
