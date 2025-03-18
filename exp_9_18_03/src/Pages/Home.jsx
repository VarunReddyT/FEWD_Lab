import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoginModal from "../Components/LoginModal";
import Weather from "../Components/Weather";

import product1 from "../images/product1.jpg";
import product2 from "../images/product2.jpg";
import product3 from "../images/product3.jpg";

const Home = () => {
  return (
    <>
      <Navbar />
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-dark">
            <h1 className="display-4 fw-bolder">Shop in Style</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              With our premium products and services
            </p>
          </div>
        </div>
      </header>
      <main className="">
        <div className="container">
          {/* Weather Section */}
          <div className="mb-5">
            <Weather />
          </div>

          {/* Featured Products Section */}
          <h2 className="text-center mb-4">Featured Products</h2>
          <div className="row">
            {/* Featured Product 1 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product1}
                  alt="Premium Headphones"
                />
                <div className="card-body">
                  <h5 className="card-title">Premium Headphones</h5>
                  <p className="card-text">
                    Experience crystal clear sound with our premium noise-cancelling
                    headphones.
                  </p>
                  <p className="fw-bold">₹ 9999</p>
                  <button className="btn btn-outline-primary cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Product 2 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product2}
                  alt="Smart Watch"
                />
                <div className="card-body">
                  <h5 className="card-title">Smart Watch</h5>
                  <p className="card-text">
                    Stay connected and track your fitness with our latest smart watch.
                  </p>
                  <p className="fw-bold">₹ 5999</p>
                  <button className="btn btn-outline-primary cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Featured Product 3 */}
            <div className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  className="card-img-top"
                  src={product3}
                  alt="Wireless Earbuds"
                />
                <div className="card-body">
                  <h5 className="card-title">Wireless Earbuds</h5>
                  <p className="card-text">
                    Enjoy music on the go with our comfortable wireless earbuds.
                  </p>
                  <p className="fw-bold">₹ 2999</p>
                  <button className="btn btn-outline-primary cart">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-4">
            <a href="/products" className="btn btn-primary">
              View All Products
            </a>
          </div>

          {/* Testimonials Section */}
          <section className="mt-5">
            <h2 className="text-center mb-4">What Our Customers Say</h2>
            <div className="row">
              {/* Testimonial 1 */}
              <div className="col-lg-4 mb-4">
                <div className="card h-100 p-3">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <p className="card-text">
                      "The quality of products from ShopEase is outstanding. I've been a
                      loyal customer for years!"
                    </p>
                    <p className="card-text fw-bold">- Sarah Johnson</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="col-lg-4 mb-4">
                <div className="card h-100 p-3">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                    </div>
                    <p className="card-text">
                      "Fast shipping and excellent customer service. I couldn't be happier
                      with my purchase!"
                    </p>
                    <p className="card-text fw-bold">- Michael Brown</p>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="col-lg-4 mb-4">
                <div className="card h-100 p-3">
                  <div className="card-body">
                    <div className="d-flex mb-3">
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-fill text-warning"></i>
                      <i className="bi bi-star-half text-warning"></i>
                    </div>
                    <p className="card-text">
                      "The product selection is amazing and the prices are very competitive.
                      Highly recommended!"
                    </p>
                    <p className="card-text fw-bold">- Emily Davis</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Newsletter Section */}
          <section className="bg-light p-4 mt-5 rounded">
            <div className="row align-items-center">
              <div className="col-md-6">
                <h3>Subscribe to Our Newsletter</h3>
                <p>
                  Get the latest updates, deals, and exclusive offers directly to your
                  inbox.
                </p>
              </div>
              <div className="col-md-6">
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <button className="btn btn-primary" type="button">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <LoginModal />
    </>
  );
};

export default Home;