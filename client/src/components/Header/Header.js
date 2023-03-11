import React from "react";
import { Nav } from "react-bootstrap";
import logo from "../../assets/logo/logo.png";
import "./header.scss";

function Header(props) {
  return (
    <div className="header">
      <img
        className="nav-logo d-inline-block align-middle"
        width="auto"
        alt="logo-img"
        src={logo}
      />
      <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/jobs">Jobs</Nav.Link>
      <Nav.Link href="/companies">Companies</Nav.Link>
    </div>
  );
}

export default Header;
