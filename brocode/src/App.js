import React from "react";
import { Route, Routes } from "react-router-dom";

import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import "./index.css";


function App() {
  return (
    <>
        <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
        <Footer />
    </>
  );
}

export default App;
