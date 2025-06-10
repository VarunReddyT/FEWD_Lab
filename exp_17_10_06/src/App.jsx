import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Contact from "./Pages/EmailForm";
import Gallery from "./Pages/Gallery";
import Partners from "./Pages/Partners";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import LoginModal from "./Components/LoginModal";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <LoginModal />
    </Router>
  );
}

export default App;