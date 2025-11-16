import React, { useState } from "react";
import { LOGO_URL } from "../utils/constants.js";

const Header = () => {
  const [login, setLogin] = useState(false);

  const handleLoginLogout = () => {
    setLogin(!login);
  };
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              handleLoginLogout();
            }}
          >
            {login ? "Logout" : "Login"}
          </button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
