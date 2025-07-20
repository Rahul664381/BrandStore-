import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";

function HeroCarousel() {
  return (
    <div
      id="heroCarousel"
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      {/* Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>

      {/* Slides */}
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active" data-bs-interval="4000">
          <img
            src="https://images.pexels.com/photos/3875430/pexels-photo-3875430.jpeg"
            className="d-block w-100"
            alt="Shopping Banner"
          />
          <div className="carousel-caption text-center">
            <h1 className="animate__animated animate__fadeInDown">
              Welcome to Our Shop
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Discover amazing deals & latest trends
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg animate__animated animate__fadeInUp"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="https://images.pexels.com/photos/5531551/pexels-photo-5531551.jpeg"
            className="d-block w-100"
            alt="Fashion Banner"
          />
          <div className="carousel-caption text-center">
            <h1 className="animate__animated animate__fadeInDown">
              New Arrivals
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Grab your favorites before they sell out!
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg animate__animated animate__fadeInUp"
            >
              Explore
            </a>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="carousel-item" data-bs-interval="4000">
          <img
            src="https://images.pexels.com/photos/7679444/pexels-photo-7679444.jpeg"
            className="d-block w-100"
            alt="Store Banner"
          />
          <div className="carousel-caption text-center">
            <h1 className="animate__animated animate__fadeInDown">
              Exclusive Offers
            </h1>
            <p className="animate__animated animate__fadeInUp">
              Sign up & get up to 50% off
            </p>
            <a
              href="#"
              className="btn btn-primary btn-lg animate__animated animate__fadeInUp"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#heroCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Inline Styles for Carousel */}
      <style jsx>{`
        .carousel-item {
          position: relative;
          height: 85vh;
        }

        .carousel-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .carousel-item::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1;
        }

        .carousel-caption {
          z-index: 2;
        }

        .carousel-caption h1 {
          font-size: 3rem;
          font-weight: bold;
        }

        .carousel-caption p {
          font-size: 1.25rem;
        }

        @media (max-width: 768px) {
          .carousel-item {
            height: 60vh;
          }
          .carousel-caption h1 {
            font-size: 2rem;
          }
          .carousel-caption p {
            font-size: 1rem;
          }
        }

        @media (max-width: 576px) {
          .carousel-caption {
            bottom: 20%;
            padding: 0 15px;
          }
        }
      `}</style>
    </div>
  );
}

export default HeroCarousel;
