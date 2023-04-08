import React from "react";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import "./components/css/App.css";
import Home from "./components/pages/Home";
import SignUpForm from "./components/pages/SignUp";
import LogInForm from './components/pages/Login';
import Discover from "./components/pages/Discovery";
import Create from './components/pages/Create';
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
          <Route path='/discover' element={<Discover/>} />
          <Route path='/create' element={<Create/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
