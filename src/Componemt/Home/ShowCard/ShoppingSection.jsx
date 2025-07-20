import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
  FaRegHeart,
  FaTimes,
  FaPlus,
  FaMinus,
  FaCheck,
  FaArrowRight,
  FaCreditCard,
  FaGoogle,
  FaMobile,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ShoppingSection = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "online",
    paymentType: "credit",
  });
  const [cart, setCart] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [checkoutStep, setCheckoutStep] = useState(1);

  // Product image sets for each product
  const productImageSets = {
    1: [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/15622444/2023/6/15/414359a3-d249-45e3-89ee-87327078c1db1686812736703-NOISE-Buds-VS102-Truly-Wireless-Earbuds-with-50hrs-playtime--1.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/61YuLD6kWxL._AC_UL210_SR210,210_.jpg",
      "https://5.imimg.com/data5/UU/ZX/GO/SELLER-5106337/noise-shots-neo-truly-wireless-earphones.jpg",
    ],
    2: [
      "https://www.notebookcheck.net/fileadmin/Notebooks/Huawei/Band_4_Pro/Huawei_band_4_pro.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5aNqjmN6LVZ39Eo5mLThPrpZ6GrBwXUAI1g&s",
      "https://smartwatch-straps.co.uk/cdn/shop/files/huawei-band-8-nylon-band-zwart.jpg?v=1725179238",
    ],
    3: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPzO2aUkPx4r1SIu1Q6_GPnQu-XQG-1F8Pow&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-xWucJweaB47iDn-pEYso-GPQdah0P6r1SYUjhF4bpgPUmdiRbZ7BC6pSDUQNHXCdxAc&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8NLKgnp21TQSDxU10GAvQSc7gcAny1Qstg&s",
    ],
    4: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVeCZxnMPis1l9bxEoBXsF4lRdQ3JlDy5Gg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwVfpAwYRJVgQ6ChYN3wLOLTdaBjRKQMa_j-xcxsUzeyl1JAc2ezI96SsmwQTyeYhQ-Q&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqqNEy9HRqxrMg2NUHnAFAxxoQJCrOmk0Sw&s",
    ],
    5: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJRakrBO4ln97EeTXsUI3GWLZQ-BRD9ee5Ug&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpdLLKzIQ7knEMdLOUfPwT-Honol_f6zcz3w&s",
      "https://m.media-amazon.com/images/I/61LhfQRdEgL.jpg",
    ],
    6: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXb_Wh7aVtpRGnAqV3c66n7HHbqLAaDFL0Vg&s",
      "https://happygentleman.com/wp-content/uploads/2019/11/ucm100-mens-real-leather-bomber-hood-jacket-black5.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEuUQz3y15wLm2odo5AbGq8Yq2MkrObDGcA&s",
    ],
    7: [
      "https://static.india.com/wp-content/uploads/2024/06/Asics-Novablast-.jpg",
      "https://manufactur3dmag.com/wp-content/uploads/2024/08/Adidas-New-3D-Printed-Running-Shoe-4DFWD.jpg",
      "https://3dprint.com/wp-content/uploads/2023/10/Brooks-Ehilarate-BL_Fnl-Hero-scaled.jpg",
    ],
    8: [
      "https://www.glassesindia.com/cdn/shop/files/Black-Gold-Square-Pilot-Rimless-Sunglasses-1.jpg?v=1708406571",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbNhzFVeNUXUDQzuHGhryHSxqI0JQO4GyBog&s",
      "https://assets.ajio.com/medias/sys_master/root/20240209/BSPk/65c63e6d05ac7d77bb4b55ef/-1117Wx1400H-469604844-black-MODEL6.jpg",
    ],
    9: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOcT8eCxcHyWMlFV9fEgQou2F6y41ydrhz6w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrtfSvXhctq-opm_s3UUB5DyyIcJFD1bPR0gMIdlPrNNpwTqelqFopu6sEN4I3j1Xo1rI&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuG9bJ6XMP0gBxqAafLy5GCs3rWMc1WNyKuQ&s",
    ],
    10: [
      "https://www.militiazone.in/image/cache/catalog/products/RB-WANDERTAC-MILITARY-GREEN/1-735x735.jpg",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoQTmlrihYafDeA2_NT4fIaeKfp70YttpuV9xNmwwNZmdlq4zaRhRWIvCtONrRtT8ut_s&usqp=CAU",
      "https://images-cdn.ubuy.co.in/63c4da9334f08b4c972e8912-mt-military-alice-small-pack-army.jpg",
    ],
    11: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRopTGCSEJCW0OTHIxijqa7my7p5V95Y48cAg&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgvbWrtS73fv_x_b1d_od9dJCyE685BbFlw&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9pSW8tMjqFMwigjWAKpa3xWXIVnIU9hLOkImEwDoGDb8h0R0Seobi-CWpoVCzoD7ClE&usqp=CAU",
    ],
    12: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR78FoWLD-Tnhz3UHhgPvIv1dfcJgAK76S70g&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSaG8NU0NnXNUvVdlxomyiSV80w5it4c7Yag&s",
      "https://content.jdmagicbox.com/quickquotes/images_main/crown-coffee-machines-2220515381-qg7tr39h.jpg?impolicy=queryparam&im=Resize=(360,360),aspect=fit",
    ],
    13: [
      "https://www.hindustantimes.com/ht-img/img/2024/06/13/1600x900/Robotic_Vacuum_Cleaner__1718278717424_1718278717746.jpg",
      "https://static.rendeljkinait.hu/uploads/2024/04/ILIFE-T10s-onuritos-robotporszivo-01.jpg",
      "https://5.imimg.com/data5/SELLER/Default/2025/2/491693146/AW/HT/BS/151156198/s10-ultra-robot-vacuum-cleaner.png",
    ],
    14: [
      "https://i.pinimg.com/736x/09/a2/9b/09a29b548a8d59e66b1178ef447aafc7.jpg",
      "https://www.antmascot.com/_next/image?url=https%3A%2F%2Fantmascot.s3.ap-south-1.amazonaws.com%2Fimages%2Fproducts%2FMG%2520-%2520225.1.png&w=3840&q=20",
      "https://i.pinimg.com/736x/ec/8c/42/ec8c42c24e9d96889fb49353fdec4d74.jpg",
    ],
    15: [
      "https://www.milton.in/cdn/shop/files/Vienna_electric_kettle_1.jpg?v=1736933946",
      "https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1737107799/Croma%20Assets/Small%20Appliances/Kettles/Images/310925_0_tngywe.png",
      "https://media.croma.com/image/upload/v1737107733/Croma%20Assets/Small%20Appliances/Kettles/Images/306529_0_adc6jl.png",
    ],
    16: [
      "https://lucy.ng/products/60c9c28b0ba78.jpeg",
      "https://plantlane.com/cdn/shop/products/mat1.jpg?v=1681775274",
      "https://www.kuberindustries.co.in/uploads/kuberindustries/products/kuber-industries-yoga-mat--eva-foam-workout-mat--anti-skid-floor-exercise-mat--carpet-mat-for-gym-fi-94572706081046_l.jpg",
    ],
    17: [
      "https://images-cdn.ubuy.qa/63daf5d187ac9f62da37e352-adjustable-weight-dumbbell-barbell-set.jpg",
      "https://www.cockatooindia.com/cdn/shop/files/18RED.jpg?v=1737373878&width=1000",
      "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Medium/20230508105038-552ac517-e288-49fd-8cab-39bc25c49f9c.jpg",
    ],
    18: [
      "https://www.hacer.in/media/catalog/product/0/1/01.jpg",
      "https://image.made-in-china.com/202f0j00luqcmNVtnobG/Outdoor-Camping-Tent-Two-Rooms-Portable-Family-Waterproof-Double-Layer-Tent.webp",
      "https://5.imimg.com/data5/MU/DV/MY-2/family-tents.png",
    ],
    19: [
      "https://d2f9uwgpmber13.cloudfront.net/public/uploads/mobile/7670d99005b7c47a1718111931625.png",
      "https://m.media-amazon.com/images/I/81rWgAUosSL.jpg",
      "https://s.alicdn.com/@sc04/kf/H5037d9e6cad24c6d8230c787b42c28f5A.jpg",
    ],
    20: [
      "https://5.imimg.com/data5/ECOM/Default/2024/10/461710296/NC/UC/IM/31455288/sniper31grey-01-500x500.jpg",
      "https://img.tatacliq.com/images/i19//437Wx649H/MP000000023531944_437Wx649H_202409040122013.jpeg",
      "https://assets.ajio.com/medias/sys_master/root/20240924/rXKa/66f2ced3260f9c41e822e7ac/-473Wx593H-469681884-cobalt-MODEL.jpg",
    ],
  };

  const categories = {
    Electronics: [
      {
        id: 1,
        title: "Wireless Earbuds",
        description: "Noise cancelling wireless earbuds with 20hr battery life",
        price: 129.99,
        discount: 15,
        image: productImageSets[1][0],
      },
      {
        id: 2,
        title: "Smart Watch",
        description: "Fitness tracker with heart rate monitor and GPS",
        price: 199.99,
        discount: 10,
        image: productImageSets[2][0],
      },
      {
        id: 3,
        title: "Bluetooth Speaker",
        description: "Portable waterproof speaker with deep bass",
        price: 89.99,
        discount: 20,
        image: productImageSets[3][0],
      },
      {
        id: 4,
        title: "4K Camera",
        description: "Professional DSLR camera with 4K video recording",
        price: 899.99,
        discount: 12,
        image: productImageSets[4][0],
      },
      {
        id: 5,
        title: "Gaming Headset",
        description: "Surround sound gaming headset with microphone",
        price: 79.99,
        discount: 18,
        image: productImageSets[5][0],
      },
    ],
    Fashion: [
      {
        id: 6,
        title: "Leather Jacket",
        description: "Genuine leather jacket with multiple pockets",
        price: 149.99,
        discount: 25,
        image: productImageSets[6][0],
      },
      {
        id: 7,
        title: "Running Shoes",
        description: "Lightweight running shoes with cushioned soles",
        price: 89.99,
        discount: 15,
        image: productImageSets[7][0],
        lastUpdated: "10 mins ago",
      },
      {
        id: 8,
        title: "Designer Sunglasses",
        description: "UV protected polarized sunglasses",
        price: 59.99,
        discount: 10,
        image: productImageSets[8][0],
      },
      {
        id: 9,
        title: "Smart Watch",
        description: "Waterproof smartwatch with fitness tracking",
        price: 159.99,
        discount: 12,
        image: productImageSets[9][0],
      },
      {
        id: 10,
        title: "Backpack",
        description: "Durable backpack with laptop compartment",
        price: 49.99,
        discount: 5,
        image: productImageSets[10][0],
      },
    ],
    "Home & Kitchen": [
      {
        id: 11,
        title: "Air Fryer",
        description: "Digital air fryer with multiple cooking functions",
        price: 99.99,
        discount: 20,
        image: productImageSets[11][0],
      },
      {
        id: 12,
        title: "Coffee Maker",
        description: "Programmable coffee maker with thermal carafe",
        price: 79.99,
        discount: 15,
        image: productImageSets[12][0],
      },
      {
        id: 13,
        title: "Robot Vacuum",
        description: "Smart robot vacuum with app control",
        price: 299.99,
        discount: 10,
        image: productImageSets[13][0],
      },
      {
        id: 14,
        title: "Blender",
        description: "High-speed blender for smoothies and soups",
        price: 59.99,
        discount: 5,
        image: productImageSets[14][0],
      },
      {
        id: 15,
        title: "Electric Kettle",
        description: "Stainless steel electric kettle with auto shut-off",
        price: 39.99,
        discount: 8,
        image: productImageSets[15][0],
      },
    ],
    "Sports & Outdoors": [
      {
        id: 16,
        title: "Yoga Mat",
        description: "Non-slip eco-friendly yoga mat",
        price: 249.99,
        discount: 4,
        image: productImageSets[16][0],
      },
      {
        id: 17,
        title: "Dumbbell Set",
        description: "Adjustable dumbbell set for home workouts",
        price: 129.99,
        discount: 15,

        image: productImageSets[17][0],
      },
      {
        id: 18,
        title: "Camping Tent",
        description: "4-person waterproof camping tent",
        price: 149.99,
        discount: 20,
        image: productImageSets[18][0],
      },
      {
        id: 19,
        title: "Bicycle",
        description: "Mountain bike with 21-speed gears",
        price: 399.99,
        discount: 12,
        image: productImageSets[19][0],
      },
      {
        id: 20,
        title: "Running Shoes",
        description: "Breathable running shoes with cushioned soles",
        price: 79.99,
        discount: 10,
        image: productImageSets[20][0],
      },
    ],
  };

  useEffect(() => {
    let timer;
    if (paymentSuccess) {
      timer = setTimeout(() => {
        setPaymentSuccess(false);
        setCart([]);
        setShowModal(false);
        setCheckoutStep(1);
        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          paymentMethod: "online",
          paymentType: "credit",
        });
      }, 30000);
    }
    return () => clearTimeout(timer);
  }, [paymentSuccess]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    const selectedImage = productImageSets[product.id][activeImage];

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
                selectedImage: selectedImage,
              }
            : item
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...product,
          quantity: quantity,
          selectedImage: selectedImage,
        },
      ]);
    }

    setCheckoutStep(2);
    setQuantity(1);
  };

  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const calculateSubtotal = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * (1 - item.discount / 100) * item.quantity,
      0
    );
  };

  const calculateTotalDiscount = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * (item.discount / 100) * item.quantity,
      0
    );
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) =>
        total + item.price * (1 - item.discount / 100) * item.quantity,
      0
    );
  };

  const handleProceedToPayment = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setCheckoutStep(3);
    }, 1500);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setPaymentSuccess(true);
    }, 2000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleImageChange = (index) => {
    setActiveImage(index);
  };

  return (
    <div className="container py-3 py-md-5">
      {isLoading && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.7)",
            zIndex: 9999,
          }}
        >
          <div
            className="spinner-border text-primary"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="ms-3 text-white">Processing your order...</div>
        </div>
      )}

      <h1 className="mb-4 text-center text-md-start">Our Products</h1>

      <div className="product-container">
        {Object.entries(categories).map(([category, products]) => (
          <div key={category} className="mb-5">
            <h2 className="mb-4 text-center text-md-start">{category}</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
              {products.map((product) => (
                <motion.div
                  key={product.id}
                  className="col"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="card h-100 border-0 shadow-sm overflow-hidden"
                    whileHover={{ y: -5 }}
                  >
                    <div className="position-absolute bg-danger text-white px-2 py-1 m-2 rounded">
                      {product.discount}% OFF
                    </div>

                    <button
                      className="position-absolute bg-white rounded-circle border-0 p-2 m-2"
                      style={{ right: 0 }}
                    >
                      <FaRegHeart className="text-secondary" />
                    </button>

                    <motion.img
                      src={product.image}
                      className="card-img-top object-fit-cover"
                      alt={product.title}
                      style={{
                        height: "200px",
                        width: "100%",
                        objectFit: "contain",
                        padding: "10px",
                        backgroundColor: "#f8f9fa",
                      }}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      onClick={() => {
                        setSelectedProduct(product);
                        setShowModal(true);
                        setCheckoutStep(1);
                        setActiveImage(0);
                      }}
                    />

                    <div className="card-body d-flex flex-column">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text text-muted small flex-grow-1">
                        {product.description}
                      </p>

                      <div className="d-flex justify-content-between align-items-center mb-2">
                        <span className="text-warning">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                          <FaRegStar />
                        </span>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-auto">
                        <div>
                          <span className="text-danger h5">
                            $
                            {(
                              product.price *
                              (1 - product.discount / 100)
                            ).toFixed(2)}
                          </span>
                          <span className="text-decoration-line-through text-muted small ms-2">
                            ${product.price.toFixed(2)}
                          </span>
                        </div>
                      </div>

                      <div className="d-flex justify-content-between align-items-center mt-2">
                        {/* <small className="text-body-secondary">
                          Updated: {product.lastUpdated}
                        </small> */}
                        <motion.button
                          className="btn btn-primary btn-sm rounded-pill"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => {
                            setSelectedProduct(product);
                            setShowModal(true);
                            setCheckoutStep(1);
                            setActiveImage(0);
                          }}
                        >
                          <FaShoppingCart className="me-1" /> Add to Cart
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedProduct && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <motion.div
              className="modal-content"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="modal-header">
                <h5 className="modal-title">
                  {checkoutStep === 1 && selectedProduct.title}
                  {checkoutStep === 2 && "Review Your Order"}
                  {checkoutStep === 3 && "Complete Payment"}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => {
                    setShowModal(false);
                    setCheckoutStep(1);
                  }}
                >
                  <FaTimes />
                </button>
              </div>
              <div className="modal-body p-3 p-md-4">
                {checkoutStep === 1 && (
                  <div className="row">
                    <div className="col-md-6 mb-4 mb-md-0">
                      <img
                        src={productImageSets[selectedProduct.id][activeImage]}
                        className="img-fluid rounded mb-3"
                        alt={selectedProduct.title}
                        style={{
                          maxHeight: "300px",
                          width: "100%",
                          objectFit: "contain",
                          padding: "10px",
                          backgroundColor: "#f8f9fa",
                        }}
                      />

                      <div className="d-flex justify-content-between flex-wrap">
                        {productImageSets[selectedProduct.id].map(
                          (img, index) => (
                            <motion.img
                              key={index}
                              src={img}
                              className={`img-thumbnail cursor-pointer mb-2 ${
                                activeImage === index ? "border-primary" : ""
                              }`}
                              alt={`Thumbnail ${index + 1}`}
                              style={{
                                width: "30%",
                                height: "80px",
                                objectFit: "contain",
                                padding: "5px",
                                backgroundColor: "#f8f9fa",
                              }}
                              onClick={() => handleImageChange(index)}
                              whileHover={{ scale: 1.05 }}
                            />
                          )
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h4>{selectedProduct.title}</h4>
                      <p className="text-muted">
                        {selectedProduct.description}
                      </p>

                      <div className="d-flex align-items-center mb-3">
                        <span className="text-warning me-2">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfAlt />
                          <FaRegStar />
                        </span>
                        <span className="text-muted small">(24 reviews)</span>
                      </div>

                      <div className="mb-3">
                        <span className="text-danger h4">
                          $
                          {(
                            selectedProduct.price *
                            (1 - selectedProduct.discount / 100)
                          ).toFixed(2)}
                        </span>
                        <span className="text-decoration-line-through text-muted ms-2">
                          ${selectedProduct.price.toFixed(2)}
                        </span>
                        <span className="badge bg-danger ms-2">
                          {selectedProduct.discount}% OFF
                        </span>
                      </div>

                      <div className="d-flex align-items-center mb-4">
                        <span className="me-3">Quantity:</span>
                        <div className="input-group" style={{ width: "120px" }}>
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange("decrease")}
                          >
                            <FaMinus />
                          </button>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={quantity}
                            readOnly
                          />
                          <button
                            className="btn btn-outline-secondary"
                            onClick={() => handleQuantityChange("increase")}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>

                      <div className="mb-3">
                        <h5>
                          Total:
                          <span className="text-primary ms-2">
                            $
                            {(
                              selectedProduct.price *
                              quantity *
                              (1 - selectedProduct.discount / 100)
                            ).toFixed(2)}
                          </span>
                        </h5>
                      </div>

                      <button
                        className="btn btn-primary w-100"
                        onClick={() => handleAddToCart(selectedProduct)}
                      >
                        Add to Cart & Proceed <FaArrowRight className="ms-2" />
                      </button>
                    </div>
                  </div>
                )}

                {checkoutStep === 2 && (
                  <div>
                    <div className="table-responsive mb-4">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th className="text-center">Quantity</th>
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
                                    src={
                                      item.selectedImage ||
                                      productImageSets[item.id][0]
                                    }
                                    alt={item.title}
                                    className="img-thumbnail me-2"
                                    style={{
                                      width: "50px",
                                      height: "50px",
                                      objectFit: "contain",
                                    }}
                                  />
                                  <div>
                                    <div>{item.title}</div>
                                    <small className="text-muted">
                                      {item.discount}% OFF
                                    </small>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <div>
                                  $
                                  {(
                                    item.price *
                                    (1 - item.discount / 100)
                                  ).toFixed(2)}
                                </div>
                                <small className="text-muted">
                                  <s>${item.price.toFixed(2)}</s>
                                </small>
                              </td>
                              <td>
                                <div className="d-flex justify-content-center">
                                  <div
                                    className="input-group input-group-sm"
                                    style={{ width: "120px" }}
                                  >
                                    <button
                                      className="btn btn-outline-secondary"
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity - 1
                                        )
                                      }
                                    >
                                      <FaMinus />
                                    </button>
                                    <input
                                      type="text"
                                      className="form-control text-center"
                                      value={item.quantity}
                                      readOnly
                                    />
                                    <button
                                      className="btn btn-outline-secondary"
                                      onClick={() =>
                                        updateQuantity(
                                          item.id,
                                          item.quantity + 1
                                        )
                                      }
                                    >
                                      <FaPlus />
                                    </button>
                                  </div>
                                </div>
                              </td>
                              <td>
                                $
                                {(
                                  item.price *
                                  (1 - item.discount / 100) *
                                  item.quantity
                                ).toFixed(2)}
                              </td>
                              <td>
                                <button
                                  className="btn btn-sm btn-danger"
                                  onClick={() => handleRemoveFromCart(item.id)}
                                >
                                  <FaTimes />
                                </button>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                        <tfoot>
                          <tr>
                            <td colSpan="3" className="text-end fw-bold">
                              Subtotal:
                            </td>
                            <td className="fw-bold">
                              ${calculateSubtotal().toFixed(2)}
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <td
                              colSpan="3"
                              className="text-end fw-bold text-danger"
                            >
                              Total Discount:
                            </td>
                            <td className="fw-bold text-danger">
                              -${calculateTotalDiscount().toFixed(2)}
                            </td>
                            <td></td>
                          </tr>
                          <tr>
                            <td colSpan="3" className="text-end fw-bold">
                              Grand Total:
                            </td>
                            <td className="fw-bold h5">
                              ${calculateTotal().toFixed(2)}
                            </td>
                            <td></td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>

                    <button
                      className="btn btn-primary w-100"
                      onClick={handleProceedToPayment}
                    >
                      Proceed to Payment <FaArrowRight className="ms-2" />
                    </button>
                  </div>
                )}

                {checkoutStep === 3 && (
                  <div>
                    {paymentSuccess ? (
                      <div className="text-center py-4">
                        <FaCheck className="text-success mb-3" size={48} />
                        <h4>Payment Successful!</h4>
                        <p className="text-muted">
                          Thank you for your purchase. Your order will be
                          shipped soon.
                        </p>
                        <div className="alert alert-info mt-3">
                          <strong>Order Details:</strong>
                          <div>Name: {formData.name}</div>
                          <div>Email: {formData.email}</div>
                          <div>Phone: {formData.phone}</div>
                          <div>Address: {formData.address}</div>
                          <div>
                            Payment Method:{" "}
                            {formData.paymentMethod === "online"
                              ? "Online Payment"
                              : "Cash on Delivery"}
                          </div>
                          {formData.paymentMethod === "online" && (
                            <div>
                              Payment Type:{" "}
                              {formData.paymentType === "credit" &&
                                "Credit Card"}
                              {formData.paymentType === "gpay" && "Google Pay"}
                              {formData.paymentType === "phonepe" && "PhonePe"}
                              {formData.paymentType === "paytm" && "Paytm"}
                            </div>
                          )}
                        </div>

                        <div className="mt-4">
                          <h5>Purchased Products:</h5>
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
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <img
                                          src={
                                            item.selectedImage ||
                                            productImageSets[item.id][0]
                                          }
                                          alt={item.title}
                                          className="img-thumbnail me-2"
                                          style={{
                                            width: "50px",
                                            height: "50px",
                                            objectFit: "contain",
                                          }}
                                        />
                                        <div>
                                          <div>{item.title}</div>
                                          <small className="text-muted">
                                            {item.discount}% OFF
                                          </small>
                                        </div>
                                      </div>
                                    </td>
                                    <td>{item.quantity}</td>
                                    <td>
                                      $
                                      {(
                                        item.price *
                                        (1 - item.discount / 100)
                                      ).toFixed(2)}
                                    </td>
                                    <td>
                                      $
                                      {(
                                        item.price *
                                        (1 - item.discount / 100) *
                                        item.quantity
                                      ).toFixed(2)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                              <tfoot>
                                <tr>
                                  <td colSpan="2"></td>
                                  <td className="fw-bold">Subtotal:</td>
                                  <td className="fw-bold">
                                    ${calculateSubtotal().toFixed(2)}
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="2"></td>
                                  <td className="fw-bold text-danger">
                                    Discount:
                                  </td>
                                  <td className="fw-bold text-danger">
                                    -${calculateTotalDiscount().toFixed(2)}
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="2"></td>
                                  <td className="fw-bold">Grand Total:</td>
                                  <td className="fw-bold">
                                    ${calculateTotal().toFixed(2)}
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <form onSubmit={handlePaymentSubmit}>
                        <div className="mb-4">
                          <h5>Order Summary</h5>
                          <div className="table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th>Product</th>
                                  <th>Price</th>
                                  <th>Qty</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {cart.map((item) => (
                                  <tr key={item.id}>
                                    <td>
                                      <div className="d-flex align-items-center">
                                        <img
                                          src={
                                            item.selectedImage ||
                                            productImageSets[item.id][0]
                                          }
                                          alt={item.title}
                                          className="img-thumbnail me-2"
                                          style={{
                                            width: "40px",
                                            height: "40px",
                                            objectFit: "contain",
                                          }}
                                        />
                                        <div>
                                          <div>{item.title}</div>
                                          <small className="text-muted">
                                            {item.discount}% OFF
                                          </small>
                                        </div>
                                      </div>
                                    </td>
                                    <td>
                                      <div>
                                        $
                                        {(
                                          item.price *
                                          (1 - item.discount / 100)
                                        ).toFixed(2)}
                                      </div>
                                      <small className="text-muted">
                                        <s>${item.price.toFixed(2)}</s>
                                      </small>
                                    </td>
                                    <td>{item.quantity}</td>
                                    <td>
                                      $
                                      {(
                                        item.price *
                                        (1 - item.discount / 100) *
                                        item.quantity
                                      ).toFixed(2)}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                              <tfoot>
                                <tr>
                                  <td colSpan="3" className="text-end fw-bold">
                                    Subtotal:
                                  </td>
                                  <td className="fw-bold">
                                    ${calculateSubtotal().toFixed(2)}
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    colSpan="3"
                                    className="text-end fw-bold text-danger"
                                  >
                                    Total Discount:
                                  </td>
                                  <td className="fw-bold text-danger">
                                    -${calculateTotalDiscount().toFixed(2)}
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="3" className="text-end fw-bold">
                                    Grand Total:
                                  </td>
                                  <td className="fw-bold h5">
                                    ${calculateTotal().toFixed(2)}
                                  </td>
                                </tr>
                              </tfoot>
                            </table>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
                            <label htmlFor="name" className="form-label">
                              Full Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              required
                            />
                          </div>
                          <div className="col-md-6 mb-3">
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
                        </div>

                        <div className="row">
                          <div className="col-md-6 mb-3">
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
                              pattern="[0-9]{10}"
                              title="Please enter a 10-digit phone number"
                            />
                          </div>
                          <div className="col-md-6 mb-3">
                            <label className="form-label">Payment Method</label>
                            <div className="d-flex flex-wrap">
                              <div className="form-check me-3">
                                <input
                                  className="form-check-input"
                                  type="radio"
                                  name="paymentMethod"
                                  id="onlinePayment"
                                  value="online"
                                  checked={formData.paymentMethod === "online"}
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
                                  id="offlinePayment"
                                  value="offline"
                                  checked={formData.paymentMethod === "offline"}
                                  onChange={handleInputChange}
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="offlinePayment"
                                >
                                  Cash on Delivery
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label htmlFor="address" className="form-label">
                            Shipping Address
                          </label>
                          <textarea
                            className="form-control"
                            id="address"
                            name="address"
                            rows="3"
                            value={formData.address}
                            onChange={handleInputChange}
                            required
                          ></textarea>
                        </div>

                        {formData.paymentMethod === "online" && (
                          <div className="mb-4">
                            <label className="form-label">Payment Type</label>
                            <div className="row">
                              <div className="col-6 col-md-3 mb-2">
                                <div className="form-check h-100 border rounded p-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentType"
                                    id="credit"
                                    value="credit"
                                    checked={formData.paymentType === "credit"}
                                    onChange={handleInputChange}
                                  />
                                  <label
                                    className="form-check-label d-flex flex-column align-items-center"
                                    htmlFor="credit"
                                  >
                                    <FaCreditCard className="mb-1" size={24} />
                                    Credit Card
                                  </label>
                                </div>
                              </div>
                              <div className="col-6 col-md-3 mb-2">
                                <div className="form-check h-100 border rounded p-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentType"
                                    id="gpay"
                                    value="gpay"
                                    checked={formData.paymentType === "gpay"}
                                    onChange={handleInputChange}
                                  />
                                  <label
                                    className="form-check-label d-flex flex-column align-items-center"
                                    htmlFor="gpay"
                                  >
                                    <FaGoogle className="mb-1" size={24} />
                                    Google Pay
                                  </label>
                                </div>
                              </div>
                              <div className="col-6 col-md-3 mb-2">
                                <div className="form-check h-100 border rounded p-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentType"
                                    id="phonepe"
                                    value="phonepe"
                                    checked={formData.paymentType === "phonepe"}
                                    onChange={handleInputChange}
                                  />
                                  <label
                                    className="form-check-label d-flex flex-column align-items-center"
                                    htmlFor="phonepe"
                                  >
                                    <FaMobile className="mb-1" size={24} />
                                    PhonePe
                                  </label>
                                </div>
                              </div>
                              <div className="col-6 col-md-3 mb-2">
                                <div className="form-check h-100 border rounded p-2">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentType"
                                    id="paytm"
                                    value="paytm"
                                    checked={formData.paymentType === "paytm"}
                                    onChange={handleInputChange}
                                  />
                                  <label
                                    className="form-check-label d-flex flex-column align-items-center"
                                    htmlFor="paytm"
                                  >
                                    <FaMoneyBillWave
                                      className="mb-1"
                                      size={24}
                                    />
                                    Paytm
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}

                        <button
                          type="submit"
                          className="btn btn-success w-100 py-2"
                        >
                          Complete Payment
                        </button>
                      </form>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingSection;
