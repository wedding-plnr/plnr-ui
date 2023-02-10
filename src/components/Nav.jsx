import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Login } from "./LoginButton";
import { SignIn } from "./SignInButton";
import "./css/Nav.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            WDNG-PLNNR
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>


            {/* <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About
              </Link>
            </li> */}


            <li className="nav-item">
              <Link to="/post" className="nav-links" onClick={closeMobileMenu}>
                Post
              </Link>
            </li>
            <li>
              <Link
                to="/sign-up"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                Sign Up
              </Link>
            </li>
          </ul>
          {button && <Login buttonStyle="btn--outline">Log In</Login>}
          {button && <SignIn buttonStyle="btn--outline">Sign Up</SignIn>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
