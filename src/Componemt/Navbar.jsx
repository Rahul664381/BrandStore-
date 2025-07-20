import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);
  const searchInputRef = useRef(null);

  // Initialize speech recognition
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = "en-US";

      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
        if (searchInputRef.current) {
          searchInputRef.current.focus();
        }
      };

      recognitionRef.current.onerror = (event) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current.start();
        setIsListening(true);
      } catch (error) {
        console.error("Could not start recognition:", error);
      }
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  return (
    <>
      <header className="shadow-sm bg-white fixed-top" style={{ zIndex: 1030 }}>
        {/* Main Navigation Row */}
        <div className="container py-3">
          <div className="d-flex align-items-center">
            {/* Mobile Menu Button */}
            <button
              className="btn btn-light d-md-none me-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "rotate(90deg)";
                e.currentTarget.style.backgroundColor = "#f8f9fa";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "rotate(0deg)";
                e.currentTarget.style.backgroundColor = "white";
              }}
            >
              <i className="bi bi-list fs-5"></i>
            </button>

            {/* Logo */}
            <Link
              to="/"
              className="text-decoration-none fs-3 fw-bold text-primary me-3 me-md-4"
              style={{
                transition: "all 0.3s ease",
                minWidth: "150px",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.color = "#0b5ed7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.color = "#0d6efd";
              }}
            >
              BrandStore
            </Link>

            {/* Search Bar - Always visible */}
            <form
              className="flex-grow-1 me-2 me-md-3"
              onSubmit={handleSearchSubmit}
            >
              <div className="input-group shadow-sm">
                <input
                  ref={searchInputRef}
                  type="text"
                  className="form-control"
                  placeholder={
                    isListening ? "Listening..." : "Search products..."
                  }
                  aria-label="Search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    transition: "all 0.3s ease",
                    height: "40px",
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 0 0 0.2rem rgba(13, 110, 253, 0.25)";
                    e.currentTarget.style.borderColor = "#86b7fe";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "#ced4da";
                  }}
                />
                <button
                  className={`btn ${
                    isListening ? "btn-danger" : "btn-outline-secondary"
                  }`}
                  type="button"
                  onClick={toggleListening}
                  style={{
                    transition: "all 0.3s ease",
                    height: "40px",
                  }}
                  onMouseEnter={(e) => {
                    if (!isListening) {
                      e.currentTarget.style.backgroundColor = "#f8f9fa";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isListening) {
                      e.currentTarget.style.backgroundColor = "white";
                    }
                  }}
                >
                  <i
                    className={`bi ${isListening ? "bi-mic-mute" : "bi-mic"}`}
                  ></i>
                </button>
                <button
                  className="btn btn-primary"
                  type="submit"
                  disabled={!searchQuery.trim()}
                  style={{
                    transition: "all 0.3s ease",
                    height: "40px",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0b5ed7";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "#0d6efd";
                  }}
                >
                  <i className="bi bi-search"></i>
                </button>
              </div>
            </form>

            {/* Navigation Icons */}
            <div className="d-flex align-items-center gap-2">
              <button
                className="btn btn-light position-relative rounded-circle d-none d-md-flex"
                style={{
                  width: "40px",
                  height: "40px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i className="bi bi-person fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">Alerts</span>
                </span>
              </button>

              <button
                className="btn btn-light position-relative rounded-circle d-none d-md-flex"
                style={{
                  width: "40px",
                  height: "40px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8f9fa";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <i className="bi bi-cart fs-5"></i>
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  3
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Links - Desktop */}
        <nav className="bg-light d-none d-md-block border-top">
          <div className="container d-flex justify-content-center gap-4 py-2">
            {[
              { path: "/", name: "Home" },
              { path: "/shop", name: "Shop" },
              { path: "/service", name: "Service" },
              { path: "/categories", name: "Categories" },
              { path: "/about", name: "About" },
              { path: "/contact", name: "Contact" },
            ].map((item) => (
              <Link
                key={item.path}
                className="text-dark fw-medium text-decoration-none position-relative py-2"
                to={item.path}
                style={{
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#0d6efd";
                  e.currentTarget.querySelector("span").style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#212529";
                  e.currentTarget.querySelector("span").style.width = "0";
                }}
              >
                {item.name}
                <span
                  className="position-absolute bottom-0 start-0 bg-primary"
                  style={{
                    height: "2px",
                    width: "0",
                    transition: "width 0.3s ease",
                  }}
                />
              </Link>
            ))}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="bg-light d-md-none">
            <div className="container d-flex flex-column gap-3 py-3">
              {[
                { path: "/", name: "Home" },
                { path: "/shop", name: "Shop" },
                { path: "/service", name: "Service" },
                { path: "/categories", name: "Categories" },
                { path: "/about", name: "About" },
                { path: "/contact", name: "Contact" },
              ].map((item) => (
                <Link
                  key={item.path}
                  className="text-dark fw-medium text-decoration-none py-2"
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>

      {/* Spacer */}
      <div
        style={{
          height: mobileMenuOpen ? "calc(100px + 250px)" : "100px",
          transition: "height 0.3s ease",
        }}
      />
    </>
  );
}

export default Navbar;
