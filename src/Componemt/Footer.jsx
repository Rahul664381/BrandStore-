import React from "react";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowUp,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
} from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const hoverScale = {
    scale: 1.1,
    transition: { duration: 0.2 },
  };

  const tapScale = {
    scale: 0.95,
    transition: { duration: 0.1 },
  };

  const hoverGolden = {
    scale: 1.1,
    color: "#FFD700",
    transition: { duration: 0.2 },
  };

  return (
    <>
      <footer className="bg-dark text-light pt-5 pb-4 position-relative">
        <motion.div
          className="container"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <motion.div className="row mb-4" variants={containerVariants}>
            {/* About */}
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              variants={itemVariants}
            >
              <h3 className="text-white h5 mb-3">About BrandStore</h3>
              <motion.p className="mb-3 text-white-50" whileHover={{ x: 5 }}>
                We offer premium quality products that enhance your lifestyle.
                Our carefully curated selection ensures you get the best value
                for your money.
              </motion.p>
              <div className="d-flex gap-3">
                {[FaFacebookF, FaTwitter, FaInstagram, FaPinterest].map(
                  (Icon, index) => (
                    <motion.a
                      key={index}
                      href="#"
                      className="text-white footer-icon"
                      whileHover={{ ...hoverScale, color: "#adb5bd" }}
                      whileTap={tapScale}
                    >
                      <Icon />
                    </motion.a>
                  )
                )}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              variants={itemVariants}
            >
              <h3 className="text-white h5 mb-3">Quick Links</h3>
              <ul className="list-unstyled">
                {["Home", "Shop", "About Us", "Contact", "Blog", "FAQs"].map(
                  (link, index) => (
                    <motion.li
                      key={index}
                      className="mb-2"
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <a
                        href="#"
                        className="text-white text-decoration-none"
                        onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                        onMouseOut={(e) => (e.target.style.color = "#fff")}
                      >
                        {link}
                      </a>
                    </motion.li>
                  )
                )}
              </ul>
            </motion.div>

            {/* Customer Service */}
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              variants={itemVariants}
            >
              <h3 className="text-white h5 mb-3">Customer Service</h3>
              <ul className="list-unstyled">
                {[
                  "My Account",
                  "Order Tracking",
                  "Wishlist",
                  "Shipping Policy",
                  "Returns & Refunds",
                  "Size Guide",
                ].map((service, index) => (
                  <motion.li
                    key={index}
                    className="mb-2"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <a
                      href="#"
                      className="text-white text-decoration-none"
                      onMouseOver={(e) => (e.target.style.color = "#FFD700")}
                      onMouseOut={(e) => (e.target.style.color = "#fff")}
                    >
                      {service}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="col-md-6 col-lg-3 mb-4"
              variants={itemVariants}
            >
              <h3 className="text-white h5 mb-3">Contact Info</h3>
              <ul className="list-unstyled text-white-50">
                <motion.li className="mb-3 d-flex" whileHover={{ x: 5 }}>
                  <FaMapMarkerAlt className="mt-1 me-3" />
                  <span>
                    123 Store Street, Retail District, Cityville 10001
                  </span>
                </motion.li>
                <motion.li className="mb-3 d-flex" whileHover={{ x: 5 }}>
                  <FaPhoneAlt className="mt-1 me-3" />
                  <span>(123) 456-7890</span>
                </motion.li>
                <motion.li className="mb-3 d-flex" whileHover={{ x: 5 }}>
                  <FaEnvelope className="mt-1 me-3" />
                  <span>info@brandstore.com</span>
                </motion.li>
                <motion.li className="d-flex" whileHover={{ x: 5 }}>
                  <FaClock className="mt-1 me-3" />
                  <span>
                    Mon-Fri: 9AM - 6PM
                    <br />
                    Sat: 10AM - 4PM
                  </span>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Footer Bottom */}
          <motion.div
            className="border-top border-secondary pt-4 row align-items-center"
            variants={itemVariants}
          >
            <div className="col-md-6 mb-3 mb-md-0">
              <motion.p
                className="mb-0 text-white-50"
                whileHover={{ scale: 1.02 }}
              >
                &copy; 2025 BrandStore. All rights reserved.
              </motion.p>
            </div>

            {/* Payment Icons */}
            <div className="col-md-6 d-flex align-items-center justify-content-md-end gap-3 mt-3 mt-md-0">
              <FaCcVisa className="fs-2 text-white" />
              <FaCcMastercard className="fs-2 text-white" />
              <FaCcPaypal className="fs-2 text-white" />
            </div>
          </motion.div>

          {/* Privacy Links */}
          <div className="d-flex justify-content-center gap-4 mt-3">
            {["Privacy Policy", "Terms of Service", "Sitemap"].map(
              (item, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className="text-white text-decoration-none"
                  whileHover={hoverGolden}
                  whileTap={tapScale}
                >
                  {item}
                </motion.a>
              )
            )}
          </div>
        </motion.div>
      </footer>

      {/* Back to Top Button */}
      <button
        type="button"
        className="btn btn-outline-light btn-sm position-fixed bottom-0 end-0 m-4"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
      >
        <FaArrowUp />
      </button>
    </>
  );
};

export default Footer;
