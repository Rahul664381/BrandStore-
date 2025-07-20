import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function HeroSection1() {
  return (
    <div className="position-relative">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-100"
        style={{
          height: "80vh",
          objectFit: "cover",
          minHeight: "500px", // Ensures good display on mobile
        }}
      >
        {/* Multiple video sources for better browser compatibility */}
        <source
          src="https://videos.pexels.com/video-files/4750040/4750040-hd_1920_1080_30fps.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay Content */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{
          backgroundColor: "rgba(0,0,0,0.4)",
          backdropFilter: "blur(2px)", // Adds subtle blur effect
        }}
      >
        <div className="container text-white text-center text-md-start">
          <h1 className="display-3 fw-bold mb-3 animate__animated animate__fadeInDown">
            Summer Collection 2025
          </h1>
          <p className="lead mb-4 fs-4 animate__animated animate__fadeIn animate__delay-1s">
            Premium quality t-shirts for every style
          </p>
          <div className="d-flex gap-3 justify-content-center justify-content-md-start animate__animated animate__fadeInUp animate__delay-2s">
            <button className="btn btn-primary btn-lg px-4 py-2 shadow">
              Shop Now
            </button>
            <button className="btn btn-outline-light btn-lg px-4 py-2 shadow">
              Custom Design
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="position-absolute bottom-0 start-50 translate-middle-x mb-3">
        <div className="scroll-indicator"></div>
      </div>
    </div>
  );
}

export default HeroSection1;
