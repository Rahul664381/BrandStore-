// import React, { useState, useEffect } from "react";
// import {
//   FaStar,
//   FaStarHalfAlt,
//   FaRegStar,
//   FaCartPlus,
//   FaHeart,
//   FaSearch,
//   FaFilter,
// } from "react-icons/fa";
// import { toast, ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function Home() {
//   const [cart, setCart] = useState(
//     () => JSON.parse(localStorage.getItem("cart")) || []
//   );
//   const [search, setSearch] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [priceFilter, setPriceFilter] = useState("all");
//   const [ratingFilter, setRatingFilter] = useState(0);
//   const [showFilters, setShowFilters] = useState(false);
//   const itemsPerPage = 20;

//   useEffect(() => {
//     localStorage.setItem("cart", JSON.stringify(cart));
//   }, [cart]);

//   const products = [
//     {
//       id: 1,
//       title: "Amazon Basics Electric Egg Boiler",
//       desc: "3 Boiling Modes | Automatic Operation | Overheat Protection",
//       price: 999,
//       originalPrice: 1499,
//       discount: "33% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/61YVqHdFRxL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 2,
//       title: "Prestige Electric Kettle",
//       desc: "1.5 Liter Capacity | Stainless Steel | 1500 Watts | Cordless",
//       price: 1095,
//       originalPrice: 1499,
//       discount: "27% off",
//       rating: 4.5,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsKJcgWVjHY3BA66JkEQPINKZhoeJUsi7Ow&s",
//       category: "kitchen",
//     },
//     {
//       id: 3,
//       title: "Bajaj Majesty Hand Mixer",
//       desc: "350 Watts | 2 Speed Control | 2 Stainless Steel Beaters",
//       price: 1299,
//       originalPrice: 1990,
//       discount: "35% off",
//       rating: 4.0,
//       img: "https://images.jdmagicbox.com/quickquotes/images_main/bajaj-majesty-hm01-250-watts-hand-blender-black-106706717-o2cyg.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 4,
//       title: "Butterfly Smart Glass Top Gas Stove",
//       desc: "2 Burner | Brass Burners | Auto Ignition | Black",
//       price: 3499,
//       originalPrice: 4999,
//       discount: "30% off",
//       rating: 4.3,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNAvh2LRofPXd1q3dmic7DdrFuJFyGZX1iA&s",
//       category: "kitchen",
//     },
//     {
//       id: 5,
//       title: "Morphy Richards Food Processor",
//       desc: "1600 Watts | 1.75L Jar | 3 Speed Control | White",
//       price: 3999,
//       originalPrice: 5999,
//       discount: "33% off",
//       rating: 4.1,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo17_QBX9uxm0FoRKexAjHKuCzOEssqvebjg&s",
//       category: "kitchen",
//     },
//     {
//       id: 6,
//       title: "Pigeon Sandwich Maker",
//       desc: "750 Watts | Non-Stick Coating | Indicator Light | Black",
//       price: 795,
//       originalPrice: 1295,
//       discount: "39% off",
//       rating: 4.0,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKlKrWujp-_Elz1D72rS_E-CvrF7_0khxIw&s",
//       category: "kitchen",
//     },
//     {
//       id: 7,
//       title: "Borosil Microwave Oven",
//       desc: "42 Liter | 900 Watts | 10 Power Levels | Black",
//       price: 8999,
//       originalPrice: 12999,
//       discount: "31% off",
//       rating: 4.2,
//       img: "https://myborosil.com/cdn/shop/files/my-borosil-ovens-borosil-proplus-20-l-oven-toaster-griller-otg-33692026372234.jpg?v=1706865095",
//       category: "kitchen",
//     },
//     {
//       id: 8,
//       title: "Havells Induction Cooktop",
//       desc: "2000 Watts | 7 Cooking Presets | Auto Pan Detection",
//       price: 2199,
//       originalPrice: 2999,
//       discount: "27% off",
//       rating: 4.4,
//       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogHUS-gPAVrecStv5MxFKmRPl1MhGxNQcPA&s",
//       category: "kitchen",
//     },
//     {
//       id: 9,
//       title: "Inalsa Electric Rice Cooker",
//       desc: "1.8 Liter | 650 Watts | Non-Stick Inner Pot | White",
//       price: 1499,
//       originalPrice: 1999,
//       discount: "25% off",
//       rating: 3.9,
//       img: "https://m.media-amazon.com/images/I/61Hvfm8D65L.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 10,
//       title: "Philips Juicer",
//       desc: "500 Watts | 1.5L Jug | 2 Speed Settings | White",
//       price: 1999,
//       originalPrice: 2499,
//       discount: "20% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 11,
//       title: "Prestige Mixer Grinder",
//       desc: "750 Watts | 3 Jars | Stainless Steel Blades | Purple",
//       price: 2499,
//       originalPrice: 3499,
//       discount: "29% off",
//       rating: 4.3,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 12,
//       title: "Bajaj Rex Mixer Grinder",
//       desc: "500 Watts | 3 Jars | Stainless Steel Blades | White",
//       price: 1799,
//       originalPrice: 2499,
//       discount: "28% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 13,
//       title: "Kent Hand Blender",
//       desc: "150 Watts | 2 Speed Control | Stainless Steel Blades",
//       price: 1499,
//       originalPrice: 1999,
//       discount: "25% off",
//       rating: 3.8,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 14,
//       title: "Usha Induction Cooktop",
//       desc: "2000 Watts | 7 Cooking Presets | Auto Pan Detection",
//       price: 2099,
//       originalPrice: 2799,
//       discount: "25% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 15,
//       title: "Pigeon Electric Kettle",
//       desc: "1.5 Liter | 1500 Watts | Stainless Steel | Black",
//       price: 999,
//       originalPrice: 1499,
//       discount: "33% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 16,
//       title: "Borosil Microwave Oven",
//       desc: "20 Liter | 700 Watts | 5 Power Levels | White",
//       price: 5999,
//       originalPrice: 7999,
//       discount: "25% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 17,
//       title: "Prestige Wet Grinder",
//       desc: "200 Watts | 2 Liter Capacity | Stainless Steel Drum",
//       price: 5999,
//       originalPrice: 7999,
//       discount: "25% off",
//       rating: 4.3,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 18,
//       title: "Butterfly Air Fryer",
//       desc: "3 Liter | 1500 Watts | Digital Display | Black",
//       price: 4999,
//       originalPrice: 6999,
//       discount: "29% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 19,
//       title: "Morphy Richards Hand Mixer",
//       desc: "300 Watts | 5 Speed Control | Stainless Steel Beaters",
//       price: 1499,
//       originalPrice: 1999,
//       discount: "25% off",
//       rating: 3.9,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 20,
//       title: "Inalsa Juicer Mixer Grinder",
//       desc: "1000 Watts | 3 Jars | Stainless Steel Blades | Black",
//       price: 2999,
//       originalPrice: 3999,
//       discount: "25% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 21,
//       title: "Philips Air Fryer",
//       desc: "4.1 Liter | 1400 Watts | Digital Display | Black",
//       price: 7999,
//       originalPrice: 9999,
//       discount: "20% off",
//       rating: 4.5,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 22,
//       title: "Butterfly Rice Cooker",
//       desc: "1.8 Liter | 650 Watts | Non-Stick Inner Pot | White",
//       price: 1599,
//       originalPrice: 2199,
//       discount: "27% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 23,
//       title: "Prestige Pressure Cooker",
//       desc: "3 Liter | Stainless Steel | Induction Base | Silver",
//       price: 1299,
//       originalPrice: 1799,
//       discount: "28% off",
//       rating: 4.4,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 24,
//       title: "Borosil Glass Dinner Set",
//       desc: "35 Pieces | Microwave Safe | Transparent",
//       price: 2499,
//       originalPrice: 3499,
//       discount: "29% off",
//       rating: 4.3,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 25,
//       title: "Milton Thermosteel Flask",
//       desc: "1 Liter | Stainless Steel | Vacuum Insulated | Silver",
//       price: 899,
//       originalPrice: 1299,
//       discount: "31% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 26,
//       title: "Cello Plastic Storage Containers",
//       desc: "Set of 5 | Airtight Lids | Microwave Safe | Assorted Colors",
//       price: 599,
//       originalPrice: 899,
//       discount: "33% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 27,
//       title: "Nova Stainless Steel Cookware Set",
//       desc: "7 Pieces | Induction Bottom | Silver",
//       price: 2999,
//       originalPrice: 3999,
//       discount: "25% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 28,
//       title: "Wonderchef Non-Stick Kadai",
//       desc: "2 Liter | Granite Coating | Induction Base | Black",
//       price: 1099,
//       originalPrice: 1599,
//       discount: "31% off",
//       rating: 4.3,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 29,
//       title: "Pigeon Chopping Board",
//       desc: "Plastic | BPA Free | Non-Slip Base | Green",
//       price: 199,
//       originalPrice: 299,
//       discount: "33% off",
//       rating: 3.9,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 30,
//       title: "Borosil Glass Mixing Bowls",
//       desc: "Set of 3 | Microwave Safe | Transparent",
//       price: 699,
//       originalPrice: 999,
//       discount: "30% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 31,
//       title: "Milton Thermosteel Lunch Box",
//       desc: "3 Compartment | 1.2 Liter | Stainless Steel | Silver",
//       price: 799,
//       originalPrice: 1199,
//       discount: "33% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 32,
//       title: "Prestige Tawa",
//       desc: "Non-Stick | Induction Base | 27 cm | Black",
//       price: 499,
//       originalPrice: 799,
//       discount: "38% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 33,
//       title: "Borosil Glass Water Bottle",
//       desc: "1 Liter | Leak Proof | BPA Free | Transparent",
//       price: 399,
//       originalPrice: 599,
//       discount: "33% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 34,
//       title: "Cello Plastic Water Jug",
//       desc: "2 Liter | BPA Free | Transparent",
//       price: 149,
//       originalPrice: 249,
//       discount: "40% off",
//       rating: 3.8,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 35,
//       title: "Nova Stainless Steel Spoon Set",
//       desc: "Set of 6 | Mirror Finish | Silver",
//       price: 299,
//       originalPrice: 499,
//       discount: "40% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 36,
//       title: "Wonderchef Kitchen Knife Set",
//       desc: "Set of 3 | Stainless Steel | Black Handle",
//       price: 899,
//       originalPrice: 1299,
//       discount: "31% off",
//       rating: 4.3,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 37,
//       title: "Pigeon Kitchen Scissors",
//       desc: "Stainless Steel | Multipurpose | Black",
//       price: 199,
//       originalPrice: 299,
//       discount: "33% off",
//       rating: 3.9,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 38,
//       title: "Borosil Glass Measuring Cup",
//       desc: "500 ml | Microwave Safe | Transparent",
//       price: 249,
//       originalPrice: 399,
//       discount: "38% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 39,
//       title: "Milton Thermosteel Sipper",
//       desc: "600 ml | Stainless Steel | Vacuum Insulated | Silver",
//       price: 599,
//       originalPrice: 899,
//       discount: "33% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 40,
//       title: "Prestige Spatula Set",
//       desc: "Set of 3 | Silicone Head | Wooden Handle",
//       price: 299,
//       originalPrice: 499,
//       discount: "40% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 41,
//       title: "Borosil Glass Storage Box",
//       desc: "1 Liter | Airtight Lid | Microwave Safe | Transparent",
//       price: 349,
//       originalPrice: 499,
//       discount: "30% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 42,
//       title: "Cello Plastic Storage Jars",
//       desc: "Set of 3 | Airtight Lids | Assorted Colors",
//       price: 499,
//       originalPrice: 799,
//       discount: "38% off",
//       rating: 3.9,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 43,
//       title: "Nova Stainless Steel Tongs",
//       desc: "12 Inch | Silicone Tips | Silver",
//       price: 199,
//       originalPrice: 299,
//       discount: "33% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 44,
//       title: "Wonderchef Rolling Pin",
//       desc: "Wooden | 14 Inch | Traditional Design",
//       price: 249,
//       originalPrice: 399,
//       discount: "38% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 45,
//       title: "Pigeon Kitchen Scale",
//       desc: "Digital | 5 kg Capacity | LCD Display | White",
//       price: 599,
//       originalPrice: 899,
//       discount: "33% off",
//       rating: 4.2,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 46,
//       title: "Borosil Glass Tea Cup",
//       desc: "300 ml | Microwave Safe | Transparent",
//       price: 149,
//       originalPrice: 249,
//       discount: "40% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 47,
//       title: "Milton Thermosteel Coffee Mug",
//       desc: "350 ml | Stainless Steel | Vacuum Insulated | Silver",
//       price: 499,
//       originalPrice: 799,
//       discount: "38% off",
//       rating: 4.3,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 48,
//       title: "Prestige Kitchen Timer",
//       desc: "Digital | Magnetic Back | Count Up/Down | Black",
//       price: 299,
//       originalPrice: 499,
//       discount: "40% off",
//       rating: 3.9,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 49,
//       title: "Borosil Glass Baking Dish",
//       desc: "2 Liter | Microwave Safe | Oven Safe | Transparent",
//       price: 599,
//       originalPrice: 899,
//       discount: "33% off",
//       rating: 4.1,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//     {
//       id: 50,
//       title: "Cello Plastic Chopping Board",
//       desc: "Set of 2 | BPA Free | Non-Slip Base | Green & Red",
//       price: 249,
//       originalPrice: 399,
//       discount: "38% off",
//       rating: 4.0,
//       img: "https://m.media-amazon.com/images/I/71XyPaPdgRL._SL1500_.jpg",
//       category: "kitchen",
//     },
//   ];

//   // Filter products based on search input and selected filters
//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.title
//       .toLowerCase()
//       .includes(search.toLowerCase());

//     let matchesPrice = true;
//     if (priceFilter === "low") {
//       matchesPrice = product.price < 1000;
//     } else if (priceFilter === "medium") {
//       matchesPrice = product.price >= 1000 && product.price < 3000;
//     } else if (priceFilter === "high") {
//       matchesPrice = product.price >= 3000;
//     }

//     const matchesRating = product.rating >= ratingFilter;

//     return matchesSearch && matchesPrice && matchesRating;
//   });

//   // Pagination logic
//   const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
//   const paginatedProducts = filteredProducts.slice(
//     (currentPage - 1) * itemsPerPage,
//     currentPage * itemsPerPage
//   );

//   // Add to cart function
//   const addToCart = (product) => {
//     setCart([...cart, product]);
//     toast.success(`${product.title} added to cart!`);
//   };

//   // Render star ratings
//   const renderStars = (rating) => {
//     const stars = [];
//     const fullStars = Math.floor(rating);
//     const hasHalfStar = rating % 1 >= 0.5;

//     for (let i = 1; i <= 5; i++) {
//       if (i <= fullStars) {
//         stars.push(<FaStar key={i} className="text-warning" />);
//       } else if (i === fullStars + 1 && hasHalfStar) {
//         stars.push(<FaStarHalfAlt key={i} className="text-warning" />);
//       } else {
//         stars.push(<FaRegStar key={i} className="text-warning" />);
//       }
//     }
//     return stars;
//   };

//   // Reset all filters
//   const resetFilters = () => {
//     setPriceFilter("all");
//     setRatingFilter(0);
//     setSearch("");
//     setCurrentPage(1);
//   };

//   return (
//     <div className="container py-5">
//       <ToastContainer />
//       <h1 className="text-center mb-4">Kitchen Appliances</h1>

//       {/* Search and Filter Bar */}
//       <div className="row mb-4">
//         <div className="col-md-6 offset-md-3">
//           <div className="input-group mb-3">
//             <span className="input-group-text">
//               <FaSearch />
//             </span>
//             <input
//               type="text"
//               className="form-control"
//               placeholder="Search products..."
//               value={search}
//               onChange={(e) => {
//                 setSearch(e.target.value);
//                 setCurrentPage(1);
//               }}
//             />
//             <button
//               className="btn btn-outline-secondary"
//               onClick={() => setShowFilters(!showFilters)}
//             >
//               <FaFilter className="me-1" />
//               Filters
//             </button>
//           </div>

//           {/* Filter Options */}
//           {showFilters && (
//             <div className="card mb-3">
//               <div className="card-body">
//                 <div className="row">
//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Price Range</label>
//                     <div className="btn-group w-100">
//                       <button
//                         className={`btn btn-sm ${
//                           priceFilter === "all"
//                             ? "btn-primary"
//                             : "btn-outline-primary"
//                         }`}
//                         onClick={() => setPriceFilter("all")}
//                       >
//                         All
//                       </button>
//                       <button
//                         className={`btn btn-sm ${
//                           priceFilter === "low"
//                             ? "btn-primary"
//                             : "btn-outline-primary"
//                         }`}
//                         onClick={() => setPriceFilter("low")}
//                       >
//                         Low (&lt; ₹1000)
//                       </button>
//                       <button
//                         className={`btn btn-sm ${
//                           priceFilter === "medium"
//                             ? "btn-primary"
//                             : "btn-outline-primary"
//                         }`}
//                         onClick={() => setPriceFilter("medium")}
//                       >
//                         Medium (₹1000-3000)
//                       </button>
//                       <button
//                         className={`btn btn-sm ${
//                           priceFilter === "high"
//                             ? "btn-primary"
//                             : "btn-outline-primary"
//                         }`}
//                         onClick={() => setPriceFilter("high")}
//                       >
//                         High (&gt; ₹3000)
//                       </button>
//                     </div>
//                   </div>

//                   <div className="col-md-6 mb-3">
//                     <label className="form-label">Minimum Rating</label>
//                     <div className="d-flex align-items-center">
//                       <input
//                         type="range"
//                         className="form-range me-3"
//                         min="0"
//                         max="5"
//                         step="0.5"
//                         value={ratingFilter}
//                         onChange={(e) =>
//                           setRatingFilter(parseFloat(e.target.value))
//                         }
//                       />
//                       <span className="badge bg-primary">
//                         {ratingFilter > 0 ? `${ratingFilter}+` : "Any"}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="col-12">
//                     <button
//                       className="btn btn-sm btn-outline-danger"
//                       onClick={resetFilters}
//                     >
//                       Reset All Filters
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Product Count and Active Filters */}
//       <div className="d-flex justify-content-between mb-3">
//         <div>Showing {filteredProducts.length} products</div>
//         <div>
//           {(priceFilter !== "all" || ratingFilter > 0) && (
//             <div className="d-flex gap-2">
//               {priceFilter !== "all" && (
//                 <span className="badge bg-primary">
//                   Price:{" "}
//                   {priceFilter === "low"
//                     ? "Low"
//                     : priceFilter === "medium"
//                     ? "Medium"
//                     : "High"}
//                 </span>
//               )}
//               {ratingFilter > 0 && (
//                 <span className="badge bg-primary">
//                   Rating: {ratingFilter}+
//                 </span>
//               )}
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Product List */}
//       <div className="row g-4">
//         {paginatedProducts.length > 0 ? (
//           paginatedProducts.map((product) => (
//             <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
//               <div className="card h-100 shadow-sm">
//                 <div className="position-relative text-center">
//                   <img
//                     src={product.img}
//                     className="card-img-top p-3"
//                     alt={product.title}
//                     style={{ height: "200px", objectFit: "contain" }}
//                   />
//                   <span className="badge bg-danger position-absolute top-0 start-0 m-2">
//                     {product.discount}
//                   </span>
//                   <FaHeart
//                     className="position-absolute top-0 end-0 m-2 fs-4 text-secondary"
//                     style={{ cursor: "pointer" }}
//                   />
//                 </div>

//                 <div className="card-body d-flex flex-column">
//                   <h5 className="card-title" style={{ fontSize: "1rem" }}>
//                     {product.title}
//                   </h5>
//                   <p className="card-text text-muted small">{product.desc}</p>

//                   <div className="my-3">
//                     <h4 className="text-primary mb-0">₹{product.price}</h4>
//                     <span className="text-decoration-line-through text-muted small">
//                       ₹{product.originalPrice}
//                     </span>
//                   </div>

//                   <div className="star-rating mb-3">
//                     {renderStars(product.rating)}
//                     <span className="ms-2 small">
//                       {product.rating} out of 5
//                     </span>
//                   </div>

//                   <button
//                     className="btn btn-warning w-100 fw-bold mt-auto"
//                     onClick={() => addToCart(product)}
//                   >
//                     <FaCartPlus className="me-2" /> Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <div className="col-12 text-center py-5">
//             <h4>No products found</h4>
//             <p>Try adjusting your search criteria</p>
//           </div>
//         )}
//       </div>

//       {/* Pagination */}
//       {totalPages > 1 && (
//         <div className="d-flex justify-content-center mt-4">
//           <nav>
//             <ul className="pagination">
//               <li
//                 className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
//               >
//                 <button
//                   className="page-link"
//                   onClick={() => setCurrentPage(currentPage - 1)}
//                 >
//                   Previous
//                 </button>
//               </li>

//               {Array.from({ length: totalPages }, (_, index) => index + 1).map(
//                 (pageNum) => (
//                   <li
//                     key={pageNum}
//                     className={`page-item ${
//                       pageNum === currentPage ? "active" : ""
//                     }`}
//                   >
//                     <button
//                       className="page-link"
//                       onClick={() => setCurrentPage(pageNum)}
//                     >
//                       {pageNum}
//                     </button>
//                   </li>
//                 )
//               )}

//               <li
//                 className={`page-item ${
//                   currentPage === totalPages ? "disabled" : ""
//                 }`}
//               >
//                 <button
//                   className="page-link"
//                   onClick={() => setCurrentPage(currentPage + 1)}
//                 >
//                   Next
//                 </button>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Home;

import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCartPlus,
  FaHeart,
  FaSearch,
  FaFilter,
  FaTimes,
  FaCheck,
  FaCreditCard,
  FaGoogle,
  FaMobile,
  FaMoneyBillWave,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceFilter, setPriceFilter] = useState("all");
  const [ratingFilter, setRatingFilter] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductDetails, setShowProductDetails] = useState(false);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    paymentMethod: "online",
    paymentType: "creditCard",
    quantity: 1,
  });
  const itemsPerPage = 20;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const products = [
    {
      id: 1,
      title: "Amazon Basics Electric Egg Boiler",
      desc: "3 Boiling Modes | Automatic Operation | Overheat Protection",
      price: 999,
      originalPrice: 1499,
      discount: "33% off",
      rating: 4.2,
      img: "https://m.media-amazon.com/images/I/31753xjdabL._UF894,1000_QL80_.jpg",
      category: "kitchen",
    },
    {
      id: 2,
      title: "Prestige Electric Kettle",
      desc: "1.5 Liter Capacity | Stainless Steel | 1500 Watts | Cordless",
      price: 1095,
      originalPrice: 1499,
      discount: "27% off",
      rating: 4.5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFsKJcgWVjHY3BA66JkEQPINKZhoeJUsi7Ow&s",
      category: "kitchen",
    },
    {
      id: 3,
      title: "Bajaj Majesty Hand Mixer",
      desc: "350 Watts | 2 Speed Control | 2 Stainless Steel Beaters",
      price: 1299,
      originalPrice: 1990,
      discount: "35% off",
      rating: 4.0,
      img: "https://www.rasoishop.com/cdn/shop/products/Image14_1ad418f3-b106-4169-ba28-6417d891ba83.jpg?v=1640333497",
      category: "kitchen",
    },
    {
      id: 4,
      title: "Butterfly Smart Glass Top Gas Stove",
      desc: "2 Burner | Brass Burners | Auto Ignition | Black",
      price: 3499,
      originalPrice: 4999,
      discount: "30% off",
      rating: 4.3,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyNAvh2LRofPXd1q3dmic7DdrFuJFyGZX1iA&s",
      category: "kitchen",
    },
    {
      id: 5,
      title: "Morphy Richards Food Processor",
      desc: "1600 Watts | 1.75L Jar | 3 Speed Control | White",
      price: 3999,
      originalPrice: 5999,
      discount: "33% off",
      rating: 4.1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo17_QBX9uxm0FoRKexAjHKuCzOEssqvebjg&s",
      category: "kitchen",
    },
    {
      id: 6,
      title: "Pigeon Sandwich Maker",
      desc: "750 Watts | Non-Stick Coating | Indicator Light | Black",
      price: 795,
      originalPrice: 1295,
      discount: "39% off",
      rating: 4.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvKlKrWujp-_Elz1D72rS_E-CvrF7_0khxIw&s",
      category: "kitchen",
    },
    {
      id: 7,
      title: "Borosil Microwave Oven",
      desc: "42 Liter | 900 Watts | 10 Power Levels | Black",
      price: 8999,
      originalPrice: 12999,
      discount: "31% off",
      rating: 4.2,
      img: "https://myborosil.com/cdn/shop/files/my-borosil-ovens-borosil-proplus-20-l-oven-toaster-griller-otg-33692026372234.jpg?v=1706865095",
      category: "kitchen",
    },
    {
      id: 8,
      title: "Havells Induction Cooktop",
      desc: "2000 Watts | 7 Cooking Presets | Auto Pan Detection",
      price: 2199,
      originalPrice: 2999,
      discount: "27% off",
      rating: 4.4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSogHUS-gPAVrecStv5MxFKmRPl1MhGxNQcPA&s",
      category: "kitchen",
    },
    {
      id: 9,
      title: "Inalsa Electric Rice Cooker",
      desc: "1.8 Liter | 650 Watts | Non-Stick Inner Pot | White",
      price: 1499,
      originalPrice: 1999,
      discount: "25% off",
      rating: 3.9,
      img: "https://m.media-amazon.com/images/I/61Hvfm8D65L.jpg",
      category: "kitchen",
    },
    {
      id: 10,
      title: "Philips Juicer",
      desc: "500 Watts | 1.5L Jug | 2 Speed Settings | White",
      price: 1999,
      originalPrice: 2499,
      discount: "20% off",
      rating: 4.1,
      img: "https://m.media-amazon.com/images/I/61iJtPWLoKL.jpg",
      category: "kitchen",
    },
    {
      id: 11,
      title: "Prestige Mixer Grinder",
      desc: "750 Watts | 3 Jars | Stainless Steel Blades | Purple",
      price: 2499,
      originalPrice: 3499,
      discount: "29% off",
      rating: 4.3,
      img: "https://m.media-amazon.com/images/I/51ZykaL8q6L.jpg",
      category: "kitchen",
    },
    {
      id: 12,
      title: "Bajaj Rex Mixer Grinder",
      desc: "500 Watts | 3 Jars | Stainless Steel Blades | White",
      price: 1799,
      originalPrice: 2499,
      discount: "28% off",
      rating: 4.0,
      img: "https://buyindiankitchenappliances.com/cdn/shop/products/51BNv1auG3L._SL1500_580x.jpg?v=1640608636",
      category: "kitchen",
    },
    {
      id: 13,
      title: "Kent Hand Blender",
      desc: "150 Watts | 2 Speed Control | Stainless Steel Blades",
      price: 1499,
      originalPrice: 1999,
      discount: "25% off",
      rating: 3.8,
      img: "https://mykit.in/crm/public/uploads/product_images_500x500/vJmslGvIuaWFwicklQaS3Zcb1pqniG.jpg",
      category: "kitchen",
    },
    {
      id: 14,
      title: "Usha Induction Cooktop",
      desc: "2000 Watts | 7 Cooking Presets | Auto Pan Detection",
      price: 2099,
      originalPrice: 2799,
      discount: "25% off",
      rating: 4.2,
      img: "https://www.jpgecommerce.com/image/cache/catalog/USHA/Cooktops/CJ1350WPC-680x480.jpg",
      category: "kitchen",
    },
    {
      id: 15,
      title: "Pigeon Electric Kettle",
      desc: "1.5 Liter | 1500 Watts | Stainless Steel | Black",
      price: 999,
      originalPrice: 1499,
      discount: "33% off",
      rating: 4.1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdbEHWHkN_-HFVvjdqdrjf7_lU2BOvtm3qwQ&s",
      category: "kitchen",
    },
    {
      id: 16,
      title: "Borosil Microwave Oven",
      desc: "20 Liter | 700 Watts | 5 Power Levels | White",
      price: 5999,
      originalPrice: 7999,
      discount: "25% off",
      rating: 4.0,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-tz4yLAvCpFrBtEgCtYaoxwJpXZOETYTYyA&s",
      category: "kitchen",
    },
    {
      id: 17,
      title: "Prestige Wet Grinder",
      desc: "200 Watts | 2 Liter Capacity | Stainless Steel Drum",
      price: 5999,
      originalPrice: 7999,
      discount: "25% off",
      rating: 4.3,
      img: "https://shop.ttkprestige.com/media/catalog/product/9/7/9733-41218-IMG1.jpg",
      category: "kitchen",
    },
    {
      id: 18,
      title: "Butterfly Air Fryer",
      desc: "3 Liter | 1500 Watts | Digital Display | Black",
      price: 4999,
      originalPrice: 6999,
      discount: "29% off",
      rating: 4.1,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAnCGZUY1ZcEpEqNvCp5VPIt8qKWQGAqcYyw&s",
      category: "kitchen",
    },
    {
      id: 19,
      title: "Morphy Richards Hand Mixer",
      desc: "300 Watts | 5 Speed Control | Stainless Steel Beaters",
      price: 1499,
      originalPrice: 1999,
      discount: "25% off",
      rating: 3.9,
      img: "https://mahajanelectronics.com/cdn/shop/files/9_b8659086-3f32-46a8-95da-b3d9c8b09a26.jpg?v=1751251445&width=1500",
      category: "kitchen",
    },
    {
      id: 20,
      title: "Inalsa Juicer Mixer Grinder",
      desc: "1000 Watts | 3 Jars | Stainless Steel Blades | Black",
      price: 2999,
      originalPrice: 3999,
      discount: "25% off",
      rating: 4.2,
      img: "https://mahajanelectronics.com/cdn/shop/files/61ndQOAg-nL._SL1200.jpg?v=1706169990",
      category: "kitchen",
    },
    // ... (keep your existing products array exactly as it is)
    // The products array from your previous code should be placed here
    // I'm omitting it to save space, but it should be included
  ];

  // Filter products based on search input and selected filters
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    let matchesPrice = true;
    if (priceFilter === "low") {
      matchesPrice = product.price < 1000;
    } else if (priceFilter === "medium") {
      matchesPrice = product.price >= 1000 && product.price < 3000;
    } else if (priceFilter === "high") {
      matchesPrice = product.price >= 3000;
    }

    const matchesRating = product.rating >= ratingFilter;

    return matchesSearch && matchesPrice && matchesRating;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Add to cart function
  const addToCart = (product) => {
    setSelectedProduct(product);
    setShowCheckout(true);
  };

  // Render star ratings
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

  // Reset all filters
  const resetFilters = () => {
    setPriceFilter("all");
    setRatingFilter(0);
    setSearch("");
    setCurrentPage(1);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Calculate total price
  const calculateTotal = () => {
    if (!selectedProduct) return 0;
    const discountAmount =
      (selectedProduct.price *
        parseInt(formData.quantity) *
        parseInt(selectedProduct.discount)) /
        100 || 0;
    return selectedProduct.price * parseInt(formData.quantity) - discountAmount;
  };

  // Process payment
  const processPayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowPaymentSuccess(true);
      setShowCheckout(false);
    }, 3000);
  };

  // Close all modals
  const closeAllModals = () => {
    setShowProductDetails(false);
    setShowCheckout(false);
    setShowPaymentSuccess(false);
  };

  return (
    <div className="container py-5">
      <ToastContainer />
      <h1 className="text-center mb-4">Kitchen Appliances</h1>

      {/* Search and Filter Bar */}
      <div className="row mb-4">
        <div className="col-md-6 offset-md-3">
          <div className="input-group mb-3">
            <span className="input-group-text">
              <FaSearch />
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Search products..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
            />
            <button
              className="btn btn-outline-secondary"
              onClick={() => setShowFilters(!showFilters)}
            >
              <FaFilter className="me-1" />
              Filters
            </button>
          </div>

          {/* Filter Options */}
          {showFilters && (
            <div className="card mb-3">
              <div className="card-body">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Price Range</label>
                    <div className="btn-group w-100">
                      <button
                        className={`btn btn-sm ${
                          priceFilter === "all"
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        onClick={() => setPriceFilter("all")}
                      >
                        All
                      </button>
                      <button
                        className={`btn btn-sm ${
                          priceFilter === "low"
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        onClick={() => setPriceFilter("low")}
                      >
                        Low (&lt; ₹1000)
                      </button>
                      <button
                        className={`btn btn-sm ${
                          priceFilter === "medium"
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        onClick={() => setPriceFilter("medium")}
                      >
                        Medium (₹1000-3000)
                      </button>
                      <button
                        className={`btn btn-sm ${
                          priceFilter === "high"
                            ? "btn-primary"
                            : "btn-outline-primary"
                        }`}
                        onClick={() => setPriceFilter("high")}
                      >
                        High (&gt; ₹3000)
                      </button>
                    </div>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className="form-label">Minimum Rating</label>
                    <div className="d-flex align-items-center">
                      <input
                        type="range"
                        className="form-range me-3"
                        min="0"
                        max="5"
                        step="0.5"
                        value={ratingFilter}
                        onChange={(e) =>
                          setRatingFilter(parseFloat(e.target.value))
                        }
                      />
                      <span className="badge bg-primary">
                        {ratingFilter > 0 ? `${ratingFilter}+` : "Any"}
                      </span>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-sm btn-outline-danger"
                      onClick={resetFilters}
                    >
                      Reset All Filters
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Product Count and Active Filters */}
      <div className="d-flex justify-content-between mb-3">
        <div>Showing {filteredProducts.length} products</div>
        <div>
          {(priceFilter !== "all" || ratingFilter > 0) && (
            <div className="d-flex gap-2">
              {priceFilter !== "all" && (
                <span className="badge bg-primary">
                  Price:{" "}
                  {priceFilter === "low"
                    ? "Low"
                    : priceFilter === "medium"
                    ? "Medium"
                    : "High"}
                </span>
              )}
              {ratingFilter > 0 && (
                <span className="badge bg-primary">
                  Rating: {ratingFilter}+
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Product List */}
      <div className="row g-4">
        {paginatedProducts.length > 0 ? (
          paginatedProducts.map((product) => (
            <div key={product.id} className="col-12 col-md-6 col-lg-4 col-xl-3">
              <div className="card h-100 shadow-sm">
                <div className="position-relative text-center">
                  <img
                    src={product.img}
                    className="card-img-top p-3"
                    alt={product.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    {product.discount}
                  </span>
                  <FaHeart
                    className="position-absolute top-0 end-0 m-2 fs-4 text-secondary"
                    style={{ cursor: "pointer" }}
                  />
                </div>

                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>
                    {product.title}
                  </h5>
                  <p className="card-text text-muted small">{product.desc}</p>

                  <div className="my-3">
                    <h4 className="text-primary mb-0">₹{product.price}</h4>
                    <span className="text-decoration-line-through text-muted small">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  <div className="star-rating mb-3">
                    {renderStars(product.rating)}
                    <span className="ms-2 small">
                      {product.rating} out of 5
                    </span>
                  </div>

                  <button
                    className="btn btn-warning w-100 fw-bold mt-auto"
                    onClick={() => addToCart(product)}
                  >
                    <FaCartPlus className="me-2" /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4>No products found</h4>
            <p>Try adjusting your search criteria</p>
          </div>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-center mt-4">
          <nav>
            <ul className="pagination">
              <li
                className={`page-item ${currentPage === 1 ? "disabled" : ""}`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  Previous
                </button>
              </li>

              {Array.from({ length: totalPages }, (_, index) => index + 1).map(
                (pageNum) => (
                  <li
                    key={pageNum}
                    className={`page-item ${
                      pageNum === currentPage ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  </li>
                )
              )}

              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}

      {/* Checkout Modal */}
      {showCheckout && selectedProduct && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Checkout</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeAllModals}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-6">
                    <div className="card mb-4">
                      <div className="card-body">
                        <h5>Product Details</h5>
                        <div className="d-flex align-items-center mb-3">
                          <img
                            src={selectedProduct.img}
                            alt={selectedProduct.title}
                            style={{
                              width: "80px",
                              height: "80px",
                              objectFit: "contain",
                            }}
                            className="me-3"
                          />
                          <div>
                            <h6>{selectedProduct.title}</h6>
                            <div className="d-flex align-items-center">
                              <span className="text-primary fw-bold">
                                ₹{selectedProduct.price}
                              </span>
                              <span className="text-decoration-line-through text-muted ms-2">
                                ₹{selectedProduct.originalPrice}
                              </span>
                              <span className="badge bg-danger ms-2">
                                {selectedProduct.discount}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Quantity</label>
                          <input
                            type="number"
                            className="form-control"
                            name="quantity"
                            min="1"
                            value={formData.quantity}
                            onChange={handleInputChange}
                          />
                        </div>

                        <div className="border-top pt-3">
                          <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal:</span>
                            <span>
                              ₹{selectedProduct.price * formData.quantity}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between mb-2">
                            <span>Discount ({selectedProduct.discount}):</span>
                            <span className="text-danger">
                              -₹
                              {(selectedProduct.price *
                                formData.quantity *
                                parseInt(selectedProduct.discount)) /
                                100 || 0}
                            </span>
                          </div>
                          <div className="d-flex justify-content-between fw-bold fs-5">
                            <span>Total:</span>
                            <span>₹{calculateTotal()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h5 className="mb-3">Customer Information</h5>
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
                      <label className="form-label">Shipping Address</label>
                      <textarea
                        className="form-control"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <h5 className="mt-4 mb-3">Payment Method</h5>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          id="online"
                          value="online"
                          checked={formData.paymentMethod === "online"}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="online">
                          Online Payment
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="paymentMethod"
                          id="cod"
                          value="cod"
                          checked={formData.paymentMethod === "cod"}
                          onChange={handleInputChange}
                        />
                        <label className="form-check-label" htmlFor="cod">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>

                    {formData.paymentMethod === "online" && (
                      <div className="mb-3">
                        <label className="form-label">Payment Type</label>
                        <div className="d-flex flex-wrap gap-3">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentType"
                              id="creditCard"
                              value="creditCard"
                              checked={formData.paymentType === "creditCard"}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label d-flex align-items-center"
                              htmlFor="creditCard"
                            >
                              <FaCreditCard className="me-2" /> Credit Card
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentType"
                              id="googlePay"
                              value="googlePay"
                              checked={formData.paymentType === "googlePay"}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label d-flex align-items-center"
                              htmlFor="googlePay"
                            >
                              <FaGoogle className="me-2" /> Google Pay
                            </label>
                          </div>
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentType"
                              id="phonePe"
                              value="phonePe"
                              checked={formData.paymentType === "phonePe"}
                              onChange={handleInputChange}
                            />
                            <label
                              className="form-check-label d-flex align-items-center"
                              htmlFor="phonePe"
                            >
                              <FaMobile className="me-2" /> PhonePe
                            </label>
                          </div>
                          <div className="form-check">
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
                              className="form-check-label d-flex align-items-center"
                              htmlFor="paytm"
                            >
                              <FaMoneyBillWave className="me-2" /> Paytm
                            </label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={closeAllModals}
                >
                  Cancel
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={processPayment}
                  disabled={
                    isProcessingPayment ||
                    !formData.fullName ||
                    !formData.email ||
                    !formData.phone ||
                    !formData.address
                  }
                >
                  {isProcessingPayment ? (
                    <>
                      <span
                        className="spinner-border spinner-border-sm me-2"
                        role="status"
                        aria-hidden="true"
                      ></span>
                      Processing...
                    </>
                  ) : (
                    "Complete Payment"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Success Modal */}
      {showPaymentSuccess && selectedProduct && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header bg-success text-white">
                <h5 className="modal-title">Payment Successful!</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeAllModals}
                ></button>
              </div>
              <div className="modal-body">
                <div className="text-center mb-4">
                  <div className="bg-success bg-opacity-10 p-3 rounded-circle d-inline-block">
                    <FaCheck className="text-success" size={48} />
                  </div>
                  <h4 className="mt-3">Thank you for your purchase!</h4>
                  <p>Your order will be shipped soon.</p>
                </div>

                <h5 className="mb-3">Order Details</h5>
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
                      <tr>
                        <td>{selectedProduct.title}</td>
                        <td>{formData.quantity}</td>
                        <td>₹{selectedProduct.price}</td>
                        <td>₹{selectedProduct.price * formData.quantity}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="border-top pt-3">
                  <div className="d-flex justify-content-between">
                    <span>Subtotal:</span>
                    <span>₹{selectedProduct.price * formData.quantity}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <span>Discount ({selectedProduct.discount}):</span>
                    <span className="text-danger">
                      -₹
                      {(selectedProduct.price *
                        formData.quantity *
                        parseInt(selectedProduct.discount)) /
                        100 || 0}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between fw-bold">
                    <span>Total:</span>
                    <span>₹{calculateTotal()}</span>
                  </div>
                </div>

                <div className="mt-4">
                  <h5>Shipping Information</h5>
                  <p>
                    {formData.fullName}
                    <br />
                    {formData.address}
                    <br />
                    Phone: {formData.phone}
                    <br />
                    Email: {formData.email}
                  </p>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-success"
                  onClick={closeAllModals}
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
