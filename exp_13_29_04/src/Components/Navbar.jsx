import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import LoginModal from "./LoginModal";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const modalRef = useRef(null);
  const modalInstanceRef = useRef(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedInUser = localStorage.getItem('currentUser');
    if (loggedInUser) {
      setIsLoggedIn(true);
      setCurrentUser(JSON.parse(loggedInUser));
    }

    // Initialize modal
    if (modalRef.current && !modalInstanceRef.current) {
      modalInstanceRef.current = new window.bootstrap.Modal(modalRef.current, {
        backdrop: true,
        keyboard: true
      });
    }

    return () => {
      if (modalInstanceRef.current) {
        modalInstanceRef.current.dispose();
        modalInstanceRef.current = null;
      }
    };
  }, []);

  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setCurrentUser(user);
    localStorage.setItem('currentUser', JSON.stringify(user));
    if (modalInstanceRef.current) {
      modalInstanceRef.current.hide();
      removeBackdrop();
    }
  };

  const removeBackdrop = () => {
    const backdrops = document.getElementsByClassName('modal-backdrop');
    if (backdrops.length > 0) {
      document.body.removeChild(backdrops[0]);
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
  };

  return (
    <>
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
            <div className="d-flex align-items-center">
              {isLoggedIn ? (
                <>
                  <span className="me-3 text-black">Welcome, {currentUser?.email}</span>
                  <button
                    className="btn btn-danger text-black"
                    onClick={handleLogout}
                  >
                    <i className="bi bi-box-arrow-right me-1"></i> Logout
                  </button>
                </>
              ) : (
                <button
                  className="btn btn-primary text-black"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  <i className="bi bi-person-fill me-1"></i> Login
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
      <LoginModal 
        ref={modalRef}
        onLoginSuccess={handleLoginSuccess} 
      />
    </>
  );
};

export default Navbar;