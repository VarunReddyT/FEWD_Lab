import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoginModal from "../Components/LoginModal";

import office from "../images/office.jpg";
const About = () => {
  return (
    <>
      <Navbar />
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-dark">
            <h1 className="display-4 fw-bolder">About Us</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              Learn more about our story and mission
            </p>
          </div>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          {/* Our Story Section */}
          <section className="mb-5">
            <div className="row align-items-center">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <img
                  src={office}
                  className="img-fluid rounded"
                  alt="Our Story"
                />
              </div>
              <div className="col-lg-6">
                <h2 className="mb-4">Our Story</h2>
                <p>
                  Founded in 2010, ShopEase began as a small electronics store with a big
                  vision. Our founder, John Smith, was passionate about making quality
                  electronics accessible to everyone.
                </p>
                <p>
                  What started as a modest shop has now grown into a leading e-commerce
                  platform, serving customers nationwide with the latest and greatest in
                  consumer electronics and accessories.
                </p>
                <p>
                  Despite our growth, we've remained true to our core values: quality,
                  affordability, and exceptional customer service. Every product we sell is
                  carefully selected to ensure it meets our high standards.
                </p>
              </div>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="mb-5 py-5 bg-light rounded">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 mx-auto text-center">
                  <h2 className="mb-4">Our Mission</h2>
                  <p className="lead">
                    To provide our customers with high-quality electronics and accessories at
                    competitive prices, while delivering an exceptional shopping experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Values Section */}
          <section className="mb-5">
            <h2 className="text-center mb-4">Our Values</h2>
            <div className="row">
              {/* Value 1: Quality */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4">
                  <div className="card-body">
                    <i className="bi bi-award text-primary" style={{ fontSize: "3rem" }}></i>
                    <h4 className="mt-3">Quality</h4>
                    <p>
                      We never compromise on the quality of our products. Each item is
                      carefully selected and tested to ensure it meets our high standards.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 2: Customer First */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4">
                  <div className="card-body">
                    <i className="bi bi-people text-primary" style={{ fontSize: "3rem" }}></i>
                    <h4 className="mt-3">Customer First</h4>
                    <p>
                      Our customers are at the heart of everything we do. We strive to provide
                      exceptional service and support at every step of your journey with us.
                    </p>
                  </div>
                </div>
              </div>

              {/* Value 3: Sustainability */}
              <div className="col-md-4 mb-4">
                <div className="card h-100 text-center p-4">
                  <div className="card-body">
                    <i className="bi bi-recycle text-primary" style={{ fontSize: "3rem" }}></i>
                    <h4 className="mt-3">Sustainability</h4>
                    <p>
                      We're committed to reducing our environmental impact through eco-friendly
                      packaging and supporting manufacturers with sustainable practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-5">
            <h2 className="text-center mb-4">Meet Our Team</h2>
            <div className="row">
              {/* Team Member 1 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5 className="card-title">John Smith</h5>
                    <p className="card-text text-muted">Founder & CEO</p>
                    <p className="card-text">
                      Passionate about technology and customer satisfaction.
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Sarah Johnson</h5>
                    <p className="card-text text-muted">Chief Operations Officer</p>
                    <p className="card-text">
                      Ensures smooth operations and excellent service delivery.
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 3 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Michael Brown</h5>
                    <p className="card-text text-muted">Product Manager</p>
                    <p className="card-text">
                      Curates our product selection with an eye for quality and innovation.
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Team Member 4 */}
              <div className="col-lg-3 col-md-6 mb-4">
                <div className="card h-100 text-center">
                  <div className="card-body">
                    <h5 className="card-title">Emily Davis</h5>
                    <p className="card-text text-muted">Customer Service Manager</p>
                    <p className="card-text">
                      Dedicated to ensuring every customer has a positive experience.
                    </p>
                    <div className="d-flex justify-content-center gap-2">
                      <a href="#" className="text-primary">
                        <i className="bi bi-linkedin"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-twitter"></i>
                      </a>
                      <a href="#" className="text-primary">
                        <i className="bi bi-envelope"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Milestones Section */}
          <section className="mb-5 py-5 bg-light rounded">
            <h2 className="text-center mb-5">Our Milestones</h2>
            <div className="container">
              <div className="row">
                {/* Milestone 1 */}
                <div className="col-md-3 text-center mb-4">
                  <div className="display-4 fw-bold text-primary">2010</div>
                  <p className="mt-2">Founded as a small electronics store in New York</p>
                </div>

                {/* Milestone 2 */}
                <div className="col-md-3 text-center mb-4">
                  <div className="display-4 fw-bold text-primary">2015</div>
                  <p className="mt-2">Launched our e-commerce platform</p>
                </div>

                {/* Milestone 3 */}
                <div className="col-md-3 text-center mb-4">
                  <div className="display-4 fw-bold text-primary">2018</div>
                  <p className="mt-2">Expanded to nationwide shipping</p>
                </div>

                {/* Milestone 4 */}
                <div className="col-md-3 text-center mb-4">
                  <div className="display-4 fw-bold text-primary">2022</div>
                  <p className="mt-2">Reached 1 million satisfied customers</p>
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

export default About;