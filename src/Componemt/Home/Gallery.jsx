import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./Gallery.css";
import { Link } from "react-router-dom";
//  import Women from "./Shop_by_Category/Home_Women";

const items = [
  {
    id: 1,
    title: "Stylish Jacket",
    desc: "Perfect for winter outings",
    price: "$59.99",
    rating: 4.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dKqJLp91zt8ZoxNHiA360uqXX4vygdfDrg&s,1",
  },
  {
    id: 2,
    title: "Casual T-shirt",
    desc: "Soft cotton comfort",
    price: "$24.99",
    rating: 3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMezbfNvp1bS0orsGJR3NOONIBkmKLIUc2TA&s,2",
  },
  {
    id: 3,
    title: "Elegant Dress",
    desc: "Perfect for parties",
    price: "$79.99",
    rating: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJd2MI8SabcA1N7I0368JfEc1TEBqYvTKUNHCJtm474wlsFX840fIzQZxCz9503Io5sVw&usqp=CAU,3",
  },
  {
    id: 4,
    title: "Running Shoes",
    desc: "Comfortable for all-day wear",
    price: "$49.99",
    rating: 4.2,
    img: "https://redtape.com/cdn/shop/files/RSO3562_1_05dbbe3f-51a5-49cd-9288-9012524fb4cb.jpg?v=1741350368,4",
  },
  {
    id: 5,
    title: "Leather Handbag",
    desc: "Classic and spacious",
    price: "$89.99",
    rating: 4.8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2nPI39XCyY1zXnI2DkFQhs-vha9jJwUQUAcVE1Sw6hHNN9DTUH9sd718L6nQMvaWFlt8&usqp=CAU,5",
  },
  {
    id: 6,
    title: "Summer Hat",
    desc: "Stay cool in style",
    price: "$19.99",
    rating: 3.5,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_C0xitptf_TC6dyvjfZ4wNIEsBC8AV0hHGHj4yY5APdb2qdI3Ko4it9Dqf0Cf7ISPCQ&usqp=CAU,6",
  },
  {
    id: 7,
    title: "Designer Sunglasses",
    desc: "UV protection with fashion",
    price: "$39.99",
    rating: 4.7,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuK4W9a6Jm1YxrXg8N36yHXT-p1XxdEpFz1FppbAyMoR6_jbXg_JOWouMux5M1VheT-N4&usqp=CAU,7",
  },
  {
    id: 8,
    title: "Classic Watch",
    desc: "Timeless elegance",
    price: "$129.99",
    rating: 4.9,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6miJ4tXXwRLvEFDut3vNfp7gV1kS524LMn9vzgJSvU4s5x35efC518d-ygmlf8eKPd2E&usqp=CAU,8",
  },
  {
    id: 9,
    title: "Denim Jeans",
    desc: "Comfort fit for daily wear",
    price: "$44.99",
    rating: 4,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR20IvKEoUwlkXwBqzS4o8j9pYv8R2OpJWncNu65pV2ZiZdPeLJ1xaucs3J99PRlnJ3J1M&usqp=CAU,9",
  },
  {
    id: 10,
    title: "Fitness Tracker",
    desc: "Track your health and steps",
    price: "$59.99",
    rating: 4.3,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShUJAaE9hQDmeYPEKqkQNw-vlz5SR76XJkCRPZDemJKPGG6NPENDLO2beeUbZob7Su6BA&usqp=CAU,10",
  },
  {
    id: 11,
    title: "Winter Gloves",
    desc: "Warm and stylish",
    price: "$14.99",
    rating: 3.8,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ2nSg_R7gnTcOQGFvkz_-H4xDySkT_Nd7zA&s,11",
  },
  {
    id: 12,
    title: "Sport Shorts",
    desc: "Flexible and breathable",
    price: "$29.99",
    rating: 4.1,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ92zG6-U5usZq530a9NHWAvjiXsmatkwHia1vH6MJSH46nrHitaPCPwNeo1QIHR4Yp7ik&usqp=CAU,12",
  },
];

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<i key={i} className="fas fa-star"></i>);
    } else if (rating >= i - 0.5) {
      stars.push(<i key={i} className="fas fa-star-half-alt"></i>);
    } else {
      stars.push(<i key={i} className="far fa-star"></i>);
    }
  }
  return stars;
};

const Gallery = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Gallery</h2>
      <div className="row g-4">
        {items.map((item) => (
          <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
            <div className="card border-0 shadow-sm overflow-hidden">
              <img
                src={item.img}
                className="card-img"
                alt={item.title}
                style={{ height: "300px" }}
              />
              <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                <h5 className="card-title text-white">{item.title}</h5>
                <p className="card-text small text-white">{item.desc}</p>
                <p className="mb-1 text-white">Price: {item.price}</p>
                <div className="star-rating mb-2 text-warning">
                  {renderStars(item.rating)}
                </div>
                {/* <Link button className="btn btn-light btn-sm" to={Women}>Explore Now</button </Link>> */}
                <Link className="btn btn-light btn-sm" to="/women">
                  Explore Now
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
