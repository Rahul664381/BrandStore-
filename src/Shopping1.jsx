import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

const Shopping1 = () => {
  const featuredProducts = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 99.99,
      originalPrice: 129.99,
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/MUW23_AV3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=TnNVNThFcW1oclhLVXFXTGx3amZFMVZya2lKWlJmUEwrYndWOTJiVWJWQUYwVmtIbGRkS25RMVpBRlo0bk5DUXBZUE5OSVRBVTZPY1BKenN1Y1QyUkE",
      rating: 4.5,
      reviews: 124,
      isNew: true,
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 199.99,
      originalPrice: 249.99,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=400&q=80",
      rating: 4.8,
      reviews: 89,
      isNew: false,
    },
    {
      id: 3,
      name: "Running Shoes",
      price: 79.99,
      originalPrice: 99.99,
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=400&q=80",
      rating: 4.3,
      reviews: 215,
      isNew: true,
    },
    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 59.99,
      originalPrice: 79.99,
      image:
        "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?auto=format&fit=crop&w=400&q=80",
      rating: 4.2,
      reviews: 67,
      isNew: false,
    },
  ];

  const categories = [
    {
      name: "Electronics",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Fashion",
      image:
        "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Home & Kitchen",
      image:
        "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=400&q=80",
    },
    {
      name: "Beauty",
      image:
        "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=400&q=80",
    },
  ];

  return (
    <div className="shopping-website">
      {/* Hero Section */}
      <section
        className="hero-section py-5"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="mb-5 mb-lg-0">
              <h1 className="display-4 fw-bold mb-4">Discover Amazing Deals</h1>
              <p className="lead mb-4">
                Shop the latest trends in fashion, electronics, home goods and
                more. Enjoy exclusive discounts and fast delivery.
              </p>
              <div className="d-flex gap-3">
                <Button variant="primary" size="lg">
                  Shop Now
                </Button>
                <Button variant="outline-secondary" size="lg">
                  View Deals
                </Button>
              </div>
            </Col>
            <Col lg={6}>
              <img
                src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80"
                alt="Shopping"
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Categories Section */}
      <section className="categories-section py-5">
        <Container>
          <h2 className="text-center mb-5 fw-bold">Shop by Category</h2>
          <Row>
            {categories.map((category, index) => (
              <Col md={3} sm={6} key={index} className="mb-4">
                <Card className="h-100 border-0 shadow-sm">
                  <Card.Img variant="top" src={category.image} />
                  <Card.Body className="text-center">
                    <Card.Title>{category.name}</Card.Title>
                    <Button variant="outline-primary" size="sm">
                      Shop Now
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5 bg-light">
        <Container>
          <div className="d-flex justify-content-between align-items-center mb-5">
            <h2 className="fw-bold">Featured Products</h2>
            <Button variant="link" className="text-decoration-none">
              View All
            </Button>
          </div>
          <Row>
            {featuredProducts.map((product) => (
              <Col lg={3} md={6} key={product.id} className="mb-4">
                <Card className="h-100 border-0 shadow-sm product-card">
                  {product.isNew && (
                    <Badge
                      bg="danger"
                      className="position-absolute top-0 end-0 m-2"
                    >
                      New
                    </Badge>
                  )}
                  <div className="product-image-container">
                    <Card.Img
                      variant="top"
                      src={product.image}
                      className="product-image"
                    />
                  </div>
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <div className="d-flex align-items-center mb-2">
                      <div className="text-warning me-2">
                        {[...Array(5)].map((_, i) => (
                          <i
                            key={i}
                            className={`fas fa-star${
                              i < Math.floor(product.rating)
                                ? ""
                                : i === Math.floor(product.rating) &&
                                  product.rating % 1 >= 0.5
                                ? "-half-alt"
                                : ""
                            }`}
                          ></i>
                        ))}
                      </div>
                      <small className="text-muted">({product.reviews})</small>
                    </div>
                    <div className="d-flex align-items-center">
                      <h5 className="text-primary mb-0">${product.price}</h5>
                      <small className="text-muted text-decoration-line-through ms-2">
                        ${product.originalPrice}
                      </small>
                    </div>
                  </Card.Body>
                  <Card.Footer className="bg-white border-0">
                    <Button variant="primary" className="w-100">
                      Add to Cart
                    </Button>
                  </Card.Footer>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Deal of the Day */}
      <section className="deal-section py-5">
        <Container>
          <Row className="align-items-center bg-primary text-white rounded-3 p-4">
            <Col md={6}>
              <h2 className="fw-bold">Deal of the Day</h2>
              <h3 className="display-5 fw-bold mb-3">Smartphone X Pro</h3>
              <p className="mb-4">
                Get the latest smartphone with 20% discount. Limited time offer!
              </p>
              <div className="d-flex align-items-center mb-4">
                <div className="deal-countdown me-3">
                  <div className="d-flex gap-2">
                    <div className="bg-white text-primary px-3 py-2 rounded text-center">
                      <div className="fw-bold">02</div>
                      <small>Days</small>
                    </div>
                    <div className="bg-white text-primary px-3 py-2 rounded text-center">
                      <div className="fw-bold">12</div>
                      <small>Hours</small>
                    </div>
                    <div className="bg-white text-primary px-3 py-2 rounded text-center">
                      <div className="fw-bold">45</div>
                      <small>Mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <Button variant="light" size="lg">
                Shop Now
              </Button>
            </Col>
            <Col md={6} className="text-center">
              <img
                src="https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?auto=format&fit=crop&w=500&q=80"
                alt="Smartphone"
                className="img-fluid"
                style={{ maxHeight: "300px" }}
              />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Shopping1;
