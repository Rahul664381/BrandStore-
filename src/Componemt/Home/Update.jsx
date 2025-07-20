import React from "react";
import { motion } from "framer-motion";

function Update() {
  return (
    <>
      {/* Offers Section */}
      <motion.section
        className="py-5 bg-warning text-center text-dark"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <motion.h2
            className="h2 fw-bold mb-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Limited Time Offers!
          </motion.h2>
          <motion.p
            className="mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Get up to 50% off on selected items.
          </motion.p>
          <motion.a
            href="#"
            className="btn btn-primary px-4 py-2"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            Explore Deals
          </motion.a>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="py-5 bg-primary text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-8">
              <motion.h2
                className="h2 fw-bold mb-3"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                Stay Updated
              </motion.h2>
              <motion.p
                className="mb-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Subscribe to our newsletter for updates and special offers.
              </motion.p>
              <form className="row g-2 justify-content-center">
                <div className="col-md-8">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Your email address"
                    required
                  />
                </div>
                <div className="col-md-4">
                  <motion.button
                    type="submit"
                    className="btn btn-light btn-lg w-100 text-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    Subscribe
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
}

export default Update;
