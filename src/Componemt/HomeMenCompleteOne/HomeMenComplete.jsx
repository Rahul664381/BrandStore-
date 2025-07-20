import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Button, Form, Spinner } from "react-bootstrap";
import "./HomeMenComplete.css"; 

const HomeMenComplete = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Online");
  const [paymentType, setPaymentType] = useState("Credit Card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleAddToCart = (product) => {
    setSelectedProduct(product);
    setQuantity(1);
    setIsProcessing(false);
    setIsSuccess(false);
    setShowModal(true);
  };

  const handlePayment = () => {
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
    }, 3000);
  };

  const price = selectedProduct.price || 0;
  const discount = 0.1 * price * quantity; // 10% discount
  const totalPrice = price * quantity;
  const finalPrice = totalPrice - discount;

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Modern Furniture Collection</h1>
      <p className="text-center mb-5">
        Discover our new collection of comfortable and stylish furniture for
        your home
      </p>

      <div className="row">
        {featuredProducts.map((product, idx) => (
          <div key={idx} className="col-lg-3 col-md-4 col-sm-6 mb-4">
            <div className="card h-100">
              <img
                src={product.image}
                alt={product.name}
                className="card-img-top product-img"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price.toFixed(2)}</p>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)}
                  className="mt-auto"
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal
        show={showModal}
        onHide={() => setShowModal(false)}
        centered
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Checkout</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {!isSuccess ? (
            <>
              <h5>Product: {selectedProduct.name}</h5>
              <p>Price per item: ${price.toFixed(2)}</p>

              <Form.Group className="mb-2">
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                />
              </Form.Group>

              <p>Subtotal: ${totalPrice.toFixed(2)}</p>
              <p>Discount: -${discount.toFixed(2)}</p>
              <h5>Total: ${finalPrice.toFixed(2)}</h5>

              <hr />

              <Form.Group className="mb-2">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter full name"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter phone number"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={2}
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter address"
                />
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>Payment Method</Form.Label>
                <Form.Select
                  value={paymentMethod}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                >
                  <option>Online</option>
                  <option>Cash on Delivery</option>
                </Form.Select>
              </Form.Group>

              {paymentMethod === "Online" && (
                <Form.Group className="mb-2">
                  <Form.Label>Payment Type</Form.Label>
                  <Form.Select
                    value={paymentType}
                    onChange={(e) => setPaymentType(e.target.value)}
                  >
                    <option>Credit Card</option>
                    <option>Google Pay</option>
                    <option>PhonePe</option>
                    <option>Paytm</option>
                  </Form.Select>
                </Form.Group>
              )}

              <Button
                variant="success"
                onClick={handlePayment}
                disabled={isProcessing}
                className="w-100 mt-3"
              >
                {isProcessing ? (
                  <>
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />{" "}
                    Processing...
                  </>
                ) : (
                  "Complete Payment"
                )}
              </Button>
            </>
          ) : (
            <div className="text-center">
              <h4>✅ Payment Successful!</h4>
              <p>
                Thank you for your purchase. Your order will be shipped soon.
              </p>

              <hr />
              <h5>Order Summary</h5>
              <table className="table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Qty</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{selectedProduct.name}</td>
                    <td>{quantity}</td>
                    <td>${price.toFixed(2)}</td>
                    <td>${finalPrice.toFixed(2)}</td>
                  </tr>
                </tbody>
              </table>

              <Button variant="primary" onClick={() => setShowModal(false)}>
                Close
              </Button>
            </div>
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

const featuredProducts = [
  {
    id: 1,
    name: "Modern Wooden Chair",
    price: 129.99,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ96QMAnvddAgoZ59uICzdBJyRMbz-Sp3ig3A&s",
  },
  {
    id: 2,
    name: "Comfortable Sofa",
    price: 599.99,
    image:
      "https://media.istockphoto.com/id/1186974930/photo/modern-grey-sofa.jpg?s=612x612&w=0&k=20&c=EzinA5NUawgX2eyXYnmFJRgsd5mqLR7eoS5V8jKMiF8=",
  },
  {
    id: 3,
    name: "Glass Coffee Table",
    price: 249.99,
    image:
      "https://media.istockphoto.com/id/171100101/photo/glass-table-clipping-path.jpg?s=612x612&w=0&k=20&c=ls2lHxnuQb06J340TFQPL3sSc4RQXKUx-WU2ra-3864=",
  },
  {
    id: 4,
    name: "Minimalist Bookshelf",
    price: 179.99,
    image:
      "https://lh7-rt.googleusercontent.com/docsz/AD_4nXewc-AqLFAjZaNi6cRJLSCLOjv9ZkMvV2D8BLYg5yrzR6SzOKcUfSFZ6Q2caZmp9p77yFgIVYQze1risIEuhhzN3k6vhc1_jJWTaq4VKMrrAbDWgmt6_R3i0cUVxdcEoicWPWomT44Nv1wtqhwcnK-53991?key=sD_rBcIiNAia6gYa6nh9qg",
  },
];

export default HomeMenComplete;
