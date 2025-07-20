import React, { useState, useEffect } from "react";
import { FaStar, FaShoppingCart, FaUtensils } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";

const Service = () => {
  // Categories state
  const [activeCategory, setActiveCategory] = useState("all");
  const [priceFilter, setPriceFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Modal state
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  // Form data
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "Online",
    paymentType: "Credit Card",
  });

  // Sample products data
  const shoppingProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      originalPrice: 129.99,
      category: "electronics",
      image:
        "https://assets.ajio.com/medias/sys_master/root/20240703/ImVh/6685e7831d763220fac664e7/-473Wx593H-4938418050-multi-MODEL.jpg",
      rating: 4.5,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 129.99,
      originalPrice: 159.99,
      category: "electronics",
      image:
        "https://imoostore.in/cdn/shop/files/imoo_Z1_Kids_Smart_Watch_in_GrapeFruit_Pink.webp?v=1744698797",
      rating: 4.2,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 89.99,
      originalPrice: 119.99,
      category: "clothing",
      image:
        "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/skwgyqrbfzhu6uyeh0gg/air-max-270-mens-shoes-KkLcGR.png",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Leather Wallet",
      price: 49.99,
      originalPrice: 69.99,
      category: "accessories",
      image:
        "https://t4.ftcdn.net/jpg/13/92/73/19/360_F_1392731978_o9Yd2farl77aOxLfxnJkhSyGZ9xo5TMQ.jpg",
      rating: 4.1,
    },
    {
      id: 5,
      name: "Bluetooth Speaker",
      price: 79.99,
      originalPrice: 99.99,
      category: "electronics",
      image:
        "https://avstore.in/cdn/shop/files/2.AVStore-JBL-PartyBox-110-160W-Portable-Wireless-Speaker-Front-Left-Angled-View.jpg?v=1682411625&width=2000",
      rating: 4.3,
    },
    {
      id: 6,
      name: "Coffee Maker",
      price: 59.99,
      originalPrice: 79.99,
      category: "home",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi8oUpis4dv50c_0auQqBAgrQSlYLIFhhSLg&s",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Backpack",
      price: 45.99,
      originalPrice: 59.99,
      category: "accessories",
      image: "https://freepngimg.com/convert-png/9810-backpack-png-hd",
      rating: 4.0,
    },
    {
      id: 8,
      name: "Desk Lamp",
      price: 34.99,
      originalPrice: 49.99,
      category: "home",
      image:
        "https://static7.depositphotos.com/1000356/781/i/450/depositphotos_7812423-stock-photo-desk-lamp.jpg",
      rating: 3.9,
    },
    {
      id: 9,
      name: "Yoga Mat",
      price: 39.99,
      originalPrice: 49.99,
      category: "fitness",
      image:
        "https://ik.imagekit.io/2xkwa8s1i/img/npl_modified_images/YOGA%20MAT/WYMTMANT6OG/WYMTMANT6OG_LS3-3.jpg?tr=w-3840",
      rating: 4.2,
    },
    {
      id: 10,
      name: "Air Fryer",
      price: 119.99,
      originalPrice: 149.99,
      category: "home",
      image:
        "https://m.media-amazon.com/images/I/61VO5ZOg53L._UF894,1000_QL80_.jpg",
      rating: 4.6,
    },
  ];

  const foodProducts = [
    {
      id: 11,
      name: "Pizza",
      price: 12.99,
      originalPrice: 15.99,
      category: "italian",
      image:
        "https://t3.ftcdn.net/jpg/05/60/70/82/360_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg",
      rating: 4.8,
    },
    {
      id: 12,
      name: "Burger",
      price: 8.99,
      originalPrice: 10.99,
      category: "american",
      image:
        "https://img.freepik.com/premium-photo/burger-dark-background-generative-ai_791958-775.jpg",
      rating: 4.5,
    },
    {
      id: 13,
      name: "Sushi",
      price: 18.99,
      originalPrice: 22.99,
      category: "japanese",
      image:
        "https://media.istockphoto.com/id/1555947107/photo/set-of-sushi-and-maki.jpg?s=612x612&w=0&k=20&c=Tdt7UyRfO-JERN_SXIdf-l8uhD_dVDyH-xzXYh2Q5-Y=",
      rating: 4.7,
    },
    {
      id: 14,
      name: "Pasta",
      price: 14.99,
      originalPrice: 17.99,
      category: "italian",
      image:
        "https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png",
      rating: 4.4,
    },
    {
      id: 15,
      name: "Salad",
      price: 9.99,
      originalPrice: 12.99,
      category: "healthy",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4H0fHrZBRoMKL_MnlM76gLeSAOkx_R-wC2whR4hd6z5vMYxwm-t8yTSAHhp646Pl9FNc&usqp=CAU",
      rating: 4.2,
    },
    {
      id: 16,
      name: "Ice Cream",
      price: 5.99,
      originalPrice: 7.99,
      category: "dessert",
      image:
        "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/dairy-ice-cream-e127d41.jpg?quality=90&resize=440,400",
      rating: 4.9,
    },
    {
      id: 17,
      name: "Steak",
      price: 24.99,
      originalPrice: 29.99,
      category: "american",
      image:
        "https://hips.hearstapps.com/hmg-prod/images/steak-diane-recipe-1-66b501fc84d9d.jpg",
      rating: 4.6,
    },
    {
      id: 18,
      name: "Tacos",
      price: 10.99,
      originalPrice: 12.99,
      category: "mexican",
      image:
        "https://walnuts.org/wp-content/uploads/2022/02/Classic-Family-Taco-Night-Walnut-Tacos-3.jpeg",
      rating: 4.5,
    },
    {
      id: 19,
      name: "Fried Chicken",
      price: 11.99,
      originalPrice: 14.99,
      category: "american",
      image:
        "https://vaya.in/recipes/wp-content/uploads/2018/05/Fried-Chicken.jpg",
      rating: 4.7,
    },
    {
      id: 20,
      name: "Sushi Combo",
      price: 22.99,
      originalPrice: 26.99,
      category: "japanese",
      image:
        "https://dgwc6fpilyqe5.cloudfront.net/00000/00000/0000000924FES.png?1637096987&w=500&h=0&c=0",
      rating: 4.8,
    },
  ];

  // Combine all products
  const allProducts = [...shoppingProducts, ...foodProducts];

  // Filter products based on active category and search query
  const filteredProducts = allProducts.filter((product) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "shopping" && shoppingProducts.includes(product)) ||
      (activeCategory === "food" && foodProducts.includes(product));

    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Apply price filter
  const priceFilteredProducts = filteredProducts.filter((product) => {
    if (priceFilter === "low") return product.price < 50;
    if (priceFilter === "medium")
      return product.price >= 50 && product.price < 100;
    if (priceFilter === "high") return product.price >= 100;
    return true;
  });

  // Handle quantity change
  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle payment submission
  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowPaymentSuccess(true);

      // Auto close after 30 seconds
      setTimeout(() => {
        setSelectedProduct(null);
        setShowPaymentSuccess(false);
      }, 30000);
    }, 3000);
  };

  // Calculate total price and discount
  const totalPrice = selectedProduct
    ? (selectedProduct.price * quantity).toFixed(2)
    : 0;
  const totalDiscount = selectedProduct
    ? (
        (selectedProduct.originalPrice - selectedProduct.price) *
        quantity
      ).toFixed(2)
    : 0;

  return (
    <div className="container py-5">
      {/* Category Buttons */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="btn-group w-100" role="group">
            <button
              type="button"
              className={`btn ${
                activeCategory === "all" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setActiveCategory("all")}
            >
              All Products
            </button>
            <button
              type="button"
              className={`btn ${
                activeCategory === "shopping"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setActiveCategory("shopping")}
            >
              <FaShoppingCart className="me-2" />
              Shopping
            </button>
            <button
              type="button"
              className={`btn ${
                activeCategory === "food"
                  ? "btn-primary"
                  : "btn-outline-primary"
              }`}
              onClick={() => setActiveCategory("food")}
            >
              <FaUtensils className="me-2" />
              Food
            </button>
          </div>
        </div>
      </div>

      {/* Search and Price Filter */}
      <div className="row mb-4">
        <div className="col-md-6 mb-3 mb-md-0">
          <div className="input-group">
            <span className="input-group-text">
              <IoMdSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
        <div className="col-md-6">
          <select
            className="form-select"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Low Price (Under $50)</option>
            <option value="medium">Medium Price ($50-$99)</option>
            <option value="high">High Price ($100+)</option>
          </select>
        </div>
      </div>

      {/* Products Grid */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
        {priceFilteredProducts.map((product) => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <div className="d-flex justify-content-between align-items-center mb-2">
                  <div>
                    <span className="text-success fw-bold">
                      ${product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-decoration-line-through text-muted ms-2 small">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                  <span className="text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={
                          i < Math.floor(product.rating)
                            ? "fas"
                            : i < product.rating
                            ? "fas fa-star-half-alt"
                            : "far"
                        }
                      />
                    ))}
                  </span>
                </div>
                <button
                  className="btn btn-primary w-100"
                  onClick={() => {
                    setSelectedProduct(product);
                    setQuantity(1);
                    setShowPaymentSuccess(false);
                  }}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.name}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setSelectedProduct(null);
                    setShowPaymentSuccess(false);
                  }}
                ></button>
              </div>
              <div className="modal-body">
                {!showPaymentSuccess ? (
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <img
                          src={selectedProduct.image}
                          alt={selectedProduct.name}
                          className="img-fluid rounded"
                          style={{ height: "300px", objectFit: "cover" }}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="mb-4">
                        <h5>Order Summary</h5>
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <td>Product:</td>
                              <td>{selectedProduct.name}</td>
                            </tr>
                            <tr>
                              <td>Price:</td>
                              <td>${selectedProduct.price}</td>
                            </tr>
                            <tr>
                              <td>Original Price:</td>
                              <td>${selectedProduct.originalPrice}</td>
                            </tr>
                            <tr>
                              <td>Discount:</td>
                              <td className="text-success">
                                -$
                                {(
                                  selectedProduct.originalPrice -
                                  selectedProduct.price
                                ).toFixed(2)}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Quantity</label>
                        <div className="input-group" style={{ width: "150px" }}>
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => handleQuantityChange("decrease")}
                          >
                            -
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            onClick={() => handleQuantityChange("increase")}
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5>
                          Total Price: ${totalPrice}
                          <br />
                          <small className="text-success">
                            You save: ${totalDiscount}
                          </small>
                        </h5>
                      </div>

                      <form onSubmit={handlePayment}>
                        <div className="mb-3">
                          <label htmlFor="fullName" className="form-label">
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
                          <label htmlFor="email" className="form-label">
                            Email
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
                          <label htmlFor="phone" className="form-label">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            className="form-control"
                            id="phone"
                            name="phone"
                            value={formData.phone}
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
                            required
                          ></textarea>
                        </div>
                        <div className="mb-4">
                          <label className="form-label">Payment Method</label>
                          <select
                            className="form-select mb-2"
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                          >
                            <option value="Online">Online</option>
                            <option value="Cash on Delivery">
                              Cash on Delivery
                            </option>
                          </select>
                          {formData.paymentMethod === "Online" && (
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
                          )}
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary w-100"
                          disabled={isProcessingPayment}
                        >
                          {isProcessingPayment ? (
                            <>
                              <span className="spinner-border spinner-border-sm me-2"></span>
                              Processing Payment...
                            </>
                          ) : (
                            "Complete Payment"
                          )}
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-4">
                    <div className="mb-4">
                      <div
                        className="text-success"
                        style={{ fontSize: "4rem" }}
                      >
                        ✓
                      </div>
                    </div>
                    <h3 className="text-success mb-3">Payment Successful!</h3>
                    <p className="mb-4">
                      Thank you for your purchase. Your order will be processed
                      soon.
                    </p>
                    <div className="border p-3 text-start">
                      <h5>Order Details</h5>
                      <p>
                        <strong>Product:</strong> {selectedProduct.name}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {quantity}
                      </p>
                      <p>
                        <strong>Total Price:</strong> ${totalPrice}
                      </p>
                      <p>
                        <strong>Total Discount:</strong> ${totalDiscount}
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
                      <p>
                        <strong>Shipping to:</strong> {formData.fullName},{" "}
                        {formData.address}
                      </p>
                    </div>
                  </div>
                )}
              </div>
              {showPaymentSuccess && (
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={() => {
                      setSelectedProduct(null);
                      setShowPaymentSuccess(false);
                    }}
                  >
                    Close
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

export default Service;
