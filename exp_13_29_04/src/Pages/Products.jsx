import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoginModal from "../Components/LoginModal";

import product1 from "../images/products1.jpeg";
import product2 from "../images/products2.jpg";
import product3 from "../images/products3.jpg";
import product4 from "../images/products4.jpg";
import product5 from "../images/products5.jpg";
import product6 from "../images/products6.jpeg";
import product7 from "../images/products7.jpeg";
import product8 from "../images/products8.jpg";


const Products = () => {
  return (
    <>
      <Navbar />
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-dark">
            <h1 className="display-4 fw-bolder">Our Products</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              Discover our premium selection of electronics and accessories
            </p>
          </div>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          {/* Headphones Section */}
          <h2 className="mb-4">Headphones</h2>
          <div className="row">
            {/* Product 1 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <div
                  className="badge bg-danger position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src={product1}
                  alt="Premium Headphones"
                />
                <div className="card-body">
                  <h5 className="card-title">Premium Headphones</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <span className="ms-1">(24)</span>
                  </div>
                  <p className="card-text">
                    Experience crystal clear sound with our premium noise-cancelling headphones.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="text-muted text-decoration-line-through">₹ 24999</span>
                      <span className="fw-bold ms-2">₹ 18999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product2}
                  alt="Wireless Earbuds"
                />
                <div className="card-body">
                  <h5 className="card-title">Wireless Earbuds</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <span className="ms-1">(18)</span>
                  </div>
                  <p className="card-text">
                    Enjoy music on the go with our comfortable wireless earbuds.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹ 8999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <div
                  className="badge bg-primary position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  New
                </div>
                <img
                  className="card-img-top"
                  src={product3}
                  alt="Gaming Headset"
                />
                <div className="card-body">
                  <h5 className="card-title">Gaming Headset</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="ms-1">(32)</span>
                  </div>
                  <p className="card-text">
                    Immerse yourself in gaming with our high-performance gaming headset.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹ 9999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product4}
                  alt="Studio Headphones"
                />
                <div className="card-body">
                  <h5 className="card-title">Studio Headphones</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <span className="ms-1">(12)</span>
                  </div>
                  <p className="card-text">
                    Professional-grade studio headphones for music production and mixing.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹ 29999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Watches Section */}
          <h2 className="mb-4 mt-5">Smart Watches</h2>
          <div className="row">
            {/* Product 5 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product5}
                  alt="Smart Watch Pro"
                />
                <div className="card-body">
                  <h5 className="card-title">Smart Watch Pro</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <span className="ms-1">(28)</span>
                  </div>
                  <p className="card-text">
                    Stay connected and track your fitness with our latest smart watch.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹ 12999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <div
                  className="badge bg-danger position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  Sale
                </div>
                <img
                  className="card-img-top"
                  src={product6}
                  alt="Fitness Tracker"
                />
                <div className="card-body">
                  <h5 className="card-title">Fitness Tracker</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-half text-warning"></i>
                    <span className="ms-1">(42)</span>
                  </div>
                  <p className="card-text">
                    Track your workouts, heart rate, and sleep with our advanced fitness tracker.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="text-muted text-decoration-line-through">₹ 25999</span>
                      <span className="fw-bold ms-2">₹ 18999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 7 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product7}
                  alt="Kids Smart Watch"
                />
                <div className="card-body">
                  <h5 className="card-title">Kids Smart Watch</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star text-warning"></i>
                    <span className="ms-1">(15)</span>
                  </div>
                  <p className="card-text">
                    Safe and fun smart watch designed specifically for children.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹ 2999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 8 */}
            <div className="col-md-4 col-lg-3 mb-4">
              <div className="card h-100">
                <div
                  className="badge bg-primary position-absolute"
                  style={{ top: "0.5rem", right: "0.5rem" }}
                >
                  New
                </div>
                <img
                  className="card-img-top"
                  src={product8}
                  alt="Premium Smart Watch"
                />
                <div className="card-body">
                  <h5 className="card-title">Premium Smart Watch</h5>
                  <div className="d-flex mb-2">
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <i className="bi bi-star-fill text-warning"></i>
                    <span className="ms-1">(8)</span>
                  </div>
                  <p className="card-text">
                    Luxury smart watch with premium materials and advanced health monitoring.
                  </p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <span className="fw-bold">₹ 36999</span>
                    </div>
                    <button className="btn btn-outline-primary">
                      <i className="bi bi-cart-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <LoginModal />
    </>
  );
};

export default Products;