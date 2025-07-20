import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const ContactPage = () => {
  const handleCall = (number) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section
        className="contact-hero text-center py-5"
        style={{
          background: "linear-gradient(135deg, #4f46e5, #7c3aed)",
          color: "white",
        }}
      >
        <Container>
          <h1 className="display-4 fw-bold mb-3">Contact Us</h1>
          <p className="lead mx-auto" style={{ maxWidth: "700px" }}>
            Have questions or feedback? We'd love to hear from you! Reach out to
            our team and we'll get back to you as soon as possible.
          </p>
        </Container>
      </section>

      {/* Main Contact Content */}
      <Container className="py-5">
        <Row className="g-4 mb-5">
          {/* Get In Touch Section with Image */}
          <Col lg={6} className="mb-4 mb-lg-0">
            <div className="d-flex flex-column h-100">
              <div
                className="mb-4 ratio ratio-16x9"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Contact Us"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="bg-white p-4 rounded shadow-sm h-100">
                <h2 className="mb-4 text-primary">Get In Touch</h2>

                <div className="d-flex mb-4">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px", flexShrink: 0 }}
                  >
                    <i className="fas fa-map-marker-alt fs-5"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-1">Our Location</h5>
                    <p className="text-muted mb-0">
                      BrandStore Shopping , Mumbai, Maharashtra 400001
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px", flexShrink: 0 }}
                  >
                    <i className="fas fa-phone-alt fs-5"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-1">Phone Number</h5>
                    <p
                      className="text-muted mb-1 cursor-pointer"
                      onClick={() => handleCall("+917651820239")}
                      style={{ cursor: "pointer" }}
                    >
                      +91 7651820239
                    </p>
                  </div>
                </div>

                <div className="d-flex mb-4">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px", flexShrink: 0 }}
                  >
                    <i className="fas fa-envelope fs-5"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-1">Email Address</h5>
                    <p className="text-muted mb-1">
                      <a
                        href="rm4888752@gmail.com"
                        className="text-decoration-none"
                      >
                        rm4888752@gmail.com
                      </a>
                    </p>
                  </div>
                </div>

                <div className="d-flex">
                  <div
                    className="bg-primary bg-opacity-10 text-primary rounded-circle d-flex align-items-center justify-content-center"
                    style={{ width: "50px", height: "50px", flexShrink: 0 }}
                  >
                    <i className="fas fa-clock fs-5"></i>
                  </div>
                  <div className="ms-3">
                    <h5 className="mb-1">Working Hours</h5>
                    <p className="text-muted mb-1">
                      Monday - Friday: 9:00 AM - 8:00 PM
                    </p>
                    <p className="text-muted mb-0">
                      Saturday - Sunday: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Col>

          {/* Contact Form Section with Image */}
          <Col lg={6}>
            <div className="d-flex flex-column h-100">
              <div className="bg-white p-4 rounded shadow-sm mb-4">
                <h2 className="mb-4 text-primary">Send Us a Message</h2>
                <Form>
                  <Row>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col md={6}>
                      <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </Col>
                  </Row>

                  <Form.Group className="mb-3" controlId="formPhone">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter your phone number"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubject">
                    <Form.Label>Subject</Form.Label>
                    <Form.Select required>
                      <option value="" disabled selected>
                        Select a subject
                      </option>
                      <option value="general">General Inquiry</option>
                      <option value="order">Order Issue</option>
                      <option value="return">Return/Exchange</option>
                      <option value="product">Product Question</option>
                      <option value="payment">Payment Issue</option>
                      <option value="other">Other</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group className="mb-4" controlId="formMessage">
                    <Form.Label>Your Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Enter your message"
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="primary"
                    type="submit"
                    className="w-100 py-2"
                  >
                    Send Message
                  </Button>
                </Form>
              </div>

              <div
                className="ratio ratio-16x9"
                style={{ borderRadius: "10px", overflow: "hidden" }}
              >
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Send Message"
                  className="img-fluid w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </Col>
        </Row>

        {/* Map Section */}
        <Row className="mb-5">
          <Col>
            <div className="rounded overflow-hidden shadow-sm ratio ratio-16x9">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.715625928644!2d72.8242143153774!3d19.04372225796782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8afbfffffff%3A0x14b7f112d6e9f9e1!2sGateway%20of%20India!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* FAQ Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-5 text-primary">
              Frequently Asked Questions
            </h2>

            <div className="accordion" id="faqAccordion">
              <div className="accordion-item mb-3 border-0 shadow-sm">
                <h3 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    How can I track my order?
                  </button>
                </h3>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Once your order is shipped, you'll receive a tracking number
                    via email. You can use this number on our website or the
                    courier's website to track your package.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-0 shadow-sm">
                <h3 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    What is your return policy?
                  </button>
                </h3>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We accept returns within 30 days of purchase. Items must be
                    unused, in their original packaging with tags attached.
                    Please contact our support team to initiate a return.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-0 shadow-sm">
                <h3 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    How long does delivery take?
                  </button>
                </h3>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Delivery times vary by location. For metro cities, delivery
                    typically takes 2-3 business days. For other locations, it
                    may take 5-7 business days.
                  </div>
                </div>
              </div>

              <div className="accordion-item mb-3 border-0 shadow-sm">
                <h3 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What payment methods do you accept?
                  </button>
                </h3>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    We accept all major credit/debit cards, UPI payments, net
                    banking, and popular wallets like Paytm and PhonePe. Cash on
                    delivery is also available for most products.
                  </div>
                </div>
              </div>

              <div className="accordion-item border-0 shadow-sm">
                <h3 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Do you offer international shipping?
                  </button>
                </h3>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Currently, we only ship within India. We're working on
                    expanding our services internationally in the near future.
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactPage;
