import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {
  FaShoppingCart,
  FaHeart,
  FaStar,
  FaSearch,
  FaTshirt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCheck,
} from "react-icons/fa";

function Tra() {
  return (
    <div className="bg-light">
     

      {/* Hero Section with T-shirt Video */}
      <div className="position-relative">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-100"
          style={{ height: "80vh", objectFit: "cover" }}
        >
          <source
            src="https://videos.pexels.com/video-files/4750040/4750040-hd_1920_1080_30fps.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
          style={{ backgroundColor: "rgba(0,0,0,0.4)" }}
        >
          <div className="container text-white">
            <h1 className="display-3 fw-bold mb-3">Summer Collection 2025</h1>
            <p className="lead mb-4">
              Premium quality t-shirts for every style
            </p>
            <div className="d-flex gap-3">
              <button className="btn btn-primary btn-lg px-4">Shop Now</button>
              <button className="btn btn-outline-light btn-lg px-4">
                Custom Design
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Categories */}
      <section className="container my-5 py-4">
        <h2 className="text-center mb-5">Shop by Category</h2>
        <div className="row g-4">
          {[
            {
              name: "Graphic Tees",
              image:
                "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              count: "120+ Designs",
              icon: <FaTshirt className="me-2" />,
            },
            {
              name: "Plain Tees",
              image:
                "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              count: "50+ Colors",
              icon: <FaSearch className="me-2" />,
            },
            {
              name: "Oversized Fit",
              image:
                "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              count: "Trending Now",
              icon: <FaUser className="me-2" />,
            },
            {
              name: "Limited Edition",
              image:
                "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
              count: "Exclusive",
              icon: <FaStar className="me-2" />,
            },
          ].map((category, index) => (
            <div key={index} className="col-md-3 col-6">
              <div className="card border-0 shadow-sm h-100 hover-scale">
                <img
                  src={category.image}
                  className="card-img-top"
                  alt={category.name}
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h5 className="card-title">
                    {category.icon}
                    {category.name}
                  </h5>
                  <small className="text-muted">{category.count}</small>
                  <a
                    href="#"
                    className="btn btn-outline-dark btn-sm mt-2 w-100"
                  >
                    Explore
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container my-5 py-5 bg-white rounded shadow-sm">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="m-0">
            <FaTshirt className="me-2" />
            Best Selling Tees
          </h2>
          <a href="#" className="btn btn-outline-dark">
            View All
          </a>
        </div>
        <div className="row g-4">
          {tshirts.map((tshirt, index) => (
            <div key={index} className="col-lg-3 col-md-4 col-6">
              <TshirtCard tshirt={tshirt} />
            </div>
          ))}
        </div>
      </section>

      {/* Custom Design Banner */}
      <section className="container my-5">
        <div className="row g-0 bg-dark text-white rounded overflow-hidden">
          <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
            <h2>
              <FaTshirt className="me-2" />
              Create Your Own Design
            </h2>
            <p className="lead">Design a custom t-shirt that's uniquely you</p>
            <ul className="mb-4">
              <li>
                <FaCheck className="me-2" />
                100% Cotton Fabric
              </li>
              <li>
                <FaCheck className="me-2" />
                Premium Printing
              </li>
              <li>
                <FaCheck className="me-2" />
                Fast Turnaround
              </li>
            </ul>
            <button className="btn btn-light btn-lg align-self-start">
              Start Designing
            </button>
          </div>
          <div className="col-md-6">
            <img
              src="https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Custom T-shirt Design"
              className="img-fluid h-100"
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
    </div>
  );
}

// T-shirt Card Component
function TshirtCard({ tshirt }) {
  return (
    <div className="card h-100 border-0 shadow-sm hover-scale">
      <div className="position-relative">
        <img
          src={tshirt.image}
          className="card-img-top"
          alt={tshirt.name}
          style={{ height: "300px", objectFit: "cover" }}
        />
        <button className="btn btn-sm btn-light position-absolute top-0 end-0 m-2 rounded-circle">
          <FaHeart />
        </button>
        {tshirt.discount && (
          <span className="badge bg-danger position-absolute top-0 start-0 m-2">
            {tshirt.discount}% OFF
          </span>
        )}
      </div>
      <div className="card-body">
        <h6 className="card-title">{tshirt.name}</h6>
        <div className="d-flex align-items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={i < tshirt.rating ? "text-warning" : "text-muted"}
              size={14}
            />
          ))}
          <small className="text-muted ms-2">({tshirt.reviews})</small>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {tshirt.originalPrice && (
              <small className="text-muted text-decoration-line-through me-2">
                ${tshirt.originalPrice}
              </small>
            )}
            <span className="fw-bold text-dark">${tshirt.price}</span>
          </div>
          <button className="btn btn-sm btn-dark">
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}

// Sample t-shirt data
const tshirts = [
  {
    id: 1,
    name: "Vintage Band Tee",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 24.99,
    originalPrice: 34.99,
    rating: 5,
    reviews: 128,
    discount: 29,
  },
  {
    id: 2,
    name: "Minimalist Black Tee",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 19.99,
    rating: 4,
    reviews: 89,
  },
  {
    id: 3,
    name: "Oversized White Tee",
    image:
      "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 27.99,
    originalPrice: 32.99,
    rating: 4,
    reviews: 56,
    discount: 15,
  },
  {
    id: 4,
    name: "Graphic Print Tee",
    image:
      "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 29.99,
    rating: 5,
    reviews: 203,
  },
  {
    id: 5,
    name: "Pocket Tee",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 22.99,
    originalPrice: 27.99,
    rating: 4,
    reviews: 78,
    discount: 18,
  },
  {
    id: 6,
    name: "Tie-Dye Tee",
    image:
      "https://images.unsplash.com/photo-1583744946564-b52d01e2da64?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 26.99,
    rating: 5,
    reviews: 142,
  },
  {
    id: 7,
    name: "Long Sleeve Tee",
    image:
      "https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 31.99,
    originalPrice: 39.99,
    rating: 4,
    reviews: 64,
    discount: 20,
  },
  {
    id: 8,
    name: "V-Neck Tee",
    image:
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: 21.99,
    rating: 4,
    reviews: 97,
  },
];

export default Tra;
