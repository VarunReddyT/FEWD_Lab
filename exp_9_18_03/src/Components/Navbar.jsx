import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-warning sticky-top">
      <div className="container">
        <Link className="navbar-brand text-black" to="/">
          ShopEase
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active text-black" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/partners">
                Partners
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-black" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <button
              className="btn btn-outline-secondary text-black"
              data-bs-toggle="modal"
              data-bs-target="#loginModal"
            >
              <i className="bi bi-person-fill me-1 text-black"></i>Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;