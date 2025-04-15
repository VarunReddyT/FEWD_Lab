import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import LoginModal from "../components/LoginModal";
import Pagination from "react-bootstrap/Pagination";

// Import images
import gallery1 from "../images/gallery1.jpeg";
import gallery2 from "../images/gallery2.jpeg";
import gallery3 from "../images/gallery3.jpeg";
import gallery4 from "../images/gallery4.jpeg";
import gallery5 from "../images/gallery5.jpeg";
import gallery6 from "../images/gallery6.jpeg";
import gallery7 from "../images/gallery7.jpeg";
import gallery8 from "../images/gallery8.jpeg";
import gallery9 from "../images/gallery9.jpeg";
import gallery10 from "../images/gallery10.jpeg";
import gallery11 from "../images/gallery11.jpeg";
import gallery12 from "../images/gallery12.jpeg";

const Gallery = () => {
  // State for pagination
  const [activePage, setActivePage] = useState(1);
  const itemsPerPage = 6; // Number of items per page

  // Gallery data
  const galleryItems = [
    {
      id: 1,
      image: gallery1,
      alt: "Premium Headphones",
      title: "Premium Noise-Cancelling Headphones",
      description: "Experience crystal clear sound with our premium headphones",
      category: "headphones",
    },
    {
      id: 2,
      image: gallery2,
      alt: "Smart Watch",
      title: "Smart Watch Pro",
      description: "Track your fitness and stay connected with our latest smart watch",
      category: "watches",
    },
    {
      id: 3,
      image: gallery3,
      alt: "Bluetooth Speaker",
      title: "Portable Bluetooth Speaker",
      description: "Take your music anywhere with our waterproof portable speaker",
      category: "speakers",
    },
    {
      id: 4,
      image: gallery4,
      alt: "Wireless Earbuds",
      title: "Wireless Earbuds",
      description: "Enjoy music on the go with our comfortable wireless earbuds",
      category: "headphones",
    },
    {
      id: 5,
      image: gallery5,
      alt: "Phone Case",
      title: "Premium Phone Case",
      description: "Protect your device with our stylish and durable phone cases",
      category: "accessories",
    },
    {
      id: 6,
      image: gallery6,
      alt: "Fitness Tracker",
      title: "Fitness Tracker",
      description: "Track your workouts, heart rate, and sleep with our advanced fitness tracker",
      category: "watches",
    },
    {
      id: 7,
      image: gallery7,
      alt: "Product Launch Event",
      title: "Product Launch Event",
      description: "Highlights from our latest product launch event",
      category: "events",
    },
    {
      id: 8,
      image: gallery8,
      alt: "Home Theater System",
      title: "Home Theater System",
      description: "Transform your living room with our immersive home theater system",
      category: "speakers",
    },
    {
      id: 9,
      image: gallery9,
      alt: "Wireless Charging Pad",
      title: "Wireless Charging Pad",
      description: "Charge your devices effortlessly with our sleek wireless charging pad",
      category: "accessories",
    },
    {
      id: 10,
      image: gallery10,
      alt: "Tech Workshop",
      title: "Tech Workshop",
      description: "Scenes from our recent tech workshop and customer education event",
      category: "events",
    },
    {
      id: 11,
      image: gallery11,
      alt: "Gaming Headset",
      title: "Gaming Headset",
      description: "Immerse yourself in gaming with our high-performance gaming headset",
      category: "headphones",
    },
    {
      id: 12,
      image: gallery12,
      alt: "Power Bank",
      title: "Power Bank",
      description: "Stay charged on the go with our high-capacity power bank",
      category: "accessories",
    },
  ];

  // Pagination logic
  const totalPages = Math.ceil(galleryItems.length / itemsPerPage);
  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = galleryItems.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <Navbar />
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-dark">
            <h1 className="display-4 fw-bolder">Product Gallery</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              Explore our products in action
            </p>
          </div>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          {/* Gallery Grid */}
          <section className="gallery-container">
            <div className="row">
              {currentItems.map((item) => (
                <div
                  className="col-md-6 col-lg-4 gallery-item mb-4"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="gallery-img"
                  />
                  <div className="mt-2">
                    <h5>{item.title}</h5>
                    <p className="text-muted">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="d-flex justify-content-center mt-4">
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(activePage - 1)}
                  disabled={activePage === 1}
                />
                {[...Array(totalPages)].map((_, index) => (
                  <Pagination.Item
                    key={index + 1}
                    active={index + 1 === activePage}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Pagination.Item>
                ))}
                <Pagination.Next
                  onClick={() => handlePageChange(activePage + 1)}
                  disabled={activePage === totalPages}
                />
              </Pagination>
            </div>
          </section>

          {/* User Gallery Section */}
          <section className="mb-5">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <h2 className="text-center mb-4">Share Your Experience</h2>
                <p className="text-center mb-4">
                  We love seeing our products in action! Share your photos with us using
                  #ShopEase on social media or upload them directly here.
                </p>

                <form className="mb-4">
                  <div className="row g-3">
                    <div className="col-md-6">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Your Name"
                        required
                      />
                    </div>
                    <div className="col-md-6">
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                    <div className="col-12">
                      <select className="form-select">
                        <option selected>Select Product Category</option>
                        <option value="1">Headphones</option>
                        <option value="2">Smart Watches</option>
                        <option value="3">Speakers</option>
                        <option value="4">Accessories</option>
                      </select>
                    </div>
                    <div className="col-12">
                      <div className="input-group">
                        <input
                          type="file"
                          className="form-control"
                          id="inputGroupFile"
                          accept="image/*"
                        />
                        <label className="input-group-text" htmlFor="inputGroupFile">
                          Upload
                        </label>
                      </div>
                    </div>
                    <div className="col-12">
                      <textarea
                        className="form-control"
                        rows="3"
                        placeholder="Tell us about your experience with the product"
                      ></textarea>
                    </div>
                    <div className="col-12">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="shareConsent"
                          required
                        />
                        <label className="form-check-label" htmlFor="shareConsent">
                          I consent to ShopEase using my photos on their website and social
                          media
                        </label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button type="submit" className="btn btn-primary">
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
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

export default Gallery;