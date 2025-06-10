import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5>ShopEase</h5>
            <p>
              Your one-stop shop for premium electronics and accessories. We
              provide quality products at competitive prices.
            </p>
            <div className="d-flex gap-3">
              <a href="#" className="text-white">
                <i className="bi bi-facebook fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-twitter fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-instagram fs-4"></i>
              </a>
              <a href="#" className="text-white">
                <i className="bi bi-linkedin fs-4"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <Link to="/" className="text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5>Products</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-white">
                  Headphones
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Smart Watches
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Accessories
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-4">
            <h5>Contact Info</h5>
            <ul className="list-unstyled">
              <li>
                <i className="bi bi-geo-alt me-2"></i> 123 Commerce St, New York,
                NY 10001
              </li>
              <li>
                <i className="bi bi-telephone me-2"></i> (123) 456-7890
              </li>
              <li>
                <i className="bi bi-envelope me-2"></i> info@shopease.com
              </li>
              <li>
                <i className="bi bi-clock me-2"></i> Mon-Fri: 9AM-6PM, Sat:
                10AM-4PM
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-0">&copy; 2023 ShopEase. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <a href="#" className="text-white me-3">
              Privacy Policy
            </a>
            <a href="#" className="text-white me-3">
              Terms of Service
            </a>
            <a href="#" className="text-white">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;