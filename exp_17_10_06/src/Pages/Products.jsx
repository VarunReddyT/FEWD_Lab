import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import product1 from "../images/products1.jpeg";
import product2 from "../images/products2.jpg";
import product3 from "../images/products3.jpg";
import product4 from "../images/products4.jpg";
import product5 from "../images/products5.jpg";
import product6 from "../images/products6.jpeg";
import product7 from "../images/products7.jpeg";
import product8 from "../images/products8.jpg";


const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get("query") || "";
  const [search, setSearch] = useState(queryParam);

  // Product data
  const products = [
    {
      name: "Premium Headphones",
      description: "Experience crystal clear sound with our premium noise-cancelling headphones.",
      image: product1,
      price: 18999,
      oldPrice: 24999,
      badge: "Sale",
      rating: 4.5,
      reviews: 24,
      category: "Headphones",
    },
    {
      name: "Wireless Earbuds",
      description: "Enjoy music on the go with our comfortable wireless earbuds.",
      image: product2,
      price: 8999,
      oldPrice: null,
      badge: null,
      rating: 4,
      reviews: 18,
      category: "Headphones",
    },
    {
      name: "Gaming Headset",
      description: "Immerse yourself in gaming with our high-performance gaming headset.",
      image: product3,
      price: 9999,
      oldPrice: null,
      badge: "New",
      rating: 5,
      reviews: 32,
      category: "Headphones",
    },
    {
      name: "Studio Headphones",
      description: "Professional-grade studio headphones for music production and mixing.",
      image: product4,
      price: 29999,
      oldPrice: null,
      badge: null,
      rating: 4.5,
      reviews: 12,
      category: "Headphones",
    },
    {
      name: "Smart Watch Pro",
      description: "Stay connected and track your fitness with our latest smart watch.",
      image: product5,
      price: 12999,
      oldPrice: null,
      badge: null,
      rating: 4,
      reviews: 28,
      category: "Smart Watches",
    },
    {
      name: "Fitness Tracker",
      description: "Track your workouts, heart rate, and sleep with our advanced fitness tracker.",
      image: product6,
      price: 18999,
      oldPrice: 25999,
      badge: "Sale",
      rating: 4.5,
      reviews: 42,
      category: "Smart Watches",
    },
    {
      name: "Kids Smart Watch",
      description: "Safe and fun smart watch designed specifically for children.",
      image: product7,
      price: 2999,
      oldPrice: null,
      badge: null,
      rating: 4,
      reviews: 15,
      category: "Smart Watches",
    },
    {
      name: "Premium Smart Watch",
      description: "Luxury smart watch with premium materials and advanced health monitoring.",
      image: product8,
      price: 36999,
      oldPrice: null,
      badge: "New",
      rating: 5,
      reviews: 8,
      category: "Smart Watches",
    },
  ];

  // Filter products by search query
  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(queryParam.toLowerCase()) ||
      product.description.toLowerCase().includes(queryParam.toLowerCase())
  );

  // Group products by category
  const categories = [
    "Headphones",
    "Smart Watches"
  ];

  const groupedProducts = categories.map((category) => ({
    category,
    items: filteredProducts.filter((p) => p.category === category),
  }));

  // Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams(search ? { query: search } : {});
  };

  return (
    <>
      <header className="bg-light py-5">
        <div className="container px-4 px-lg-5">
          <div className="text-center text-dark">
            <h1 className="display-4 fw-bolder">Our Products</h1>
            <p className="lead fw-normal text-dark-50 mb-0">
              Discover our premium selection of electronics and accessories
            </p>
          </div>
          <form className="d-flex justify-content-center mt-4" onSubmit={handleSearch} role="search">
            <input
              className="form-control w-50 me-2"
              type="search"
              placeholder="Search products..."
              aria-label="Search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </header>
      <main className="py-5">
        <div className="container">
          {groupedProducts.map(({ category, items }) =>
            items.length > 0 ? (
              <div key={category}>
                <h2 className="mb-4 mt-5">{category}</h2>
                <div className="row">
                  {items.map((product, idx) => (
                    <div className="col-md-4 col-lg-3 mb-4" key={product.name}>
                      <div className="card h-100">
                        {product.badge && (
                          <div
                            className={`badge bg-${product.badge === "Sale" ? "danger" : "primary"} position-absolute`}
                            style={{ top: "0.5rem", right: "0.5rem" }}
                          >
                            {product.badge}
                          </div>
                        )}
                        <img
                          className="card-img-top"
                          src={product.image}
                          alt={product.name}
                        />
                        <div className="card-body">
                          <h5 className="card-title">{product.name}</h5>
                          <div className="d-flex mb-2">
                            {[...Array(Math.floor(product.rating))].map((_, i) => (
                              <i key={i} className="bi bi-star-fill text-warning"></i>
                            ))}
                            {product.rating % 1 !== 0 && <i className="bi bi-star-half text-warning"></i>}
                            {[...Array(5 - Math.ceil(product.rating))].map((_, i) => (
                              <i key={i} className="bi bi-star text-warning"></i>
                            ))}
                            <span className="ms-1">({product.reviews})</span>
                          </div>
                          <p className="card-text">{product.description}</p>
                          <div className="d-flex justify-content-between align-items-center">
                            <div>
                              {product.oldPrice && (
                                <span className="text-muted text-decoration-line-through">₹ {product.oldPrice}</span>
                              )}
                              <span className={product.oldPrice ? "fw-bold ms-2" : "fw-bold"}>₹ {product.price}</span>
                            </div>
                            <button className="btn btn-outline-primary">
                              <i className="bi bi-cart-plus"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : null
          )}
          {filteredProducts.length === 0 && (
            <div className="text-center mt-5">
              <h4>No products found for "{queryParam}"</h4>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Products;