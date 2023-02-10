import React from "react";
import "./css/App.css";
import { Login } from "./LoginButton";
import { SignIn } from "./SignInButton";
import About from "./About";
import "./css/Hero.css";

function Hero() {
  return (
    <div className="main">
      <div className="hero-container">
        <h1>Plan Your Perfect Day</h1>
        <div className="hero-btns">
          <Login
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            Log In
          </Login>
          <SignIn
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            Sign Up
          </SignIn>
        </div>

      </div>
        <div className="block">
          <About></About>
        </div>
    </div>
  );
}

export default Hero;
