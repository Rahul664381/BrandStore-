import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const PricingSection = () => {
  const plans = [
    {
      name: "Basic",
      price: "$999",
      month: "/month",
      annually: "$199 per month if paid annually",
      features: [
        "5 products",
        "Up to 1,000 subscribers",
        "Basic analytics",
        "48-hour support response time",
      ],
    },
    {
      name: "Essential",
      price: "$4999",
      month: "/month",
      annually: "$39 per month if paid annually",
      features: [
        "25 products",
        "Up to 10,000 subscribers",
        "Advanced analytics",
        "24-hour support response time",
        "Marketing automations",
      ],
    },
    {
      name: "Growth",
      price: "$99999",
      month: "/month",
      annually: "$179 per month if paid annually",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
    },
  ];

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <p className="text-primary fw-bold">Pricing</p>
        <h2 className="fw-bold">Pricing that grows with you</h2>
        <p className="text-muted">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="row g-4">
        {plans.map((plan, idx) => (
          <div className="col-12 col-md-4" key={idx}>
            <div className="border p-4 h-100 shadow-sm rounded">
              <h5 className="fw-bold">{plan.name}</h5>
              <h2 className="fw-bold">
                {plan.price}
                <small className="fs-5 text-muted">{plan.month}</small>
              </h2>
              <p className="text-muted">{plan.annually}</p>
              <button
                className="btn btn-primary w-100 mb-3"
                style={{ backgroundColor: "#5A33E6" }}
              >
                Buy plan
              </button>
              <ul className="list-unstyled">
                {plan.features.map((feature, index) => (
                  <li key={index} className="mb-2 d-flex align-items-start">
                    <span className="text-primary me-2">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingSection;
