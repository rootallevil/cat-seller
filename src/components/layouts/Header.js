import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">
      <h2>Purr Chase</h2>
      <ul>
        <li>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" style={linkStyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/cart" style={linkStyle}>
            Cart
          </Link>
        </li>
      </ul>
    </div>
  );
};

const linkStyle = {
  textDecoration: "none",
  color: "#fff"
};

export default Header;
