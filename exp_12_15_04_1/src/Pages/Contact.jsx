import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoginModal from "../Components/LoginModal";

const Contact = () => {
  return (
    <>
      <Navbar />
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-dark">
            <h1 className="display-4 fw-bolder">Contact Us</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              We'd love to hear from you
            </p>
          </div>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          {/* Contact Information Section */}
          <section className="mb-5">
            <div className="row g-4">
              {/* Location Card */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i
                      className="bi bi-geo-alt text-primary"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    <h3 className="mt-3 mb-3">Our Location</h3>
                    <p>
                      123 Commerce St
                      <br />
                      New York, NY 10001
                      <br />
                      United States
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary mt-3"
                    >
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Card */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i
                      className="bi bi-telephone text-primary"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    <h3 className="mt-3 mb-3">Phone</h3>
                    <p>
                      Customer Service: (123) 456-7890
                      <br />
                      Technical Support: (123) 456-7891
                      <br />
                      Sales: (123) 456-7892
                    </p>
                    <a href="tel:+11234567890" className="btn btn-outline-primary mt-3">
                      Call Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="col-md-4">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-4">
                    <i
                      className="bi bi-envelope text-primary"
                      style={{ fontSize: "3rem" }}
                    ></i>
                    <h3 className="mt-3 mb-3">Email</h3>
                    <p>
                      Customer Service: support@shopease.com
                      <br />
                      Sales Inquiries: sales@shopease.com
                      <br />
                      Partnerships: partners@shopease.com
                    </p>
                    <a
                      href="mailto:info@shopease.com"
                      className="btn btn-outline-primary mt-3"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Form and Map Section */}
          <section className="mb-5">
            <div className="row g-4">
              {/* Contact Form */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm">
                  <div className="card-body p-4">
                    <h2 className="mb-4">Send Us a Message</h2>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="firstName"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="lastName"
                            required
                          />
                        </div>
                        <div className="col-md-6">
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
                        <div className="col-md-6">
                          <label htmlFor="phone" className="form-label">
                            Phone
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="subject" className="form-label">
                            Subject
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="subject"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <label htmlFor="message" className="form-label">
                            Message
                          </label>
                          <textarea
                            className="form-control"
                            id="message"
                            rows="5"
                            required
                          ></textarea>
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="newsletter"
                            />
                            <label className="form-check-label" htmlFor="newsletter">
                              Subscribe to our newsletter
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <button type="submit" className="btn btn-primary">
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              {/* Map and Store Hours */}
              <div className="col-lg-6">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <h2 className="mb-4">Our Location</h2>
                    <div className="ratio ratio-4x3 mb-3">
                      <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.0059418!3d40.7127847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s123%20Commerce%20St%2C%20New%20York%2C%20NY%2010001%2C%20USA!5e0!3m2!1sen!2s!4v1677890878965!5m2!1sen!2s"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <h4 className="mt-4">Store Hours</h4>
                    <ul className="list-unstyled">
                      <li>
                        <strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM
                      </li>
                      <li>
                        <strong>Saturday:</strong> 10:00 AM - 4:00 PM
                      </li>
                      <li>
                        <strong>Sunday:</strong> Closed
                      </li>
                    </ul>
                    <p>
                      Our physical store is open for walk-ins and appointments. We
                      recommend scheduling an appointment for product demonstrations or
                      technical support.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Frequently Asked Questions</h2>
                <div className="accordion" id="faqAccordion">
                  {/* FAQ Item 1 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        What is your return policy?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        We offer a 30-day return policy for most products. Items must be
                        returned in their original packaging and in new condition. Some
                        products may have specific return restrictions, which will be noted
                        on the product page.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 2 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How long does shipping take?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Standard shipping typically takes 3-5 business days within the
                        continental United States. Expedited shipping options are available
                        at checkout. International shipping times vary by destination.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 3 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        Do you offer warranty on your products?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, all products come with the manufacturer's warranty.
                        Additionally, we offer extended warranty options for most
                        electronics. You can add an extended warranty during the checkout
                        process.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 4 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFour">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFour"
                        aria-expanded="false"
                        aria-controls="collapseFour"
                      >
                        Can I cancel my order after it's been placed?
                      </button>
                    </h2>
                    <div
                      id="collapseFour"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFour"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Orders can be canceled within 1 hour of placement. After that, we
                        begin processing orders for shipment. If you need to cancel an order
                        after this window, please contact our customer service team, and
                        we'll do our best to accommodate your request.
                      </div>
                    </div>
                  </div>

                  {/* FAQ Item 5 */}
                  <div className="accordion-item">
                    <h2 className="accordion-header" id="headingFive">
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseFive"
                        aria-expanded="false"
                        aria-controls="collapseFive"
                      >
                        Do you ship internationally?
                      </button>
                    </h2>
                    <div
                      id="collapseFive"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingFive"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body">
                        Yes, we ship to most countries worldwide. International shipping
                        rates and delivery times vary by destination. Please note that
                        customers are responsible for any customs fees or import taxes that
                        may apply.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="bg-light p-5 rounded text-center">
            <h2>Still have questions?</h2>
            <p className="lead mb-4">
              Our customer service team is here to help you with any questions or concerns.
            </p>
            <div className="d-flex justify-content-center gap-3">
              <a href="tel:+11234567890" className="btn btn-primary">
                <i className="bi bi-telephone me-2"></i>Call Us
              </a>
              <a href="mailto:info@shopease.com" className="btn btn-outline-primary">
                <i className="bi bi-envelope me-2"></i>Email Us
              </a>
              <button
                className="btn btn-outline-primary"
                data-bs-toggle="modal"
                data-bs-target="#chatModal"
              >
                <i className="bi bi-chat-dots me-2"></i>Live Chat
              </button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <LoginModal />
    </>
  );
};

export default Contact;