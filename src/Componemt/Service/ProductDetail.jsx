import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const sizes = ["S", "M", "L", "XL"];
const colors = ["#212529", "#f5f0e6"];

const imageIds = [
  {
    id: 24,
    large:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/24-large_default/hummingbird-printed-t-shirt.jpg",
    thumb:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/24-cart_default/hummingbird-printed-t-shirt.jpg",
  },
  {
    id: 25,
    large:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/25-large_default/hummingbird-printed-t-shirt.jpg",
    thumb:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/25-cart_default/hummingbird-printed-t-shirt.jpg",
  },
  {
    id: 26,
    large:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/26-large_default/hummingbird-printed-t-shirt.jpg",
    thumb:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/26-cart_default/hummingbird-printed-t-shirt.jpg",
  },
  {
    id: 27,
    large:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/27-large_default/hummingbird-printed-t-shirt.jpg",
    thumb:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/27-cart_default/hummingbird-printed-t-shirt.jpg",
  },
  {
    id: 28,
    large:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/28-large_default/hummingbird-printed-t-shirt.jpg",
    thumb:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/28-cart_default/hummingbird-printed-t-shirt.jpg",
  },
  {
    id: 29,
    large:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/29-large_default/hummingbird-printed-t-shirt.jpg",
    thumb:
      "https://demo811.leotheme.com/prestashop/vt_interior_elements_demo/29-cart_default/hummingbird-printed-t-shirt.jpg",
  },
];

export default function ProductDetail() {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [countdown, setCountdown] = useState({
    days: 63,
    hours: 13,
    minutes: 46,
    seconds: 40,
  });
  const [loading, setLoading] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const price = 19.12;
  const discount = 4.78; // 23.90 - 19.12

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "Online",
    paymentType: "Credit Card",
  });

  const mainImage = imageIds[currentImageIndex].large;

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          if (minutes > 0) {
            minutes--;
            seconds = 59;
          } else if (hours > 0) {
            hours--;
            minutes = 59;
            seconds = 59;
          } else if (days > 0) {
            days--;
            hours = 23;
            minutes = 59;
            seconds = 59;
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleQuantity = (type) => {
    setQuantity((prev) => (type === "inc" ? prev + 1 : Math.max(prev - 1, 1)));
  };

  const handleAddToCart = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowCheckout(true);
    }, 1000);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prev) => (prev - 1 + imageIds.length) % imageIds.length
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageIds.length);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = () => {
    setPaymentLoading(true);
    setTimeout(() => {
      setPaymentLoading(false);
      setPaymentSuccess(true);
      setTimeout(() => {
        setShowCheckout(false);
        setPaymentSuccess(false);
      }, 30000);
    }, 3000);
  };

  const totalPrice = (price * quantity).toFixed(2);
  const totalDiscount = (discount * quantity).toFixed(2);

  return (
    <div className="container my-5">
      <div className="row g-4 flex-column flex-lg-row">
        <div className="col-lg-6">
          <div className="text-center border p-4 position-relative">
            <img
              src={mainImage}
              alt="Storm Small Jug"
              className="img-fluid w-100"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
            <button
              className="btn btn-light position-absolute top-50 start-0 translate-middle-y"
              onClick={handlePrev}
            >
              <i className="bi bi-chevron-left"></i>
            </button>
            <button
              className="btn btn-light position-absolute top-50 end-0 translate-middle-y"
              onClick={handleNext}
            >
              <i className="bi bi-chevron-right"></i>
            </button>
          </div>
          <div className="d-flex flex-wrap gap-2 mt-3 justify-content-center">
            {imageIds.map((img, idx) => (
              <img
                key={idx}
                src={img.thumb}
                alt="Thumbnail"
                style={{
                  width: 80,
                  height: 80,
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                className={`border rounded ${
                  currentImageIndex === idx ? "border-dark border-2" : ""
                }`}
                onClick={() => setCurrentImageIndex(idx)}
              />
            ))}
          </div>
        </div>

        <div className="col-lg-6">
          <h3>Storm Small Jug</h3>
          <div className="mb-2">
            <span className="text-warning">★★★★★</span>
            <span className="text-muted ms-2">Read reviews (1)</span>
          </div>
          <p className="text-muted">
            Regular fit, round neckline, short sleeves. Made of extra long
            staple pima cotton.
          </p>
          <div className="d-flex flex-wrap gap-2 mb-3">
            <div className="border rounded px-3 py-2 fw-bold">
              {countdown.days} Days
            </div>
            <div className="border rounded px-3 py-2 fw-bold">
              {countdown.hours} Hours
            </div>
            <div className="border rounded px-3 py-2 fw-bold">
              {countdown.minutes} Min
            </div>
            <div className="border rounded px-3 py-2 fw-bold">
              {countdown.seconds} Sec
            </div>
          </div>
          <h4>
            <span className="text-decoration-line-through text-muted me-2">
              $23.90
            </span>
            <span className="text-danger">${price.toFixed(2)}</span>
          </h4>
          <div className="mt-4 mb-3">
            <label className="fw-semibold me-2">Size:</label>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`btn btn-sm me-2 border ${
                  selectedSize === size ? "btn-dark text-white" : ""
                }`}
              >
                {size}
              </button>
            ))}
          </div>
          <div className="mb-3">
            <label className="fw-semibold me-2">Color:</label>
            {colors.map((color, index) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`border rounded-circle me-2 p-2 ${
                  selectedColor === index ? "border-dark border-2" : ""
                }`}
                style={{ backgroundColor: color, width: 30, height: 30 }}
              ></button>
            ))}
          </div>
          <div className="mb-3 d-flex flex-wrap align-items-center">
            <label className="fw-semibold me-3">Quantity:</label>
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => handleQuantity("dec")}
            >
              -
            </button>
            <input
              type="text"
              className="form-control text-center mx-2"
              style={{ width: 60 }}
              value={quantity}
              readOnly
            />
            <button
              className="btn btn-outline-secondary btn-sm"
              onClick={() => handleQuantity("inc")}
            >
              +
            </button>
            <button
              className="btn btn-dark ms-3 mt-2 mt-md-0"
              onClick={handleAddToCart}
              disabled={loading}
            >
              {loading ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2"></span>
                  Processing...
                </>
              ) : (
                "Add to cart"
              )}
            </button>
          </div>
          <div className="mb-3">
            <strong>Total Price: </strong> ${totalPrice}
          </div>
          <div className="d-flex flex-wrap gap-3 mb-3">
            <small className="text-muted">Size Guide</small>
            <small className="text-muted">Add to Wishlist</small>
            <small className="text-muted">Add to Compare</small>
          </div>
          <p className="text-success">
            In stock <strong>289 Items</strong>
          </p>
          <p className="text-muted mb-1">Reference: demo_1</p>
          <p className="text-muted mb-1">Brand: Studio Design</p>
          <p className="text-muted">
            Categories: Home, Furniture, Lighting Lamp
          </p>
          <div className="d-flex flex-wrap gap-3">
            <span>Share:</span>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-pinterest"></i>
          </div>
        </div>
      </div>

      {/* Checkout Modal */}
      {showCheckout && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Order Summary</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowCheckout(false)}
                ></button>
              </div>
              <div className="modal-body">
                {!paymentSuccess ? (
                  <div className="row">
                    <div className="col-md-6">
                      <div className="border p-3 mb-3">
                        <h6>Order Details</h6>
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <td>Product:</td>
                              <td>Storm Small Jug</td>
                            </tr>
                            <tr>
                              <td>Quantity:</td>
                              <td>{quantity}</td>
                            </tr>
                            <tr>
                              <td>Price:</td>
                              <td>${price.toFixed(2)}</td>
                            </tr>
                            <tr>
                              <td>Total Price:</td>
                              <td>${totalPrice}</td>
                            </tr>
                            <tr>
                              <td>Discount:</td>
                              <td>${totalDiscount}</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="border p-3">
                        <h6>Customer Information</h6>
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
                          <label className="form-label">Email</label>
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
                          <label className="form-label">Address</label>
                          <textarea
                            className="form-control"
                            name="address"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          ></textarea>
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
                          <label className="form-label">Payment Method</label>
                          <select
                            className="form-select"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                          >
                            <option value="Online">Online</option>
                            <option value="Cash on Delivery">
                              Cash on Delivery
                            </option>
                          </select>
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
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <div className="mb-4">
                      <i
                        className="bi bi-check-circle-fill text-success"
                        style={{ fontSize: "4rem" }}
                      ></i>
                    </div>
                    <h3 className="text-success mb-3">
                      Your Payment Successful!
                    </h3>
                    <p className="mb-4">
                      Thank you for your purchase. Your order will be shipped
                      soon.
                    </p>
                    <div className="border p-3 text-start">
                      <h6>Order Details</h6>
                      <p>
                        <strong>Product:</strong> Storm Small Jug
                      </p>
                      <p>
                        <strong>Quantity:</strong> {quantity}
                      </p>
                      <p>
                        <strong>Total Price:</strong> ${totalPrice}
                      </p>
                      <p>
                        <strong>Discount:</strong> ${totalDiscount}
                      </p>
                      <p>
                        <strong>Payment Method:</strong>{" "}
                        {formData.paymentMethod}
                      </p>
                      {formData.paymentMethod === "Online" && (
                        <p>
                          <strong>Payment Type:</strong> {formData.paymentType}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
              <div className="modal-footer">
                {!paymentSuccess ? (
                  <>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      onClick={() => setShowCheckout(false)}
                    >
                      Back
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={handlePayment}
                      disabled={
                        paymentLoading ||
                        !formData.fullName ||
                        !formData.email ||
                        !formData.address ||
                        !formData.phone
                      }
                    >
                      {paymentLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2"></span>
                          Processing...
                        </>
                      ) : (
                        "Complete Payment"
                      )}
                    </button>
                  </>
                ) : (
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowCheckout(false)}
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
