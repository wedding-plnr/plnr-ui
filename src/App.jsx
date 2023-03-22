import React from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import "./components/css/App.css";
import Home from "./components/pages/Home";
import SignUpForm from "./components/pages/SignUp";
import LogInForm from './components/pages/Login';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/sign-up' element={<SignUpForm/>} />
          <Route path='/login' element={<LogInForm/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
