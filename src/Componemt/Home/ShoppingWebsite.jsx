import React from "react";
import { FaShoppingBag } from "react-icons/fa";

const ShoppingWebsite = () => {
  return (
    <div className="shopping-website">
      {/* Hero Section */}
      <div className="hero-container">
        {/* Floating items animation */}
        <div className="floating-items">
          {[
            {
              icon: "https://cdn-icons-png.flaticon.com/512/3144/3144456.png",
              size: "80px",
              top: "20%",
              left: "10%",
              delay: "0s",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/892/892458.png",
              size: "60px",
              top: "60%",
              left: "80%",
              delay: "1s",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/2583/2583344.png",
              size: "50px",
              top: "30%",
              left: "70%",
              delay: "2s",
            },
            {
              icon: "https://cdn-icons-png.flaticon.com/512/3048/3048127.png",
              size: "70px",
              top: "70%",
              left: "20%",
              delay: "3s",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="floating-item"
              style={{
                backgroundImage: `url(${item.icon})`,
                width: item.size,
                height: item.size,
                top: item.top,
                left: item.left,
                animationDelay: item.delay,
              }}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Hero content */}
        <div className="hero-content">
          <h1 className="hero-title">Summer Collection 2025</h1>
          <p className="hero-subtitle">
            Discover the latest trends in fashion and accessories
          </p>
          <button className="explore-btn">
            <FaShoppingBag className="me-2" /> Explore Now
          </button>
        </div>
      </div>

      {/* CSS Styles - Using CSS Modules approach */}
      <style>{`
        .shopping-website {
          font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero-container {
          position: relative;
          width: 100%;
          min-height: 100vh;
          max-height: 800px;
          background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
            url("https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          overflow: hidden;
          padding: 20px;
        }

        .hero-content {
          text-align: center;
          animation: fadeIn 1.5s ease-in-out;
          z-index: 2;
          max-width: 800px;
          margin: 0 auto;
        }

        .explore-btn {
          background-color: #ff6b6b;
          color: white;
          border: none;
          padding: 12px 30px;
          font-size: 1rem;
          border-radius: 50px;
          margin-top: 20px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .explore-btn:hover {
          background-color: #ff5252;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
        }

        .explore-btn:active {
          transform: translateY(-1px);
        }

        .explore-btn::after {
          content: "";
          display: inline-block;
          height: 100%;
          width: 100%;
          border-radius: 50px;
          position: absolute;
          top: 0;
          left: 0;
          z-index: -1;
          transition: all 0.4s;
          background-color: #ff6b6b;
        }

        .explore-btn:hover::after {
          transform: scaleX(1.4) scaleY(1.6);
          opacity: 0;
        }

        .hero-title {
          font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 20px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
          line-height: 1.2;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.5rem);
          margin-bottom: 30px;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .floating-items {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: 1;
        }

        .floating-item {
          position: absolute;
          background-size: contain;
          background-repeat: no-repeat;
          opacity: 0.7;
          animation: float 6s infinite ease-in-out;
        }

        @keyframes float {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
          100% {
            transform: translateY(0px) rotate(0deg);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          .hero-container {
            background-attachment: scroll;
          }
          
          .floating-item {
            opacity: 0.5;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            margin-bottom: 15px;
          }
          
          .hero-subtitle {
            margin-bottom: 20px;
          }
          
          .explore-btn {
            padding: 10px 25px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
};

export default ShoppingWebsite;
