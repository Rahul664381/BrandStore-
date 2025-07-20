import React, { useState } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "The quality of products at BrandStore is exceptional. I've purchased several items and each one has exceeded my expectations.",
      name: "Sarah Johnson",
      role: "Verified Buyer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      id: 2,
      quote:
        "Great customer service and fast shipping. The sunglasses I ordered are perfect and came exactly as described.",
      name: "Michael Chen",
      role: "Verified Buyer",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      quote:
        "I love shopping at BrandStore. They have unique products that you can't find elsewhere, all at reasonable prices.",
      name: "Emily Rodriguez",
      role: "Verified Buyer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: 4,
      quote:
        "The checkout process was smooth and my order arrived earlier than expected. Will definitely shop here again!",
      name: "David Wilson",
      role: "Verified Buyer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/75.jpg",
    },
    {
      id: 5,
      quote:
        "Excellent product selection and the mobile app makes shopping so convenient. Highly recommended!",
      name: "Priya Patel",
      role: "Verified Buyer",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 6,
      quote:
        "Their return policy is customer-friendly and the quality of their clothing line is outstanding.",
      name: "James Brown",
      role: "Verified Buyer",
      rating: 4.5,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 7,
      quote:
        "I'm impressed with how quickly they respond to customer inquiries. Truly a customer-first business.",
      name: "Olivia Martinez",
      role: "Verified Buyer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 8,
      quote:
        "The packaging was eco-friendly and the product was exactly as shown on the website. No surprises!",
      name: "Thomas Kim",
      role: "Verified Buyer",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/81.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward
  const itemsPerPage =
    window.innerWidth < 768 ? 1 : window.innerWidth < 992 ? 2 : 4;

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) =>
      prev + itemsPerPage < testimonials.length ? prev + itemsPerPage : 0
    );
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex((prev) =>
      prev - itemsPerPage >= 0
        ? prev - itemsPerPage
        : testimonials.length - itemsPerPage
    );
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => {
        if (i < Math.floor(rating)) {
          return <FaStar key={i} className="text-warning" />;
        }
        if (i === Math.floor(rating) && rating % 1 >= 0.5) {
          return <FaStarHalfAlt key={i} className="text-warning" />;
        }
        return <FaRegStar key={i} className="text-warning" />;
      });
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex,
    currentIndex + itemsPerPage
  );

  // Fill with testimonials from start if we reach the end
  if (visibleTestimonials.length < itemsPerPage) {
    visibleTestimonials.push(
      ...testimonials.slice(0, itemsPerPage - visibleTestimonials.length)
    );
  }

  return (
    <section className="py-5 bg-light position-relative">
      <div className="container position-relative">
        <div className="text-center mb-5">
          <motion.h2
            className="display-5 fw-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            className="text-muted lead"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Hear from our satisfied customers
          </motion.p>
        </div>

        <button
          className="btn btn-light rounded-circle position-absolute start-0 top-50 translate-middle-y d-none d-md-flex"
          onClick={handlePrev}
          style={{ zIndex: 1, width: "50px", height: "50px" }}
        >
          <FaChevronLeft />
        </button>

        <button
          className="btn btn-light rounded-circle position-absolute end-0 top-50 translate-middle-y d-none d-md-flex"
          onClick={handleNext}
          style={{ zIndex: 1, width: "50px", height: "50px" }}
        >
          <FaChevronRight />
        </button>

        <div
          className="row g-4 position-relative"
          style={{ minHeight: "300px" }}
        >
          <AnimatePresence custom={direction} initial={false}>
            {visibleTestimonials.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="col-12 col-md-6 col-lg-3"
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction * -100 }}
                transition={{ duration: 0.5 }}
                layout
              >
                <motion.div
                  className="card h-100 border-0 shadow-sm p-4"
                  whileHover={{
                    y: -10,
                    boxShadow: "0 15px 30px rgba(0,0,0,0.1)",
                  }}
                >
                  <div className="d-flex mb-3">
                    <div className="d-flex">
                      {renderStars(testimonial.rating)}
                    </div>
                  </div>
                  <p className="text-muted mb-4">"{testimonial.quote}"</p>
                  <div className="d-flex align-items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="rounded-circle me-3"
                      width="50"
                      height="50"
                    />
                    <div>
                      <h5 className="mb-0">{testimonial.name}</h5>
                      <small className="text-muted">{testimonial.role}</small>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className="d-flex justify-content-center gap-3 mt-4 d-md-none">
          <button
            className="btn btn-outline-dark rounded-circle"
            onClick={handlePrev}
            style={{ width: "40px", height: "40px" }}
          >
            <FaChevronLeft />
          </button>
          <button
            className="btn btn-outline-dark rounded-circle"
            onClick={handleNext}
            style={{ width: "40px", height: "40px" }}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
