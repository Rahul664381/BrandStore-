import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar, FaCartPlus } from "react-icons/fa";

function Home_Electronics() {
  const electronicsItems = [
    {
      id: 1,
      title: "Smartphone X12 Pro",
      desc: "6.7-inch AMOLED display, 128GB storage",
      price: "$799.99",
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Ultra HD Smart TV",
      desc: "55-inch 4K HDR Smart Television",
      price: "$649.99",
      rating: 4.2,
      img: "https://kannankandyestore.com/wp-content/uploads/2024/11/BPL-43-UHD-ANDROID-493711880-i-1-1200Wx1200H.jpeg",
    },
    {
      id: 3,
      title: "Wireless Earbuds Pro",
      desc: "Noise cancelling bluetooth earbuds",
      price: "$199.99",
      rating: 4.7,
      img: "https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 4,
      title: "Gaming Laptop Elite",
      desc: "RTX 3080, 32GB RAM, 1TB SSD",
      price: "$2199.99",
      rating: 4.8,
      img: "https://s.alicdn.com/@sc04/kf/Ha19ce751ebe5408a8c721a4ae2796fadt.png_720x720q50.png",
    },
    {
      id: 5,
      title: "Smart Watch Series 5",
      desc: "Fitness tracking & heart rate monitor",
      price: "$249.99",
      rating: 4.3,
      img: "https://assets.ajio.com/medias/sys_master/root/20240222/xyMu/65d77d9516fd2c6e6a14bb21/-473Wx593H-4943525460-multi-MODEL3.jpg",
    },
    {
      id: 6,
      title: "Wireless Keyboard & Mouse",
      desc: "Ergonomic design, silent click",
      price: "$59.99",
      rating: 4.1,
      img: "https://m.media-amazon.com/images/I/61pUul1oDlL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 7,
      title: "Bluetooth Speaker",
      desc: "360° sound, 20hrs battery life",
      price: "$129.99",
      rating: 4.4,
      img: "https://5.imimg.com/data5/SELLER/Default/2022/10/TA/RV/QJ/78198701/music-mini-bluetooth-speaker.webp",
    },
    {
      id: 8,
      title: "DSLR Camera Pro",
      desc: "24.2MP, 4K video recording",
      price: "$899.99",
      rating: 4.6,
      img: "https://gppro.in/wp-content/uploads/2024/11/1222121212222222222121212.jpg",
    },
    {
      id: 9,
      title: "External SSD 1TB",
      desc: "Ultra-fast data transfer",
      price: "$129.99",
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/71BPuv+iRbL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 10,
      title: "Noise Cancelling Headphones",
      desc: "Over-ear wireless headphones",
      price: "$349.99",
      rating: 4.7,
      img: "https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 11,
      title: "Tablet Pro Max",
      desc: "10.9-inch, 256GB storage",
      price: "$599.99",
      rating: 4.4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoQRndj71EUbq3QnwJlxInupoFs6J_CO5dTw&s",
    },
    {
      id: 12,
      title: "Wireless Charging Pad",
      desc: "Fast charging for all devices",
      price: "$39.99",
      rating: 4.0,
      img: "https://honeywellconnection.com/in/wp-content/uploads/2024/08/main-image-4.jpg",
    },
    {
      id: 13,
      title: "Smart Home Hub",
      desc: "Control all your smart devices",
      price: "$99.99",
      rating: 4.2,
      img: "https://shop.ichibantekno.com/cdn/shop/files/24_66e9933d-422f-4c4b-9053-1295c42c7c1a.png?v=1706247854&width=1445",
    },
    {
      id: 14,
      title: "Portable Projector",
      desc: "Full HD, 200-inch display",
      price: "$299.99",
      rating: 4.1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAKXL7R9YS76S3NXsv5Qutolnhq4Bmn-hisg&s",
    },
    {
      id: 15,
      title: "Fitness Tracker Band",
      desc: "Heart rate & sleep monitoring",
      price: "$79.99",
      rating: 3.9,
      img: "https://5.imimg.com/data5/SELLER/Default/2021/1/YP/LY/FV/78305368/m4-fitness-band-500x500.png",
    },
    {
      id: 16,
      title: "Gaming Console",
      desc: "Next-gen gaming experience",
      price: "$499.99",
      rating: 4.8,
      img: "https://m.media-amazon.com/images/I/61JGKhqxHxL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 17,
      title: "Robot Vacuum Cleaner",
      desc: "Smart mapping, self-charging",
      price: "$399.99",
      rating: 4.3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRm0BkD8o_pDE5e1xAERwuJL4aAWPQHJ1Otw&s",
    },
    {
      id: 18,
      title: "Action Camera 4K",
      desc: "Waterproof, image stabilization",
      price: "$299.99",
      rating: 4.5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIzfizP9Q7Y3YFN0499HKdTzaq6h9oa9ebtg&s",
    },
    {
      id: 19,
      title: "E-Reader Paperwhite",
      desc: "Glare-free display, waterproof",
      price: "$139.99",
      rating: 4.6,
      img: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjW9s14Hg050jqSsOIj0NzavjqF9UUtP7u8PExy_lhHtUjyHFJaqMNseCU6cOHDkOUb6uW5IKFFiw3nG3MUzi0gfcvJSZHbSFHbvFU03A3mUy0MpVJ9Qclp6itkyQU-w6ASJYJrTNlQspSIPTAWAaErQWyqOqsizgsh8-9lu3YdgdEEvgYq9qjF7CfA/s640/kindle-kids-2022.jpg",
    },
    {
      id: 20,
      title: "Smart Light Bulbs",
      desc: "RGB colors, voice control",
      price: "$49.99",
      rating: 4.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTGxvIssR5Iy3r3R2O7s7cOPTarJIH7DKapw&s",
    },
    {
      id: 21,
      title: "Mechanical Keyboard",
      desc: "RGB backlit, blue switches",
      price: "$89.99",
      rating: 4.4,
      img: "https://m.media-amazon.com/images/I/71ni2lVpglL.jpg",
    },
    {
      id: 22,
      title: "Wireless Printer",
      desc: "All-in-one, mobile printing",
      price: "$129.99",
      rating: 4.1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdQrp_U5hsJEC_7vlxtnB9qY9RIp0oyVA4ew&s",
    },
    {
      id: 23,
      title: "Portable SSD 2TB",
      desc: "Thunderbolt 3 compatible",
      price: "$249.99",
      rating: 4.7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWuk-Q0brLLeP6mjtUJwOXjPruG7Uztvw9YA&s",
    },
    {
      id: 24,
      title: "VR Headset",
      desc: "Immersive virtual reality",
      price: "$299.99",
      rating: 4.2,
      img: "https://m.media-amazon.com/images/I/61RgUtmRymL.jpg",
    },
    {
      id: 25,
      title: "Smart Thermostat",
      desc: "Learning thermostat, energy saving",
      price: "$199.99",
      rating: 4.5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrRhSJC8gZ7-JFkbKmRr92kd_pOvpB2TxCUQ&s",
    },
    {
      id: 26,
      title: "Dash Cam",
      desc: "1440p recording, night vision",
      price: "$129.99",
      rating: 4.3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1vAVx2PHgG0Ddr7SzauojqtPOTkoSaPY9ag&s",
    },
    {
      id: 27,
      title: "Wireless Security Camera",
      desc: "1080p, motion detection",
      price: "$79.99",
      rating: 4.0,
      img: "https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 28,
      title: "Bluetooth FM Transmitter",
      desc: "Car audio streaming",
      price: "$29.99",
      rating: 3.8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5tLdRrPAecuEc6bZSXlz7aGriZE1xd5P5Dw&s",
    },
    {
      id: 29,
      title: "Smart Plug",
      desc: "Voice control, energy monitoring",
      price: "$24.99",
      rating: 4.1,
      img: "https://lh3.googleusercontent.com/_ig0euCAVYt2v-nOy111d9K3c0EAJ8zq2yb2Olr402eM3nJH1LQwKDutSmYQWoEd1ALjNEnjQhRCbTKPxpBJ2sEs6htuJRG8TFJ_izFuZobryA5EQa8",
    },
    {
      id: 30,
      title: "External DVD Drive",
      desc: "USB 3.0, slim design",
      price: "$39.99",
      rating: 3.9,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-NKjzMsnqW0KrqVdA1UIHl3lfRqjXB6HEhA&s",
    },
  ];

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
      <h1 className="text-center mb-5">Electronics Collection</h1>
      <div className="row g-4">
        {electronicsItems.map((item) => (
          <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="card h-100 shadow-sm">
              <img
                src={item.img}
                className="card-img-top p-3"
                alt={item.title}
                style={{ height: "200px", objectFit: "contain" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted small">{item.desc}</p>
                <div className="mt-auto">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span className="fw-bold text-primary">{item.price}</span>
                    <div className="star-rating">
                      {renderStars(item.rating)}
                    </div>
                  </div>
                  <button className="btn btn-primary w-100">
                    <FaCartPlus className="me-2" /> Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home_Electronics;
