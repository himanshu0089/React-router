import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { Link } from "react-router-dom";

function Refer() {
  return (
    <div>
      <h2>Refer</h2>
      <nav>
        <Link to="Home">Home</Link> ||
        <Link to='About'>About</Link>
      </nav>
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path='About' element={<About />} />
      </Routes>
    </div>
  );
}

export default Refer;
