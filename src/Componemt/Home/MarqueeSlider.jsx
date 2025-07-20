// MarqueeSlider.jsx
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MarqueeSlider() {
  const categories = [
    { label: "👕 Men", path: "/Men" },
    { label: "👗 Women", path: "/Women" },
    { label: "📱 Electronics", path: "/Electronics" },
    { label: "🏠 Home", path: "/Home" },
  ];

  return (
    <div>
      <motion.section
        className="py-5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container text-center">
          <motion.h2
            className="h2 fw-bold mb-4"
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            Shop by Category
          </motion.h2>
          <div className="row g-4">
            {categories.map((item, index) => (
              <motion.div
                className="col-6 col-md-3"
                key={index}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link to={item.path} className="text-decoration-none">
                  <div className="bg-white rounded shadow p-4 h-100 fw-semibold text-dark">
                    {item.label}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default MarqueeSlider;
