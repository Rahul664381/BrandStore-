import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Hero() {
  // Fallback image URLs in case videos don't load
  const fallbackImages = [
    "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    "https://images.unsplash.com/photo-1556910639-9e4a42396d9a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
  ];

  // Video and content data
  const slides = [
    {
      videoSrc:
        "https://videos.pexels.com/video-files/7668409/7668409-sd_960_506_25fps.mp4",
      title: "Big Summer Sale",
      description:
        "Up to 70% off on Kids Premium Quality Easy Customization T Shirt & Fashion",
      buttonText: "Shop Now",
      buttonClass: "btn-warning",
    },
    {
      videoSrc:
        "https://videos.pexels.com/video-files/5707919/5707919-sd_640_360_25fps.mp4",
      title: "New Arrivals",
      description: "Check out the latest trends of 2025",
      buttonText: "Explore",
      buttonClass: "btn-outline-light",
    },
    {
      videoSrc:
        "https://videos.pexels.com/video-files/7667427/7667427-sd_960_506_25fps.mp4",
      title: "Upgrade Your Kitchen",
      description: "Smart appliances for modern homes",
      buttonText: "Shop Kitchen",
      buttonClass: "btn-danger",
    },
  ];

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide position-relative"
      data-bs-ride="carousel"
      aria-live="polite"
    >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={index === 0 ? "active" : ""}
            aria-current={index === 0 ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Carousel Slides */}
      <div className="carousel-inner">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            {/* Video with fallback image */}
            <video
              className="d-block w-100"
              autoPlay
              muted
              loop
              playsInline
              preload={index === 0 ? "auto" : "none"}
              style={{
                height: "660px",
                objectFit: "cover",
                filter: "brightness(65%)",
              }}
              poster={fallbackImages[index]}
            >
              <source src={slide.videoSrc} type="video/mp4" />
              <img
                src={fallbackImages[index]}
                alt={`Promotional content: ${slide.title}`}
                style={{ height: "660px", objectFit: "cover" }}
              />
            </video>

            {/* Slide Content */}
            <div className="carousel-caption d-flex flex-column justify-content-center align-items-center h-100">
              <h1 className="display-4 fw-bold text-white mb-3">
                {slide.title}
              </h1>
              <p className="lead text-white mb-4">{slide.description}</p>
              <button className={`btn ${slide.buttonClass} btn-lg px-4 py-2`}>
                {slide.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Prev/Next Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
        aria-label="Previous slide"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
        aria-label="Next slide"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Hero;
