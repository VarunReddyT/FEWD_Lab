import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoginModal from "../Components/LoginModal";

import partner1 from "../images/partner1.jpeg";
import partner2 from "../images/partner2.jpeg";
import partner3 from "../images/partner3.png";
import partner4 from "../images/partner4.jpeg";
import partner5 from "../images/partner5.jpeg";
import partner6 from "../images/partner6.png";

const Partners = () => {
  return (
    <>
      <Navbar />
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-dark">
            <h1 className="display-4 fw-bolder">Our Partners</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              Meet the brands and companies we work with
            </p>
          </div>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          {/* Featured Partners Section */}
          <section className="mb-5">
            <h2 className="text-center mb-5">Featured Partners</h2>
            <div className="row row-cols-2 row-cols-md-3 row-cols-lg-6 g-4 justify-content-center">
              {/* Partner 1 */}
              <div className="col text-center">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center justify-content-center p-4">
                    <img
                      src={partner1}
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Partner 2 */}
              <div className="col text-center">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center justify-content-center p-4">
                    <img
                      src={partner2}
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Partner 3 */}
              <div className="col text-center">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center justify-content-center p-4">
                    <img
                      src={partner3}
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Partner 4 */}
              <div className="col text-center">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center justify-content-center p-4">
                    <img
                      src={partner4}
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Partner 5 */}
              <div className="col text-center">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center justify-content-center p-4">
                    <img
                      src={partner5}
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>

              {/* Partner 6 */}
              <div className="col text-center">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body d-flex align-items-center justify-content-center p-4">
                    <img
                      src={partner6}
                      alt="Partner Logo"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partner Categories Section */}
          <section className="mb-5">
            <h2 className="text-center mb-5">Our Partner Categories</h2>
            <div className="row g-4">
              {/* Audio Manufacturers */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-headset text-primary" style={{ fontSize: "3rem" }}></i>
                    <h3 className="mt-3 mb-3">Audio Manufacturers</h3>
                    <p>
                      We partner with leading audio equipment manufacturers to bring you the
                      best headphones, earbuds, and speakers on the market.
                    </p>
                    <button className="btn btn-outline-primary mt-3">View Partners</button>
                  </div>
                </div>
              </div>

              {/* Wearable Tech Companies */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i
                      className="bi bi-smartwatch text-primary"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    <h3 className="mt-3 mb-3">Wearable Tech Companies</h3>
                    <p>
                      We collaborate with innovative wearable technology companies to offer
                      you the latest in smart watches and fitness trackers.
                    </p>
                    <button className="btn btn-outline-primary mt-3">View Partners</button>
                  </div>
                </div>
              </div>

              {/* Accessory Specialists */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i
                      className="bi bi-box-seam text-primary"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    <h3 className="mt-3 mb-3">Accessory Specialists</h3>
                    <p>
                      Our partnerships with accessory specialists ensure that you have access
                      to high-quality cases, chargers, and other essential accessories.
                    </p>
                    <button className="btn btn-outline-primary mt-3">View Partners</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Partner Spotlight Section */}
          <section className="mb-5 py-5 bg-light rounded">
            <div className="container">
              <h2 className="text-center mb-5">Partner Spotlight</h2>
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0">
                  <img
                    src="../images/partnerspotlight.png"
                    alt="Partner Spotlight"
                    className="img-fluid rounded"
                  />
                </div>
                <div className="col-lg-6">
                  <h3>TechVision Inc.</h3>
                  <p className="lead">Our Premium Technology Partner</p>
                  <p>
                    TechVision has been at the forefront of audio technology for over 20
                    years. Their commitment to innovation and quality aligns perfectly with
                    our mission to provide our customers with the best products available.
                  </p>
                  <p>
                    Through our partnership, we're able to offer exclusive deals on
                    TechVision's premium headphones and speakers, bringing cutting-edge
                    audio technology to our customers at competitive prices.
                  </p>
                  <a href="#" className="btn btn-primary mt-3">
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Become a Partner Section */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-5">
                <div className="row align-items-center">
                  <div className="col-lg-8 mb-4 mb-lg-0">
                    <h2>Become a Partner</h2>
                    <p className="lead">
                      Join our network of trusted partners and grow your business with us.
                    </p>
                    <p>
                      We're always looking to expand our partner network with companies that
                      share our commitment to quality and customer satisfaction. As a
                      ShopEase partner, you'll gain access to our growing customer base and
                      benefit from our marketing initiatives.
                    </p>
                    <ul className="list-unstyled">
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Increased visibility for your products
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Access to our marketing channels
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Collaborative promotional opportunities
                      </li>
                      <li>
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        Dedicated partner support
                      </li>
                    </ul>
                  </div>
                  <div className="col-lg-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Partner Inquiry Form</h5>
                        <form>
                          <div className="mb-3">
                            <label htmlFor="companyName" className="form-label">
                              Company Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="companyName"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="contactName" className="form-label">
                              Contact Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="contactName"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="phone" className="form-label">
                              Phone
                            </label>
                            <input
                              type="tel"
                              className="form-control"
                              id="phone"
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="message" className="form-label">
                              Message
                            </label>
                            <textarea
                              className="form-control"
                              id="message"
                              rows="3"
                              required
                            ></textarea>
                          </div>
                          <button type="submit" className="btn btn-primary w-100">
                            Submit Inquiry
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
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

export default Partners;