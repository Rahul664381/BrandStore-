// import React, { useRef, useState } from "react";
// import {
//   FaStar,
//   FaStarHalfAlt,
//   FaRegStar,
//   FaChevronLeft,
//   FaChevronRight,
//   FaTimes,
//   FaPlus,
//   FaMinus,
// } from "react-icons/fa";

// const CardSlider = () => {
//   const containerRef = useRef();
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [quantity, setQuantity] = useState(1);
//   const [mainImage, setMainImage] = useState("");
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     address: "",
//     paymentMethod: "credit",
//   });

//   const scroll = (direction) => {
//     const scrollAmount = 340;
//     if (direction === "left") {
//       containerRef.current.scrollBy({
//         left: -scrollAmount,
//         behavior: "smooth",
//       });
//     } else {
//       containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
//     }
//   };

//   const openProductModal = (product) => {
//     setSelectedProduct(product);
//     setMainImage(product.image);
//     setQuantity(1);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   const handleQuantityChange = (action) => {
//     if (action === "increase") {
//       setQuantity(quantity + 1);
//     } else if (action === "decrease" && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the order to your backend
//     alert(`Order submitted for ${selectedProduct.title}`);
//     closeModal();
//   };

//   const cards = [
//     {
//       id: 1,
//       title: "Wireless Headphones",
//       description: "Noise cancelling wireless headphones",
//       price: 99.99,
//       image:
//         "https://computechstore.in/wp-content/uploads/2025/04/SENNHEISER-HD-25-Plus-Wired-Headphones-On-Ear-Headphones-Without-Microphone-Black-2.jpg",
//       thumbnails: [
//         "https://m.media-amazon.com/images/I/31gIOPxsviL._QL92_SH45_SS200_.jpg",
//         "https://sonyworld.ae/cdn/shop/files/GH-H9_mk_front_wb_black_002-Large.jpg?v=1749013977&width=1080",
//         "https://www.electroniksindia.com/cdn/shop/files/soundpeats-mini-pro-hybrid-active-noise-cancelling-wireless-earbuds-bluetooth-5-2-headphones-with-anc-qcc3040-aptx-adaptive-by-electroniksindia-675.webp?v=1739154723&width=1080",
//         "https://edifier.com.au/cdn/shop/files/x2.png?v=1707106977",
//         "https://rvb-img.reverb.com/image/upload/s--8VbgDjlc--/f_auto,t_large/v1660058969/l6tmjqqexgefzv74bruc.jpg",
//       ],
//     },
//     {
//       id: 2,
//       title: "Smart Watch",
//       description: "Fitness tracker with heart rate monitor",
//       price: 129.99,
//       image:
//         "https://www.gosupps.com/media/catalog/product/6/1/61HdayBcPjL.jpg",
//       thumbnails: [
//         "https://flaminfitness.com/cdn/shop/products/syncmotion-fitness-tracker-480572_700x700.webp?v=1704698507",
//         "https://img.kentfaith.com/cache/catalog/products/us/01A00072B/01A00072B-1-1200x1200.jpg",
//         "https://image.made-in-china.com/202f0j00ymPcoUOqGSkb/2024-Men-Sports-Smart-Watch-F300-IP67-Waterproof-Bt-Call-2-1inch-Big-Screen-Heart-Rate-Women-s-Health-Fitness-Tracker-Smartwatch.webp",
//         "https://multimedia.bbycastatic.ca/multimedia/products/500x500/188/18882/18882918.png",
//         "https://ouku-cf.rightinthebox.com/images/500x500/202404/bps/product/inc/xiyibr1712737339638.jpg",
//       ],
//     },
//     {
//       id: 3,
//       title: "Leather Wallet",
//       description: "Genuine leather bifold wallet",
//       price: 49.99,
//       image:
//         "https://cdn.pixabay.com/photo/2013/07/13/13/26/briefcase-161032_1280.png",
//       thumbnails: [
//         "https://m.media-amazon.com/images/I/71C0TCODzaL._AC_UY1000_.jpg",
//         "https://5.imimg.com/data5/SELLER/Default/2024/5/420365939/VQ/NK/RT/9665125/km-103-tan-01-500x500.jpg",
//         "https://png.pngtree.com/png-clipart/20250530/original/pngtree-brown-leather-bi-fold-wallet-isolated-png-image_21094838.png",
//         "https://m.media-amazon.com/images/I/71QkbUD-UwL._SX522_.jpg",
//         "https://leatheritaliano.com/cdn/shop/files/149BLUS5_676b1bd9-be7a-45c2-b0f1-f3ebb5ac2ec7-585303.jpg?v=1725667648&width=2400",
//       ],
//     },
//     {
//       id: 4,
//       title: "Bluetooth Speaker",
//       description: "Portable waterproof speaker",
//       price: 79.99,
//       image: "https://m.media-amazon.com/images/I/81DxScjnZkL.jpg",
//       thumbnails: [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa14WtueAo9ooYl-0n1xCRpISSuiF4N1JCtNmLYFQSWH61yZys25Wd0P41Sp_bTXe2SU&usqp=CAU",
//         "https://m.media-amazon.com/images/I/81iO98sgTsL.jpg",
//         "https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/mobile-tablet-speaker/c/z/n/bluetooth-speaker-m424-5w-portable-outdoor-speaker-with-hd-sound-original-imah2gn9zsyrzhfn.jpeg?q=90&crop=false",
//         "https://images.jdmagicbox.com/quickquotes/images_main/muzili-axloie-bt2405-waterproof-portable-wireless-bluetooth-speaker-with-hd-sound-5-hour-playtime-usb-micro-sd-card-fm-radio-and-aux-for-indoor-outdoor-pink-178089697-302mi.jpg",
//         "https://d3dxkzk9npnkec.cloudfront.net/uploads/images/202404/img_x500_6615796a1ac2c6-58697810-89229926.webp",
//       ],
//     },
//     {
//       id: 5,
//       title: "Running Shoes",
//       description: "Lightweight running shoes",
//       price: 89.99,
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0scn0bPqAXmitJjdmBA_jxtJNpzMQC0bfw&s",
//       thumbnails: [
//         "https://images-eu.ssl-images-amazon.com/images/I/61S0ClXYWdL._AC_SR462,693_.jpg",
//         "https://kraasa.com/cdn/shop/files/MG_0616_e039a866-b9dd-41a9-8008-04e0b73b45b8.jpg?v=1727158723",
//         "https://img.runningwarehouse.com/watermark/rsg.php?path=/content_images/landing-pages/Best_Lightweight_Shoes_/Best_Lightweight_Shoes-Content.jpg&nw=780",
//         "https://img.runningwarehouse.com/watermark/rsg.php?path=/content_images/landing-pages/Best_Lightweight_Shoes_/Best_Lightweight_Shoes-Content.jpg&nw=780",
//         "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018390627_437Wx649H_202307201700431.jpeg",
//       ],
//     },
//     {
//       id: 6,
//       title: "Coffee Maker",
//       description: "Programmable coffee machine",
//       price: 59.99,
//       image:
//         "https://5.imimg.com/data5/SELLER/Default/2023/2/VK/VI/WQ/137120036/a1-1000-500x500.png",
//       thumbnails: [
//         "https://c4.wallpaperflare.com/wallpaper/695/113/317/coffee-electric-coffee-machine-grains-wallpaper-preview.jpg",
//         "https://cdn.mos.cms.futurecdn.net/Kees4go78yN3NRhCjEdrDN.png",
//         "https://www.pngitem.com/pimgs/m/169-1699229_sunbeam-cafe-crema-espresso-coffee-machine-hd-png.png",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGftB6_2XejymTGmW7rcFlDrnfRTRBRLquMA&s",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv_nzCRv4okLhQdpXG6nx1d9SPQCWeurvYg&s",
//       ],
//     },
//     {
//       id: 7,
//       title: "Backpack",
//       description: "Durable laptop backpack",
//       price: 45.99,
//       image:
//         "https://toppng.com/uploads/preview/college-school-bag-11554020998rbfa5rqud0.jpg",
//       thumbnails: [
//         "https://p.globalsources.com/IMAGES/PDT/B0981949902/pu-leather-daypacks.jpg",
//         "https://sc04.alicdn.com/kf/H99421b33442a49c3b29fef9a0ddc3fb4Q.jpg",
//         "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/99a8de13cf57341bb4df2e8bc6bb33a5.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
//         "https://cdn11.bigcommerce.com/s-me8jghab9t/images/stencil/1000x1000/products/470/52135/cio9d6ilkoizt5jff9r7__55557.1689171615.jpg?c=1",
//         "https://i.ebayimg.com/images/g/dh8AAOSwRjVmBtZo/s-l400.jpg",
//       ],
//     },
//     {
//       id: 8,
//       title: "Desk Lamp",
//       description: "Adjustable LED desk lamp",
//       price: 34.99,
//       image:
//         "https://media.istockphoto.com/id/534400418/photo/desk-lamp.jpg?s=612x612&w=0&k=20&c=r8fSNGuqsgUrZHWBswRPMv8sdgwP5l67f-ECg-Djoh8=",
//       thumbnails: [
//         "https://i.pinimg.com/474x/c7/3a/99/c73a993834f8671b3e55c8af4638902f.jpg",
//         "https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320606_1280.png",
//         "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/66a46bb45fd2cf44f2386b6d/cat_img/spark__metalstudylamp_red____1723603683897_ii78921w1dwevhc.jpg",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHhiu2_GhzQ38VpmeKcO7JfQ8Tqwff8XvDA&s",
//         "https://st4.depositphotos.com/1337322/25284/i/450/depositphotos_252840140-stock-photo-powered-on-black-desk-lamp.jpg",
//       ],
//     },
//     {
//       id: 9,
//       title: "Wireless Mouse",
//       description: "Ergonomic wireless mouse",
//       price: 29.99,
//       image:
//         "https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s-mac-bluetooth-mouse/gallery/pale-grey/mx-master-3s-for-mac-mouse-side-view-pale-grey.png",
//       thumbnails: [
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsFUkxCZPaZWiNhLUWz0RLwMAjMKrS3-2czsuD6cgM-a5uZS2xcgArwjXL8YG5hF4-Ks&usqp=CAU",
//         "https://i.pinimg.com/736x/27/d2/78/27d27829bb3432573dceba32fc37fa09.jpg",
//         "https://m.media-amazon.com/images/I/61wmPL1w4WL._AC_UF894,1000_QL80_.jpg",
//         "https://rukminim2.flixcart.com/image/750/900/k5pn6vk0/mouse/a/m/v/smastore-optical-panda-computer-mouse-original-imafzbvguq2gubvs.jpeg?q=90&crop=false",
//         "https://www.shutterstock.com/image-photo/black-hp-wireless-mouse-isolated-260nw-2514995599.jpg",
//       ],
//     },
//     {
//       id: 10,
//       title: "Yoga Mat",
//       description: "Non-slip yoga mat",
//       price: 39.99,
//       image:
//         "https://dms.mydukaan.io/original/jpeg/media/a0fee709-2209-4d74-81e8-c55ebfcbce47.jpg",
//       thumbnails: [
//         "https://c0.wallpaperflare.com/preview/4/78/564/photo-of-woman-doing-yoga.jpg",
//         "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/14888262/2021/7/22/59cdde40-4aa7-4d07-bcc4-d38a95f37e811626945516551STRAUSSBlueSolidYogaMat1.jpg",
//         "https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1653.jpg?auto=webp&quality=75&width=1024",
//         "https://thinkingtoys.ie/cdn/shop/products/YOG002b.jpg?v=1644606377",
//         "https://www.everydayyoga.com/cdn/shop/files/7269382324267-peacockwithprint-3a.jpg?v=1725639491",
//       ],
//     },
//     {
//       id: 11,
//       title: "Air Fryer",
//       description: "Digital air fryer oven",
//       price: 119.99,
//       image:
//         "https://hips.hearstapps.com/hmg-prod/images/best-air-fryers-676066e9e4227.png?crop=0.501xw:1.00xh;0.466xw,0&resize=640:*",
//       thumbnails: [
//         "https://food.fnr.sndimg.com/content/dam/images/food/products/2024/1/5/rx_amazon_instant-vortex-9-quart-air-fryer-with-versazone-technology.jpeg.rend.hgtvcom.616.770.85.suffix/1704471998120.webp",
//         "https://tefal.in/public/storage/558ab3383f7f1f8998233a17dbd12d13/conversions/Tefal-Air-Fryer-Easy-Fry-5-webp-format.webp",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8XZXnA3Sx-7s9MR9VyIpFgq-sXmkemeDB4WXIYaJD8byx7luyHiKZdDim1-Urc7J-3Q&usqp=CAU",
//         "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/casaanza/catalog/api/casaanza_citelirr/5efe4a750a7cf.jpg",
//         "https://initiative.co.in/wp-content/uploads/2022/09/Untitled-design-2022-10-07T153027.130.jpg",
//       ],
//     },
//     {
//       id: 12,
//       title: "Sunglasses",
//       description: "UV protection polarized sunglasses",
//       price: 65.99,
//       image:
//         "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/M/2/M2360BK1V_3_lar.jpg",
//       thumbnails: [
//         "https://royalson.in/wp-content/uploads/2020/04/1-15-scaled.jpg",
//         "https://rukminim1.flixcart.com/image/300/300/xif0q/sunglass/g/m/c/medium-chi0049-royal-son-original-imah76h8rhgugujh.jpeg",
//         "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/M/2/M2360BK1V_3_lar.jpg",
//         "https://images-cdn.ubuy.co.in/6549266f16f2cd289121ce1c-zhongdan-eyewear-genius-monster-classic.jpg",
//         "https://mavigadget.com/cdn/shop/files/S35590896c0fc41be91ae6711736f2afbs.jpg?v=1742319367&width=1400",
//       ],
//     },
//   ];

//   return (
//     <div className="container my-5 position-relative">
//       {/* Left Button */}
//       <button
//         onClick={() => scroll("left")}
//         className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow"
//         style={{ zIndex: 10 }}
//       >
//         <FaChevronLeft />
//       </button>

//       {/* Scrollable Card Container */}
//       <div
//         className="d-flex overflow-auto gap-3 py-2"
//         ref={containerRef}
//         style={{ scrollBehavior: "smooth" }}
//       >
//         {cards.map((card) => (
//           <div
//             key={card.id}
//             className="card flex-shrink-0 border-0"
//             style={{ width: "300px", transition: "transform 0.3s" }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.transform = "scale(1.03)")
//             }
//             onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
//           >
//             <img
//               src={card.image}
//               className="card-img-top rounded-top"
//               alt={card.title}
//               style={{ height: "300px", objectFit: "cover" }}
//             />
//             <div className="card-body">
//               <h5 className="card-title">{card.title}</h5>
//               <p className="card-text text-muted small">{card.description}</p>
//               <div className="d-flex justify-content-between align-items-center mb-2">
//                 <span className="text-success fw-bold">${card.price}</span>
//                 <span className="text-warning">
//                   <FaStar />
//                   <FaStar />
//                   <FaStar />
//                   <FaStarHalfAlt />
//                   <FaRegStar />
//                 </span>
//               </div>
//               <button
//                 className="btn btn-primary w-100"
//                 onClick={() => openProductModal(card)}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Button */}
//       <button
//         onClick={() => scroll("right")}
//         className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow"
//         style={{ zIndex: 10 }}
//       >
//         <FaChevronRight />
//       </button>

//       {/* Product Modal */}
//       {selectedProduct && (
//         <div
//           className="modal fade show"
//           style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
//         >
//           <div className="modal-dialog modal-lg modal-dialog-centered">
//             <div className="modal-content">
//               <div className="modal-header">
//                 <h5 className="modal-title">{selectedProduct.title}</h5>
//                 <button
//                   type="button"
//                   className="btn-close"
//                   onClick={closeModal}
//                 ></button>
//               </div>
//               <div className="modal-body">
//                 <div className="row">
//                   <div className="col-md-6">
//                     <div className="mb-3">
//                       <img
//                         src={mainImage}
//                         alt={selectedProduct.title}
//                         className="img-fluid rounded"
//                         style={{ height: "300px", objectFit: "cover" }}
//                       />
//                     </div>
//                     <div className="d-flex justify-content-between">
//                       {selectedProduct.thumbnails.map((thumb, index) => (
//                         <img
//                           key={index}
//                           src={thumb}
//                           alt={`Thumbnail ${index + 1}`}
//                           className="img-thumbnail cursor-pointer"
//                           style={{
//                             width: "60px",
//                             height: "60px",
//                             objectFit: "cover",
//                           }}
//                           onClick={() => setMainImage(thumb)}
//                         />
//                       ))}
//                     </div>
//                   </div>
//                   <div className="col-md-6">
//                     <p>{selectedProduct.description}</p>
//                     <div className="d-flex align-items-center mb-3">
//                       <span className="text-warning me-2">
//                         <FaStar />
//                         <FaStar />
//                         <FaStar />
//                         <FaStarHalfAlt />
//                         <FaRegStar />
//                       </span>
//                       <span className="text-muted small">(24 reviews)</span>
//                     </div>
//                     <h4 className="text-success mb-4">
//                       ${selectedProduct.price}
//                     </h4>

//                     <div className="mb-4">
//                       <label className="form-label">Quantity</label>
//                       <div className="input-group" style={{ width: "150px" }}>
//                         <button
//                           className="btn btn-outline-secondary"
//                           type="button"
//                           onClick={() => handleQuantityChange("decrease")}
//                         >
//                           <FaMinus />
//                         </button>
//                         <input
//                           type="text"
//                           className="form-control text-center"
//                           value={quantity}
//                           readOnly
//                         />
//                         <button
//                           className="btn btn-outline-secondary"
//                           type="button"
//                           onClick={() => handleQuantityChange("increase")}
//                         >
//                           <FaPlus />
//                         </button>
//                       </div>
//                     </div>

//                     <div className="mb-3">
//                       <h5>
//                         Total: ${(selectedProduct.price * quantity).toFixed(2)}
//                       </h5>
//                     </div>

//                     <form onSubmit={handleSubmit}>
//                       <div className="mb-3">
//                         <label htmlFor="name" className="form-label">
//                           Full Name
//                         </label>
//                         <input
//                           type="text"
//                           className="form-control"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleInputChange}
//                           required
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="email" className="form-label">
//                           Email
//                         </label>
//                         <input
//                           type="email"
//                           className="form-control"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           required
//                         />
//                       </div>
//                       <div className="mb-3">
//                         <label htmlFor="address" className="form-label">
//                           Shipping Address
//                         </label>
//                         <textarea
//                           className="form-control"
//                           id="address"
//                           name="address"
//                           value={formData.address}
//                           onChange={handleInputChange}
//                           required
//                         ></textarea>
//                       </div>
//                       <div className="mb-4">
//                         <label className="form-label">Payment Method</label>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="paymentMethod"
//                             id="credit"
//                             value="credit"
//                             checked={formData.paymentMethod === "credit"}
//                             onChange={handleInputChange}
//                           />
//                           <label className="form-check-label" htmlFor="credit">
//                             Credit Card
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="paymentMethod"
//                             id="paypal"
//                             value="paypal"
//                             checked={formData.paymentMethod === "paypal"}
//                             onChange={handleInputChange}
//                           />
//                           <label className="form-check-label" htmlFor="paypal">
//                             PayPal
//                           </label>
//                         </div>
//                         <div className="form-check">
//                           <input
//                             className="form-check-input"
//                             type="radio"
//                             name="paymentMethod"
//                             id="cod"
//                             value="cod"
//                             checked={formData.paymentMethod === "cod"}
//                             onChange={handleInputChange}
//                           />
//                           <label className="form-check-label" htmlFor="cod">
//                             Cash on Delivery
//                           </label>
//                         </div>
//                       </div>
//                       <button type="submit" className="btn btn-primary w-100">
//                         Complete Purchase
//                       </button>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CardSlider;

import React, { useRef, useState, useEffect } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";

const CardSlider = () => {
  const containerRef = useRef();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    address: "",
    phone: "",
    paymentMethod: "Online",
    paymentType: "Credit Card",
  });
  const [showPaymentSuccess, setShowPaymentSuccess] = useState(false);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);

  const scroll = (direction) => {
    const scrollAmount = 340;
    if (direction === "left") {
      containerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    } else {
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const openProductModal = (product) => {
    setSelectedProduct(product);
    setMainImage(product.image);
    setQuantity(1);
    setShowPaymentSuccess(false);
    setFormData({
      fullName: "",
      email: "",
      address: "",
      phone: "",
      paymentMethod: "Online",
      paymentType: "Credit Card",
    });
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setShowPaymentSuccess(false);
    setIsProcessingPayment(false);
  };

  const handleQuantityChange = (action) => {
    if (action === "increase") {
      setQuantity(quantity + 1);
    } else if (action === "decrease" && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessingPayment(true);

    setTimeout(() => {
      setIsProcessingPayment(false);
      setShowPaymentSuccess(true);

      // Auto close after 30 seconds
      setTimeout(() => {
        closeModal();
      }, 30000);
    }, 3000);
  };

  const cards = [
    {
      id: 1,
      title: "Wireless Headphones",
      description: "Noise cancelling wireless headphones",
      price: 99.99,
      originalPrice: 129.99,
      image:
        "https://computechstore.in/wp-content/uploads/2025/04/SENNHEISER-HD-25-Plus-Wired-Headphones-On-Ear-Headphones-Without-Microphone-Black-2.jpg",
      thumbnails: [
        "https://m.media-amazon.com/images/I/31gIOPxsviL._QL92_SH45_SS200_.jpg",
        "https://sonyworld.ae/cdn/shop/files/GH-H9_mk_front_wb_black_002-Large.jpg?v=1749013977&width=1080",
        "https://www.electroniksindia.com/cdn/shop/files/soundpeats-mini-pro-hybrid-active-noise-cancelling-wireless-earbuds-bluetooth-5-2-headphones-with-anc-qcc3040-aptx-adaptive-by-electroniksindia-675.webp?v=1739154723&width=1080",
        "https://edifier.com.au/cdn/shop/files/x2.png?v=1707106977",
        "https://rvb-img.reverb.com/image/upload/s--8VbgDjlc--/f_auto,t_large/v1660058969/l6tmjqqexgefzv74bruc.jpg",
      ],
    },
    {
      id: 2,
      title: "Smart Watch",
      description: "Fitness tracker with heart rate monitor",
      price: 129.99,
      originalPrice: 159.99,
      image:
        "https://www.gosupps.com/media/catalog/product/6/1/61HdayBcPjL.jpg",
      thumbnails: [
        "https://flaminfitness.com/cdn/shop/products/syncmotion-fitness-tracker-480572_700x700.webp?v=1704698507",
        "https://img.kentfaith.com/cache/catalog/products/us/01A00072B/01A00072B-1-1200x1200.jpg",
        "https://image.made-in-china.com/202f0j00ymPcoUOqGSkb/2024-Men-Sports-Smart-Watch-F300-IP67-Waterproof-Bt-Call-2-1inch-Big-Screen-Heart-Rate-Women-s-Health-Fitness-Tracker-Smartwatch.webp",
        "https://multimedia.bbycastatic.ca/multimedia/products/500x500/188/18882/18882918.png",
        "https://ouku-cf.rightinthebox.com/images/500x500/202404/bps/product/inc/xiyibr1712737339638.jpg",
      ],
    },
    {
      id: 3,
      title: "Leather Wallet",
      description: "Genuine leather bifold wallet",
      price: 49.99,
      originalPrice: 69.99,
      image:
        "https://cdn.pixabay.com/photo/2013/07/13/13/26/briefcase-161032_1280.png",
      thumbnails: [
        "https://m.media-amazon.com/images/I/71C0TCODzaL._AC_UY1000_.jpg",
        "https://5.imimg.com/data5/SELLER/Default/2024/5/420365939/VQ/NK/RT/9665125/km-103-tan-01-500x500.jpg",
        "https://png.pngtree.com/png-clipart/20250530/original/pngtree-brown-leather-bi-fold-wallet-isolated-png-image_21094838.png",
        "https://m.media-amazon.com/images/I/71QkbUD-UwL._SX522_.jpg",
        "https://leatheritaliano.com/cdn/shop/files/149BLUS5_676b1bd9-be7a-45c2-b0f1-f3ebb5ac2ec7-585303.jpg?v=1725667648&width=2400",
      ],
    },
    {
      id: 4,
      title: "Bluetooth Speaker",
      description: "Portable waterproof speaker",
      price: 79.99,
      originalPrice: 99.99,
      image: "https://m.media-amazon.com/images/I/81DxScjnZkL.jpg",
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYa14WtueAo9ooYl-0n1xCRpISSuiF4N1JCtNmLYFQSWH61yZys25Wd0P41Sp_bTXe2SU&usqp=CAU",
        "https://m.media-amazon.com/images/I/81iO98sgTsL.jpg",
        "https://rukminim2.flixcart.com/image/850/1000/xif0q/speaker/mobile-tablet-speaker/c/z/n/bluetooth-speaker-m424-5w-portable-outdoor-speaker-with-hd-sound-original-imah2gn9zsyrzhfn.jpeg?q=90&crop=false",
        "https://images.jdmagicbox.com/quickquotes/images_main/muzili-axloie-bt2405-waterproof-portable-wireless-bluetooth-speaker-with-hd-sound-5-hour-playtime-usb-micro-sd-card-fm-radio-and-aux-for-indoor-outdoor-pink-178089697-302mi.jpg",
        "https://d3dxkzk9npnkec.cloudfront.net/uploads/images/202404/img_x500_6615796a1ac2c6-58697810-89229926.webp",
      ],
    },
    {
      id: 5,
      title: "Running Shoes",
      description: "Lightweight running shoes",
      price: 89.99,
      originalPrice: 119.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTl0scn0bPqAXmitJjdmBA_jxtJNpzMQC0bfw&s",
      thumbnails: [
        "https://images-eu.ssl-images-amazon.com/images/I/61S0ClXYWdL._AC_SR462,693_.jpg",
        "https://kraasa.com/cdn/shop/files/MG_0616_e039a866-b9dd-41a9-8008-04e0b73b45b8.jpg?v=1727158723",
        "https://img.runningwarehouse.com/watermark/rsg.php?path=/content_images/landing-pages/Best_Lightweight_Shoes_/Best_Lightweight_Shoes-Content.jpg&nw=780",
        "https://img.runningwarehouse.com/watermark/rsg.php?path=/content_images/landing-pages/Best_Lightweight_Shoes_/Best_Lightweight_Shoes-Content.jpg&nw=780",
        "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018390627_437Wx649H_202307201700431.jpeg",
      ],
    },
    {
      id: 6,
      title: "Coffee Maker",
      description: "Programmable coffee machine",
      price: 59.99,
      originalPrice: 79.99,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/2/VK/VI/WQ/137120036/a1-1000-500x500.png",
      thumbnails: [
        "https://c4.wallpaperflare.com/wallpaper/695/113/317/coffee-electric-coffee-machine-grains-wallpaper-preview.jpg",
        "https://cdn.mos.cms.futurecdn.net/Kees4go78yN3NRhCjEdrDN.png",
        "https://www.pngitem.com/pimgs/m/169-1699229_sunbeam-cafe-crema-espresso-coffee-machine-hd-png.png",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGftB6_2XejymTGmW7rcFlDrnfRTRBRLquMA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiv_nzCRv4okLhQdpXG6nx1d9SPQCWeurvYg&s",
      ],
    },
    {
      id: 7,
      title: "Backpack",
      description: "Durable laptop backpack",
      price: 45.99,
      originalPrice: 59.99,
      image:
        "https://toppng.com/uploads/preview/college-school-bag-11554020998rbfa5rqud0.jpg",
      thumbnails: [
        "https://p.globalsources.com/IMAGES/PDT/B0981949902/pu-leather-daypacks.jpg",
        "https://sc04.alicdn.com/kf/H99421b33442a49c3b29fef9a0ddc3fb4Q.jpg",
        "https://img.kwcdn.com/product/Fancyalgo/VirtualModelMatting/99a8de13cf57341bb4df2e8bc6bb33a5.jpg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp",
        "https://cdn11.bigcommerce.com/s-me8jghab9t/images/stencil/1000x1000/products/470/52135/cio9d6ilkoizt5jff9r7__55557.1689171615.jpg?c=1",
        "https://i.ebayimg.com/images/g/dh8AAOSwRjVmBtZo/s-l400.jpg",
      ],
    },
    {
      id: 8,
      title: "Desk Lamp",
      description: "Adjustable LED desk lamp",
      price: 34.99,
      originalPrice: 49.99,
      image:
        "https://media.istockphoto.com/id/534400418/photo/desk-lamp.jpg?s=612x612&w=0&k=20&c=r8fSNGuqsgUrZHWBswRPMv8sdgwP5l67f-ECg-Djoh8=",
      thumbnails: [
        "https://i.pinimg.com/474x/c7/3a/99/c73a993834f8671b3e55c8af4638902f.jpg",
        "https://cdn.pixabay.com/photo/2017/05/17/11/20/table-lamp-2320606_1280.png",
        "https://d1311wbk6unapo.cloudfront.net/NushopCatalogue/tr:f-webp,w-600,fo-auto/66a46bb45fd2cf44f2386b6d/cat_img/spark__metalstudylamp_red____1723603683897_ii78921w1dwevhc.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOHhiu2_GhzQ38VpmeKcO7JfQ8Tqwff8XvDA&s",
        "https://st4.depositphotos.com/1337322/25284/i/450/depositphotos_252840140-stock-photo-powered-on-black-desk-lamp.jpg",
      ],
    },
    {
      id: 9,
      title: "Wireless Mouse",
      description: "Ergonomic wireless mouse",
      price: 29.99,
      originalPrice: 39.99,
      image:
        "https://www.logitech.com/content/dam/logitech/en/products/mice/mx-master-3s-mac-bluetooth-mouse/gallery/pale-grey/mx-master-3s-for-mac-mouse-side-view-pale-grey.png",
      thumbnails: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdsFUkxCZPaZWiNhLUWz0RLwMAjMKrS3-2czsuD6cgM-a5uZS2xcgArwjXL8YG5hF4-Ks&usqp=CAU",
        "https://i.pinimg.com/736x/27/d2/78/27d27829bb3432573dceba32fc37fa09.jpg",
        "https://m.media-amazon.com/images/I/61wmPL1w4WL._AC_UF894,1000_QL80_.jpg",
        "https://rukminim2.flixcart.com/image/750/900/k5pn6vk0/mouse/a/m/v/smastore-optical-panda-computer-mouse-original-imafzbvguq2gubvs.jpeg?q=90&crop=false",
        "https://www.shutterstock.com/image-photo/black-hp-wireless-mouse-isolated-260nw-2514995599.jpg",
      ],
    },
    {
      id: 10,
      title: "Yoga Mat",
      description: "Non-slip yoga mat",
      price: 39.99,
      originalPrice: 49.99,
      image:
        "https://dms.mydukaan.io/original/jpeg/media/a0fee709-2209-4d74-81e8-c55ebfcbce47.jpg",
      thumbnails: [
        "https://c0.wallpaperflare.com/preview/4/78/564/photo-of-woman-doing-yoga.jpg",
        "https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/14888262/2021/7/22/59cdde40-4aa7-4d07-bcc4-d38a95f37e811626945516551STRAUSSBlueSolidYogaMat1.jpg",
        "https://cdn.thewirecutter.com/wp-content/media/2024/07/yoga-mat-2048px-1653.jpg?auto=webp&quality=75&width=1024",
        "https://thinkingtoys.ie/cdn/shop/products/YOG002b.jpg?v=1644606377",
        "https://www.everydayyoga.com/cdn/shop/files/7269382324267-peacockwithprint-3a.jpg?v=1725639491",
      ],
    },
    {
      id: 11,
      title: "Air Fryer",
      description: "Digital air fryer oven",
      price: 119.99,
      originalPrice: 149.99,
      image:
        "https://hips.hearstapps.com/hmg-prod/images/best-air-fryers-676066e9e4227.png?crop=0.501xw:1.00xh;0.466xw,0&resize=640:*",
      thumbnails: [
        "https://food.fnr.sndimg.com/content/dam/images/food/products/2024/1/5/rx_amazon_instant-vortex-9-quart-air-fryer-with-versazone-technology.jpeg.rend.hgtvcom.616.770.85.suffix/1704471998120.webp",
        "https://tefal.in/public/storage/558ab3383f7f1f8998233a17dbd12d13/conversions/Tefal-Air-Fryer-Easy-Fry-5-webp-format.webp",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy8XZXnA3Sx-7s9MR9VyIpFgq-sXmkemeDB4WXIYaJD8byx7luyHiKZdDim1-Urc7J-3Q&usqp=CAU",
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/casaanza/catalog/api/casaanza_citelirr/5efe4a750a7cf.jpg",
        "https://initiative.co.in/wp-content/uploads/2022/09/Untitled-design-2022-10-07T153027.130.jpg",
      ],
    },
    {
      id: 12,
      title: "Sunglasses",
      description: "UV protection polarized sunglasses",
      price: 65.99,
      originalPrice: 89.99,
      image:
        "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/M/2/M2360BK1V_3_lar.jpg",
      thumbnails: [
        "https://royalson.in/wp-content/uploads/2020/04/1-15-scaled.jpg",
        "https://rukminim1.flixcart.com/image/300/300/xif0q/sunglass/g/m/c/medium-chi0049-royal-son-original-imah76h8rhgugujh.jpeg",
        "https://d3995ea24pmi7m.cloudfront.net/media/catalog/product/M/2/M2360BK1V_3_lar.jpg",
        "https://images-cdn.ubuy.co.in/6549266f16f2cd289121ce1c-zhongdan-eyewear-genius-monster-classic.jpg",
        "https://mavigadget.com/cdn/shop/files/S35590896c0fc41be91ae6711736f2afbs.jpg?v=1742319367&width=1400",
      ],
    },
  ];

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
    <div className="container my-5 position-relative">
      {/* Left Button */}
      <button
        onClick={() => scroll("left")}
        className="btn btn-light position-absolute top-50 start-0 translate-middle-y shadow d-none d-md-block"
        style={{ zIndex: 10 }}
      >
        <FaChevronLeft />
      </button>

      {/* Scrollable Card Container */}
      <div
        className="d-flex overflow-auto gap-3 py-2"
        ref={containerRef}
        style={{ scrollBehavior: "smooth" }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="card flex-shrink-0 border-0"
            style={{ width: "300px", transition: "transform 0.3s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.03)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img
              src={card.image}
              className="card-img-top rounded-top"
              alt={card.title}
              style={{ height: "300px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{card.title}</h5>
              <p className="card-text text-muted small">{card.description}</p>
              <div className="d-flex justify-content-between align-items-center mb-2">
                <div>
                  <span className="text-success fw-bold">${card.price}</span>
                  {card.originalPrice && (
                    <span className="text-decoration-line-through text-muted ms-2 small">
                      ${card.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-warning">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStarHalfAlt />
                  <FaRegStar />
                </span>
              </div>
              <button
                className="btn btn-primary w-100"
                onClick={() => openProductModal(card)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => scroll("right")}
        className="btn btn-light position-absolute top-50 end-0 translate-middle-y shadow d-none d-md-block"
        style={{ zIndex: 10 }}
      >
        <FaChevronRight />
      </button>

      {/* Product Modal */}
      {selectedProduct && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{selectedProduct.title}</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div className="modal-body">
                {!showPaymentSuccess ? (
                  <div className="row">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <img
                          src={mainImage}
                          alt={selectedProduct.title}
                          className="img-fluid rounded"
                          style={{ height: "300px", objectFit: "cover" }}
                        />
                      </div>
                      <div className="d-flex justify-content-between">
                        {selectedProduct.thumbnails.map((thumb, index) => (
                          <img
                            key={index}
                            src={thumb}
                            alt={`Thumbnail ${index + 1}`}
                            className="img-thumbnail cursor-pointer"
                            style={{
                              width: "60px",
                              height: "60px",
                              objectFit: "cover",
                            }}
                            onClick={() => setMainImage(thumb)}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <p>{selectedProduct.description}</p>
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
                        <span className="text-success fw-bold fs-4">
                          ${selectedProduct.price}
                        </span>
                        {selectedProduct.originalPrice && (
                          <span className="text-decoration-line-through text-muted ms-2">
                            ${selectedProduct.originalPrice}
                          </span>
                        )}
                      </div>

                      <div className="mb-4">
                        <label className="form-label">Quantity</label>
                        <div className="input-group" style={{ width: "150px" }}>
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
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
                            type="button"
                            onClick={() => handleQuantityChange("increase")}
                          >
                            <FaPlus />
                          </button>
                        </div>
                      </div>

                      <div className="mb-4">
                        <h5>Order Summary</h5>
                        <table className="table table-sm">
                          <tbody>
                            <tr>
                              <td>Product:</td>
                              <td>{selectedProduct.title}</td>
                            </tr>
                            <tr>
                              <td>Quantity:</td>
                              <td>{quantity}</td>
                            </tr>
                            <tr>
                              <td>Price:</td>
                              <td>${selectedProduct.price}</td>
                            </tr>
                            <tr>
                              <td>Total Price:</td>
                              <td>${totalPrice}</td>
                            </tr>
                            <tr>
                              <td>Total Discount:</td>
                              <td className="text-success">
                                -${totalDiscount}
                              </td>
                            </tr>
                          </tbody>
                        </table>
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
                          <label htmlFor="address" className="form-label">
                            Shipping Address
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
                      <i
                        className="bi bi-check-circle-fill text-success"
                        style={{ fontSize: "4rem" }}
                      ></i>
                    </div>
                    <h3 className="text-success mb-3">
                      Your Payment Successful!
                    </h3>
                    <p className="mb-4">
                      Thank you for your purchase. Your order will be shipped
                      soon.
                    </p>
                    <div className="border p-3 text-start">
                      <h5>Order Details</h5>
                      <p>
                        <strong>Product:</strong> {selectedProduct.title}
                      </p>
                      <p>
                        <strong>Quantity:</strong> {quantity}
                      </p>
                      <p>
                        <strong>Total Price:</strong> ${totalPrice}
                      </p>
                      <p>
                        <strong>Discount:</strong> ${totalDiscount}
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
                    onClick={closeModal}
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

export default CardSlider;
