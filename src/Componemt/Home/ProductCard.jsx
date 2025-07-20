import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaShoppingCart, FaHeart, FaRegHeart } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ShoppingSection from "../Home/ShowCard/ShoppingSection.jsx";

const ProductCard = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const product = {
    title: "Premium Wireless Headphones",
    description:
      "Experience crystal-clear sound with our noise-cancelling wireless headphones. Perfect for music lovers and professionals alike.",
    price: 199.99,
    discount: 15,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  };

  return (
    <div className="container my-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="card mb-3 shadow-lg border-0 overflow-hidden"
          style={{ maxWidth: "100%" }}
          whileHover={{ y: -5 }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <div className="row g-0">
            <div className="col-md-4 position-relative">
              {/* Discount Badge */}
              <div className="position-absolute bg-danger text-white px-2 py-1 m-2 rounded">
                {product.discount}% OFF
              </div>

              {/* Like Button */}
              <button
                className="position-absolute bg-white rounded-circle border-0 p-2 m-2"
                style={{ right: 0, zIndex: 1 }}
                onClick={() => setIsLiked(!isLiked)}
              >
                {isLiked ? (
                  <FaHeart className="text-danger" />
                ) : (
                  <FaRegHeart className="text-secondary" />
                )}
              </button>

              {/* Product Image */}
              <motion.img
                src={`${product.image}?w=600&h=400&auto=format&fit=crop`}
                className="img-fluid rounded-start h-100 object-fit-cover"
                alt={product.title}
                initial={{ scale: 1 }}
                animate={{ scale: isHovered ? 1.05 : 1 }}
                transition={{ duration: 0.3 }}
                style={{ minHeight: "200px" }}
              />
            </div>

            <div className="col-md-8">
              <div className="card-body h-100 d-flex flex-column">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text flex-grow-1">{product.description}</p>

                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <div>
                    <span className="text-danger h4">
                      $
                      {(product.price * (1 - product.discount / 100)).toFixed(
                        2
                      )}
                    </span>
                    <span className="text-decoration-line-through text-muted small ms-2">
                      ${product.price.toFixed(2)}
                    </span>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      to="/ShoppingSection"
                      className="btn btn-primary rounded-pill d-flex align-items-center"
                    >
                      <FaShoppingCart className="me-2" />
                      Show Now
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
