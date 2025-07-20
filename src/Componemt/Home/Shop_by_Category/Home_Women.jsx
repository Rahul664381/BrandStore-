import React, { useState, useEffect } from "react";
import dataproducts from "./dataproducts";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCartPlus,
  FaSearch,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Women() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [showCheckoutModal, setShowCheckoutModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "Online",
    paymentType: "Credit Card",
  });
  const itemsPerPage = 20;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const filteredProducts = dataproducts.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Modified addToCart to only add the selected product (clears previous cart)
  const addToCart = (product) => {
    setCart([{ ...product, quantity: 1 }]); // Only keep the newly added product
    toast.success(`${product.title} added to cart!`);
    setShowCheckoutModal(true);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const discount = cart.reduce(
      (sum, item) => sum + (item.originalPrice - item.price) * item.quantity,
      0
    );
    const gst = subtotal * 0.18;
    const total = subtotal + gst;
    return { subtotal, discount, gst, total };
  };

  const { subtotal, discount, gst, total } = calculateTotals();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setShowCheckoutModal(false);
      setShowSuccessModal(true);
    }, 3000);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<FaStar key={i} className="text-warning" />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-warning" />);
      }
    }
    return stars;
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <h1 className="text-center mb-4">Kitchen Appliances</h1>

      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <div className="input-group">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
          </div>
        </div>
      </div>

      <div className="mb-3">Showing {filteredProducts.length} products</div>

      <div className="row g-4">
        {paginatedProducts.map((product) => (
          <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
            <div className="card h-100 shadow-sm">
              <div className="position-relative text-center">
                <img
                  src={product.img}
                  className="card-img-top p-3"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "contain" }}
                />
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                  {product.discount}
                </span>
              </div>

              <div className="card-body d-flex flex-column">
                <h5 className="card-title" style={{ fontSize: "1rem" }}>
                  {product.title}
                </h5>
                <p className="card-text text-muted small">{product.desc}</p>

                <div className="my-3">
                  <h4 className="text-primary mb-0">₹{product.price}</h4>
                  <span className="text-decoration-line-through text-muted small">
                    ₹{product.originalPrice}
                  </span>
                </div>

                <div className="star-rating mb-3">
                  {renderStars(product.rating)}
                  <span className="ms-2 small">{product.rating} out of 5</span>
                </div>

                <button
                  className="btn btn-warning w-100 fw-bold mt-auto"
                  onClick={() => addToCart(product)}
                >
                  <FaCartPlus className="me-2" /> Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNum) => (
                  <li
                    key={pageNum}
                    className={`page-item ${
                      pageNum === currentPage ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  </li>
                )
              )}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Checkout Modal - Shows only the selected product */}
      {showCheckoutModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Checkout</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowCheckoutModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <h5>Order Summary</h5>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.map((item) => (
                            <tr key={item.id}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={item.img}
                                    alt={item.title}
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "contain",
                                      marginRight: "10px",
                                    }}
                                  />
                                  <span>{item.title}</span>
                                </div>
                              </td>
                              <td>₹{item.price}</td>
                              <td>
                                <div className="d-flex align-items-center">
                                  <button
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                  >
                                    <FaMinus />
                                  </button>
                                  <span className="mx-2">{item.quantity}</span>
                                  <button
                                    className="btn btn-sm btn-outline-secondary"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                  >
                                    <FaPlus />
                                  </button>
                                </div>
                              </td>
                              <td>
                                ₹{(item.price * item.quantity).toFixed(2)}
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => removeFromCart(item.id)}
                                >
                                  <FaTimes />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    <div className="border-top pt-3">
                      <div className="d-flex justify-content-between">
                        <span>
                          Subtotal (
                          {cart.reduce((sum, item) => sum + item.quantity, 0)}{" "}
                          items):
                        </span>
                        <span>₹{subtotal.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>Discount:</span>
                        <span className="text-danger">
                          -₹{discount.toFixed(2)}
                        </span>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span>GST (18%):</span>
                        <span>₹{gst.toFixed(2)}</span>
                      </div>
                      <div className="d-flex justify-content-between fw-bold fs-5">
                        <span>Total:</span>
                        <span>₹{total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <h5>Shipping Information</h5>
                    <form onSubmit={handlePayment}>
                      <div className="mb-3">
                        <label className="form-label">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Email ID</label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Phone Number</label>
                        <input
                          type="tel"
                          className="form-control"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Address</label>
                        <textarea
                          className="form-control"
                          name="address"
                          rows="3"
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                      </div>

                      <div className="mb-3">
                        <label className="form-label">Payment Method</label>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="onlinePayment"
                            value="Online"
                            checked={formData.paymentMethod === "Online"}
                            onChange={handleInputChange}
                          />
                          <label
                            className="form-check-label"
                            htmlFor="onlinePayment"
                          >
                            Online
                          </label>
                        </div>
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="paymentMethod"
                            id="cod"
                            value="Cash on Delivery"
                            checked={
                              formData.paymentMethod === "Cash on Delivery"
                            }
                            onChange={handleInputChange}
                          />
                          <label className="form-check-label" htmlFor="cod">
                            Cash on Delivery
                          </label>
                        </div>
                      </div>

                      {formData.paymentMethod === "Online" && (
                        <div className="mb-3">
                          <label className="form-label">Payment Type</label>
                          <select
                            className="form-select"
                            name="paymentType"
                            value={formData.paymentType}
                            onChange={handleInputChange}
                          >
                            <option value="Credit Card">Credit Card</option>
                            <option value="Google Pay">Google Pay</option>
                            <option value="PhonePe">PhonePe</option>
                            <option value="Paytm">Paytm</option>
                          </select>
                        </div>
                      )}
                    </form>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowCheckoutModal(false)}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handlePayment}
                  disabled={isProcessing || cart.length === 0}
                >
                  {isProcessing ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Processing...
                    </>
                  ) : (
                    "Complete Payment"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Payment Successful!</h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setShowSuccessModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="64"
                    height="64"
                    fill="currentColor"
                    className="bi bi-check-circle-fill text-success"
                    viewBox="0 0 16 16"
                  >
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                  </svg>
                  <h4 className="mt-3">Thank you for your purchase!</h4>
                  <p>Your order will be shipped soon.</p>
                </div>

                <h5>Order Details:</h5>
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((item) => (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>{item.quantity}</td>
                          <td>₹{item.price}</td>
                          <td>₹{(item.price * item.quantity).toFixed(2)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={() => {
                    setShowSuccessModal(false);
                    setCart([]);
                  }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal Backdrop */}
      {(showCheckoutModal || showSuccessModal) && (
        <div className="modal-backdrop fade show"></div>
      )}
    </div>
  );
}

export default Women;
