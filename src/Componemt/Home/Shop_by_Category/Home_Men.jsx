import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Home_Men.css";

const Home_Men = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    address: "",
    paymentMethod: "Online",
    paymentType: "Credit Card",
  });

  const handleAddToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);

    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    setShowModal(true);
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = () => {
    setLoading(true);

    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setPaymentSuccess(true);

      // Reset after 30 seconds
      setTimeout(() => {
        setPaymentSuccess(false);
        setShowModal(false);
        setCartItems([]);
      }, 30000);
    }, 2000);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  const calculateDiscount = () => {
    // Example discount calculation (10% off)
    return calculateTotal() * 0.1;
  };

  const calculateFinalTotal = () => {
    return calculateTotal() - calculateDiscount();
  };

  return (
    <div className="interior-elements-home">
      {/* Hero Slider Section */}
      <section className="hero-slider">
        <div
          id="mainCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="hero-content">
                      <h1>Modern Furniture Collection</h1>
                      <p>
                        Discover our new collection of comfortable and stylish
                        furniture for your home
                      </p>
                      <a href="/shop" className="btn btn-primary">
                        Shop Now
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <img
                      src="https://thumbs.dreamstime.com/b/urban-jungle-trendy-living-room-interior-white-couch-black-knot-pillow-wooden-furniture-copy-space-empty-wall-174228512.jpg"
                      alt="Furniture Collection"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="category-card">
                <div className="category-image">
                  <img
                    src="https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?cs=srgb&dl=pexels-fotoaibe-1571459.jpg&fm=jpg"
                    alt="Living Room"
                    className="img-fluid"
                  />
                </div>
                <div className="category-content">
                  <h3>Living Room</h3>
                  <a href="/living-room" className="btn btn-outline-dark">
                    View Collection
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="category-card">
                <div className="category-image">
                  <img
                    src="https://w0.peakpx.com/wallpaper/397/510/HD-wallpaper-modern-interior-design-bedroom-stylish-bedroom-gray-style-minimalism-gray-color-in-the-bedroom-large-bed.jpg"
                    alt="Bedroom"
                    className="img-fluid"
                  />
                </div>
                <div className="category-content">
                  <h3>Bedroom</h3>
                  <a href="/bedroom" className="btn btn-outline-dark">
                    View Collection
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="category-card">
                <div className="category-image">
                  <img
                    src="https://images.pexels.com/photos/1457841/pexels-photo-1457841.jpeg?cs=srgb&dl=pexels-jvdm-1457841.jpg&fm=jpg"
                    alt="Dining Room"
                    className="img-fluid"
                  />
                </div>
                <div className="category-content">
                  <h3>Dining Room</h3>
                  <a href="/dining-room" className="btn btn-outline-dark">
                    View Collection
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products py-5 bg-light">
        <div className="container">
          <div className="section-header mb-5">
            <h2 className="section-title">Featured Products</h2>
            <p className="section-subtitle">
              Add featured products to weekly lineup
            </p>
          </div>

          <div className="row">
            {featuredProducts.map((product, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="product-card">
                  {product.badge && (
                    <div className="product-badge">{product.badge}</div>
                  )}
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid product-img"
                    />
                    <div className="product-actions">
                      <button className="btn btn-sm btn-outline-secondary quick-view">
                        Quick View
                      </button>
                      <button className="btn btn-sm btn-outline-secondary add-to-wishlist">
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-price">
                      <span className="current-price">${product.price}</span>
                      {product.oldPrice && (
                        <span className="old-price">${product.oldPrice}</span>
                      )}
                    </div>
                    <button
                      className="btn btn-primary add-to-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals py-5">
        <div className="container">
          <div className="section-header mb-5">
            <h2 className="section-title">New Arrivals</h2>
            <p className="section-subtitle">Brand new products for your home</p>
          </div>

          <div className="row">
            {newArrivals.map((product, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-4">
                <div className="product-card">
                  <div className="product-image">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="img-fluid product-img"
                    />
                    <div className="product-actions">
                      <button className="btn btn-sm btn-outline-secondary quick-view">
                        Quick View
                      </button>
                      <button className="btn btn-sm btn-outline-secondary add-to-wishlist">
                        <i className="bi bi-heart"></i>
                      </button>
                    </div>
                  </div>
                  <div className="product-content">
                    <h3 className="product-title">{product.name}</h3>
                    <div className="product-price">
                      <span className="current-price">${product.price}</span>
                    </div>
                    <button
                      className="btn btn-primary add-to-cart"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Modal */}
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Your Order Summary</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    setPaymentSuccess(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                {paymentSuccess ? (
                  <div className="text-center py-4">
                    <div className="mb-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="64"
                        height="64"
                        fill="#28a745"
                        className="bi bi-check-circle"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                        <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                      </svg>
                    </div>
                    <h4>Payment Successful!</h4>
                    <p>
                      Thank you for your purchase. Your order will be shipped
                      soon.
                    </p>
                    {/* <p>This window will close automatically in 30 seconds.</p> */}
                  </div>
                ) : loading ? (
                  <div className="text-center py-4">
                    <div
                      className="spinner-border text-primary mb-3"
                      role="status"
                    >
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h4>Processing Payment...</h4>
                  </div>
                ) : (
                  <>
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cartItems.map((item, index) => (
                            <tr key={index}>
                              <td>
                                <div className="d-flex align-items-center">
                                  <img
                                    src={item.image}
                                    alt={item.name}
                                    className="img-thumbnail cart-item-img me-3"
                                  />
                                  <span>{item.name}</span>
                                </div>
                              </td>
                              <td>
                                <div className="input-group quantity-selector">
                                  <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity - 1)
                                    }
                                  >
                                    -
                                  </button>
                                  <input
                                    type="text"
                                    className="form-control text-center"
                                    value={item.quantity}
                                    readOnly
                                  />
                                  <button
                                    className="btn btn-outline-secondary"
                                    type="button"
                                    onClick={() =>
                                      updateQuantity(item.id, item.quantity + 1)
                                    }
                                  >
                                    +
                                  </button>
                                </div>
                              </td>
                              <td>${item.price.toFixed(2)}</td>
                              <td>
                                ${(item.price * item.quantity).toFixed(2)}
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-outline-danger"
                                  onClick={() => removeItem(item.id)}
                                >
                                  Remove
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {cartItems.length === 0 && (
                      <div className="text-center py-4">
                        <p>Your cart is empty</p>
                        <button
                          className="btn btn-primary"
                          onClick={() => setShowModal(false)}
                        >
                          Continue Shopping
                        </button>
                      </div>
                    )}

                    {cartItems.length > 0 && (
                      <div className="row mt-4">
                        <div className="col-md-6">
                          <div className="card mb-3">
                            <div className="card-header">
                              <h5>Customer Information</h5>
                            </div>
                            <div className="card-body">
                              <div className="mb-3">
                                <label
                                  htmlFor="fullName"
                                  className="form-label"
                                >
                                  Full Name
                                </label>
                                <input
                                  type="text"
                                  className="form-control"
                                  id="fullName"
                                  name="fullName"
                                  value={formData.fullName}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  htmlFor="phoneNumber"
                                  className="form-label"
                                >
                                  Phone Number
                                </label>
                                <input
                                  type="tel"
                                  className="form-control"
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  value={formData.phoneNumber}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="email" className="form-label">
                                  Email ID
                                </label>
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  required
                                />
                              </div>
                              <div className="mb-3">
                                <label htmlFor="address" className="form-label">
                                  Address
                                </label>
                                <textarea
                                  className="form-control"
                                  id="address"
                                  name="address"
                                  value={formData.address}
                                  onChange={handleInputChange}
                                  rows="3"
                                  required
                                ></textarea>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card mb-3">
                            <div className="card-header">
                              <h5>Payment Details</h5>
                            </div>
                            <div className="card-body">
                              <div className="mb-3">
                                <label className="form-label">
                                  Payment Method
                                </label>
                                <div>
                                  <div className="form-check">
                                    <input
                                      className="form-check-input"
                                      type="radio"
                                      name="paymentMethod"
                                      id="onlinePayment"
                                      value="Online"
                                      checked={
                                        formData.paymentMethod === "Online"
                                      }
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
                                      id="codPayment"
                                      value="Cash on Delivery"
                                      checked={
                                        formData.paymentMethod ===
                                        "Cash on Delivery"
                                      }
                                      onChange={handleInputChange}
                                    />
                                    <label
                                      className="form-check-label"
                                      htmlFor="codPayment"
                                    >
                                      Cash on Delivery
                                    </label>
                                  </div>
                                </div>
                              </div>

                              {formData.paymentMethod === "Online" && (
                                <div className="mb-3">
                                  <label className="form-label">
                                    Payment Type
                                  </label>
                                  <select
                                    className="form-select"
                                    name="paymentType"
                                    value={formData.paymentType}
                                    onChange={handleInputChange}
                                  >
                                    <option value="Credit Card">
                                      Credit Card
                                    </option>
                                    <option value="Google Pay">
                                      Google Pay
                                    </option>
                                    <option value="PhonePe">PhonePe</option>
                                    <option value="Paytm">Paytm</option>
                                  </select>
                                </div>
                              )}

                              <div className="border-top pt-3">
                                <div className="d-flex justify-content-between mb-2">
                                  <span>Subtotal:</span>
                                  <span>${calculateTotal().toFixed(2)}</span>
                                </div>
                                <div className="d-flex justify-content-between mb-2">
                                  <span>Discount:</span>
                                  <span className="text-danger">
                                    -${calculateDiscount().toFixed(2)}
                                  </span>
                                </div>
                                <div className="d-flex justify-content-between fw-bold fs-5">
                                  <span>Total:</span>
                                  <span>
                                    ${calculateFinalTotal().toFixed(2)}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </>
                )}
              </div>
              {!loading && !paymentSuccess && cartItems.length > 0 && (
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => setShowModal(false)}
                  >
                    Continue Shopping
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={handlePayment}
                    disabled={
                      !formData.fullName ||
                      !formData.phoneNumber ||
                      !formData.email ||
                      !formData.address
                    }
                  >
                    Complete Payment
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Sample data
const featuredProducts = [
  {
    id: 1,
    name: "Modern Wooden Chair",
    price: 129.99,
    oldPrice: 149.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96QMAnvddAgoZ59uICzdBJyRMbz-Sp3ig3A&s",
    badge: "Sale",
  },
  {
    id: 2,
    name: "Comfortable Sofa",
    price: 599.99,
    image:
      "https://media.istockphoto.com/id/1186974930/photo/modern-grey-sofa.jpg?s=612x612&w=0&k=20&c=EzinA5NUawgX2eyXYnmFJRgsd5mqLR7eoS5V8jKMiF8=",
    badge: "New",
  },
  {
    id: 3,
    name: "Glass Coffee Table",
    price: 249.99,
    oldPrice: 299.99,
    image:
      "https://media.istockphoto.com/id/171100101/photo/glass-table-clipping-path.jpg?s=612x612&w=0&k=20&c=ls2lHxnuQb06J340TFQPL3sSc4RQXKUx-WU2ra-3864=",
    badge: "Sale",
  },
  {
    id: 4,
    name: "Minimalist Bookshelf",
    price: 179.99,
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXewc-AqLFAjZaNi6cRJLSCLOjv9ZkMvV2D8BLYg5yrzR6SzOKcUfSFZ6Q2caZmp9p77yFgIVYQze1risIEuhhzN3k6vhc1_jJWTaq4VKMrrAbDWgmt6_R3i0cUVxdcEoicWPWomT44Nv1wtqhwcnK-53991?key=sD_rBcIiNAia6gYa6nh9qg",
  },
];

const newArrivals = [
  {
    id: 5,
    name: "Leather Recliner",
    price: 459.99,
    image:
      "https://www.fabmart.com/cdn/shop/products/la-z-boy-recliner-sofas-la-z-boy-leather-recliner-sofa-3-seater-dreamtime-1.jpg?v=1476774141",
  },
  {
    id: 6,
    name: "Round Dining Table",
    price: 349.99,
    image:
      "https://s.alicdn.com/@sc04/kf/Hc0ba62ad2c1d40ba90d3e010e6c18819x.jpg",
  },
  {
    id: 7,
    name: "Velvet Armchair",
    price: 289.99,
    image:
      "https://urbancart.in/cdn/shop/products/3_0c0869ff-0cfa-4398-996d-db6e1c6e4f20.jpg?v=1651472638",
  },
  {
    id: 8,
    name: "TV Stand Cabinet",
    price: 199.99,
    image:
      "https://e7.pngegg.com/pngimages/510/592/png-clipart-shelf-furniture-entertainment-centers-tv-stands-casas-bahia-price-tv-cabinet-angle-computer-monitor-accessory-thumbnail.png",
  },
];

export default Home_Men;
