import React, { useState, useEffect } from "react";
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaCartPlus,
  FaHeart,
  FaSearch,
} from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function KitchenAppliances() {
  const [cart, setCart] = useState(
    () => JSON.parse(localStorage.getItem("cart")) || []
  );
  const [wishlist, setWishlist] = useState(
    () => JSON.parse(localStorage.getItem("wishlist")) || []
  );
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [cart, wishlist]);

  const kitchenAppliances = [
    {
      id: 1,
      title: "Instant Pot Duo 7-in-1 Electric Pressure Cooker",
      desc: "7-in-1 functionality - pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker and warmer",
      price: 7999,
      originalPrice: 9999,
      discount: "20% off",
      rating: 4.6,
      img: "https://m.media-amazon.com/images/I/61WZ8UkkReL._AC_UF894,1000_QL80_.jpg",
      category: "kitchen",
    },
    {
      id: 2,
      title: "Ninja Foodi 8-in-1 Digital Air Fry Oven",
      desc: "8-in-1 functionality with air fry, roast, bake, broil, toast, bagel, dehydrate and keep warm",
      price: 12999,
      originalPrice: 15999,
      discount: "19% off",
      rating: 4.5,
      img: "https://i.ebayimg.com/images/g/PN0AAOSww2NluQOT/s-l400.jpg",
      category: "kitchen",
    },
    {
      id: 3,
      title: "Vitamix 5200 Blender",
      desc: "Professional-grade blender with 64-oz container and 2.2 peak HP motor",
      price: 24999,
      originalPrice: 29999,
      discount: "17% off",
      rating: 4.8,
      img: "https://media.cnn.com/api/v1/images/stellar/prod/underscored-primedaysplurges-vitamix-5200-blender.jpg?c=16x9&q=h_720,w_1280,c_fill",
      category: "kitchen",
    },
    {
      id: 4,
      title: "KitchenAid Artisan Stand Mixer",
      desc: "5-quart tilt-head stand mixer with 10-speed sliding scale",
      price: 28999,
      originalPrice: 34999,
      discount: "17% off",
      rating: 4.7,
      img: "https://images.thdstatic.com/productImages/bb566eb0-0d51-4fa1-802c-995ef089b3c3/svn/aqua-sky-kitchenaid-stand-mixers-ksm150psaq-64_600.jpg",
      category: "kitchen",
    },
    {
      id: 5,
      title: "Breville Smart Oven Air Fryer",
      desc: "Convection toaster oven with air fry, toast, bake, roast, broil and warm functions",
      price: 17999,
      originalPrice: 21999,
      discount: "18% off",
      rating: 4.6,
      img: "https://www.kitchenkapers.com/cdn/shop/products/breville-smart-oven-air-28_0a1ae4da-caae-4642-b2a7-d290f6b7a23e.gif?v=1600960501",
      category: "kitchen",
    },
    {
      id: 6,
      title: "Cuisinart Griddler Deluxe",
      desc: "5-in-1 griddle, grill, panini press, full grill and full griddle",
      price: 8999,
      originalPrice: 10999,
      discount: "18% off",
      rating: 4.4,
      img: "https://www.cuisinart.com/dw/image/v2/ABAF_PRD/on/demandware.static/-/Sites-master-us/default/dwcf6b3060/images/large/GR-4NP1_A.jpg?sw=800&sh=800",
      category: "kitchen",
    },
    {
      id: 7,
      title: "Ninja Professional Blender",
      desc: "1000-watt blender with 72-oz pitcher and 3 speeds plus pulse",
      price: 6999,
      originalPrice: 8999,
      discount: "22% off",
      rating: 4.5,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKk2stWHfYGTKTgFSp-uXF0BO8TG_S3MgHkA&s",
      category: "kitchen",
    },
    {
      id: 8,
      title: "Instant Vortex Plus Air Fryer",
      desc: "7-in-1 air fryer with EvenCrisp technology and one-touch smart programs",
      price: 10999,
      originalPrice: 13999,
      discount: "21% off",
      rating: 4.5,
      img: "https://instanthome.in/images/product/instant-vortex-10qt/instant-vortex-10qt-01.webp",
      category: "kitchen",
    },
    {
      id: 9,
      title: "Keurig K-Classic Coffee Maker",
      desc: "Single serve coffee maker with 6 to 10 oz. brew sizes and removable drip tray",
      price: 5999,
      originalPrice: 7999,
      discount: "25% off",
      rating: 4.4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQihcz6DkL5BxHUByjQb7Cl-qhwXVDffi4uVg&s",
      category: "kitchen",
    },
    {
      id: 10,
      title: "Ninja Foodi 5-in-1 Indoor Grill",
      desc: "Indoor grill with air fry, roast, bake, broil and dehydrate functions",
      price: 14999,
      originalPrice: 17999,
      discount: "17% off",
      rating: 4.6,
      img: "https://images-cdn.ubuy.co.in/64bcbe1a3eeaa4328a6f5a4f-ninja-foodi-5-in-1-indoor-grill-with.jpg",
      category: "kitchen",
    },
    {
      id: 11,
      title: "Cuisinart Ice Cream Maker",
      desc: "2-quart automatic ice cream maker with freezer bowl and mixing paddle",
      price: 4999,
      originalPrice: 6999,
      discount: "29% off",
      rating: 4.3,
      img: "https://hnau.imgix.net/media/catalog/product/i/c/ice5_1.jpg",
      category: "kitchen",
    },
    {
      id: 12,
      title: "Breville Juice Fountain Cold",
      desc: "850-watt juicer with 70-oz pulp container and extra-wide feed chute",
      price: 12999,
      originalPrice: 15999,
      discount: "19% off",
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/51CV5HoAxuL.jpg",
      category: "kitchen",
    },
    {
      id: 13,
      title: "Zojirushi Rice Cooker",
      desc: "5.5-cup neuro fuzzy rice cooker with keep warm and extended keep warm functions",
      price: 14999,
      originalPrice: 17999,
      discount: "17% off",
      rating: 4.7,
      img: "https://www.thehappycook.com/cdn/shop/products/THC02667.jpg?v=1486572043",
      category: "kitchen",
    },
    {
      id: 14,
      title: "KitchenAid Food Processor",
      desc: "9-cup food processor with ExactSlice system and 3 work bowls",
      price: 12999,
      originalPrice: 15999,
      discount: "19% off",
      rating: 4.6,
      img: "https://www.offandon.in/cdn/shop/products/71j6HPLVEIL3_679x679.jpg?v=1655551374",
      category: "kitchen",
    },
    {
      id: 15,
      title: "Ninja Professional Plus Blender",
      desc: "1400-peak-watt blender with 72-oz pitcher and 3 speeds plus pulse",
      price: 9999,
      originalPrice: 12999,
      discount: "23% off",
      rating: 4.6,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGJ1GsvB7gF4cD2xRaGiuM_B9lm9Hql3cG_Q&s",
      category: "kitchen",
    },
    {
      id: 16,
      title: "Cuisinart Coffee Grinder",
      desc: "Electric burr mill grinder with 18-position grind selector",
      price: 3999,
      originalPrice: 5999,
      discount: "33% off",
      rating: 4.4,
      img: "https://www.thebrick.com/cdn/shop/products/shopify-image_19478c8e-db67-43e6-80f7-8b93dc7fe45a_1500x.jpg?v=1637162672",
      category: "kitchen",
    },
    {
      id: 17,
      title: "Breville Smart Scoop Ice Cream Maker",
      desc: "Automatic ice cream maker with 12 hardness settings and pre-cool function",
      price: 39999,
      originalPrice: 49999,
      discount: "20% off",
      rating: 4.5,
      img: "https://res.cloudinary.com/pangea-prod/image/upload/w_620,c_limit,q_auto:good/v1584024444/production/aXRlbV92YXJpYW50/NzoyMTYxNDA1NDIzNDppbWFnZTplbi1DQTpwcmltYXJ5.png",
      category: "kitchen",
    },
    {
      id: 18,
      title: "Instant Pot Pro 10-in-1 Pressure Cooker",
      desc: "10-in-1 pressure cooker with sous vide, slow cook, steam and more",
      price: 10999,
      originalPrice: 13999,
      discount: "21% off",
      rating: 4.7,
      img: "https://images-cdn.ubuy.co.in/643c0090924dcd6cc26c8fe4-instant-pot-pro-10-in-1-pressure-cooker.jpg",
      category: "kitchen",
    },
    {
      id: 19,
      title: "Vitamix FoodCycler",
      desc: "Electric food recycler that turns food waste into fertilizer",
      price: 24999,
      originalPrice: 29999,
      discount: "17% off",
      rating: 4.3,
      img: "https://images-cdn.ubuy.co.in/660f3c9a4762e256e87b5045-vitamix-foodcycler-fc-50-slate.jpg",
      category: "kitchen",
    },
    {
      id: 20,
      title: "KitchenAid Har",
      desc: "9-speed hand mixer with 5-quart bowl and 2 stainless steel beaters",
      price: 4999,
      originalPrice: 6999,
      discount: "29% off",
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/61F3MS122rL.jpg",
      category: "kitchen",
    },
    {
      id: 21,
      title: "Ninja Foodi Grill",
      desc: "Indoor grill with 4-in-1 functionality for grilling, air frying, roasting and baking",
      price: 14999,
      originalPrice: 17999,
      discount: "17% off",
      rating: 4.6,
      img: "https://maceandcrown.com/wp-content/uploads/2022/11/NINJA-FOODI-AG301.webp",
      category: "kitchen",
    },
    {
      id: 22,
      title: "Breville Barista Express Espresso Machine",
      desc: "Semi-automatic espresso machine with built-in conical burr grinder",
      price: 39999,
      originalPrice: 49999,
      discount: "20% off",
      rating: 4.7,
      img: "https://www.berings.com/wp-content/uploads/2022/06/Breville-The-Barista-Express-Espresso-Machine-1024x1024.webp",
      category: "kitchen",
    },
    {
      id: 23,
      title: "Cuisinart Griddle and Grill",
      desc: "Electric griddle and grill combo with removable plates",
      price: 5999,
      originalPrice: 7999,
      discount: "25% off",
      rating: 4.3,
      img: "https://m.media-amazon.com/images/I/61UXQ82C8bL.jpg",
      category: "kitchen",
    },
    {
      id: 24,
      title: "Instant Pot Duo Crisp",
      desc: "11-in-1 pressure cooker with air fryer lid",
      price: 11999,
      originalPrice: 14999,
      discount: "20% off",
      rating: 4.6,
      img: "https://www.instantpot.nl/images/detailed/30/Tile1_140-0045-01_DuoCrisp_6QT_e0tu-gp_endj-y3.jpg",
      category: "kitchen",
    },
    {
      id: 25,
      title: "Vitamix Ascent Series Blender",
      desc: "Professional-grade blender with self-detect technology",
      price: 34999,
      originalPrice: 42999,
      discount: "19% off",
      rating: 4.8,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc3KAmsXjq91VTaCvPGaQbJ3NFMluk5MysHA&s",
      category: "kitchen",
    },
    {
      id: 26,
      title: "KitchenAid K400 Blender",
      desc: "5-speed blender with 56-oz jar and soft start feature",
      price: 8999,
      originalPrice: 10999,
      discount: "18% off",
      rating: 4.4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmKo9X-5CnO4G6yxeGqGmxVi_6wqQ2OSokg&s",
      category: "kitchen",
    },
    {
      id: 27,
      title: "Ninja Foodi Power Blender",
      desc: "1400-peak-watt blender with Auto-iQ technology",
      price: 10999,
      originalPrice: 13999,
      discount: "21% off",
      rating: 4.5,
      img: "https://m.media-amazon.com/images/I/518ZHDPFjmL.jpg",
      category: "kitchen",
    },
    {
      id: 28,
      title: "Breville Smart Toaster",
      desc: "4-slice toaster with 6 shade settings and lift-and-look feature",
      price: 7999,
      originalPrice: 9999,
      discount: "20% off",
      rating: 4.4,
      img: "https://www.nellaonline.com/cdn/shop/products/brevillebrbta840xltoaster-696852_1200x1200_crop_center.jpg?v=1653674571",
      category: "kitchen",
    },
    {
      id: 29,
      title: "Cuisinart Stainless Steel Cookware Set",
      desc: "12-piece stainless steel cookware set with glass lids",
      price: 14999,
      originalPrice: 19999,
      discount: "25% off",
      rating: 4.6,
      img: "https://m.media-amazon.com/images/I/61c04TQQ2sL._AC_UF894,1000_QL80_.jpg",
      category: "kitchen",
    },
    {
      id: 30,
      title: "Instant Pot Max Pressure Cooker",
      desc: "6-quart pressure cooker with sous vide and canning functions",
      price: 12999,
      originalPrice: 15999,
      discount: "19% off",
      rating: 4.7,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUJDDC_CdOlqcLP-nEWxTeNrcVUUCIcmkZEQ&s",
      category: "kitchen",
    },
  ];

  // Filter and sort products
  let filteredItems = kitchenAppliances
    .filter((item) => filter === "all" || item.category === filter)
    .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) => {
      if (sort === "priceLowHigh") return a.price - b.price;
      if (sort === "priceHighLow") return b.price - a.price;
      if (sort === "rating") return b.rating - a.rating;
      return 0;
    });

  // Pagination
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);
  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Cart and Wishlist functions
  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    setCart(
      existingItem
        ? cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...cart, { ...product, quantity: 1 }]
    );
    toast.success(`${product.title} added to cart!`);
  };

  const toggleWishlist = (product) => {
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    setWishlist(
      isInWishlist
        ? wishlist.filter((item) => item.id !== product.id)
        : [...wishlist, product]
    );
    toast.info(isInWishlist ? "Removed from wishlist" : "Added to wishlist!");
  };

  // Star rating component
  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => {
        const starValue = i + 1;
        if (starValue <= Math.floor(rating)) {
          return <FaStar key={i} className="text-warning" />;
        }
        if (starValue === Math.ceil(rating) && rating % 1 >= 0.5) {
          return <FaStarHalfAlt key={i} className="text-warning" />;
        }
        return <FaRegStar key={i} className="text-warning" />;
      });
  };

  return (
    <div className="container py-5">
      <ToastContainer position="bottom-right" autoClose={2000} />
      <h1 className="text-center mb-4">Kitchen Appliances</h1>

      {/* Search and Filter Controls */}
      <div className="row mb-4 g-3">
        <div className="col-md-4">
          <div className="input-group">
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
          </div>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={sort}
            onChange={(e) => {
              setSort(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="">Sort By</option>
            <option value="priceLowHigh">Price: Low to High</option>
            <option value="priceHighLow">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
              setCurrentPage(1);
            }}
          >
            <option value="all">All Categories</option>
            <option value="kitchen">Kitchen Appliances</option>
          </select>
        </div>
      </div>

      {/* Product Count */}
      <div className="mb-3 text-muted">
        Showing {filteredItems.length} products
      </div>

      {/* Product Grid */}
      <div className="row g-4">
        {paginatedItems.length > 0 ? (
          paginatedItems.map((item) => (
            <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img
                    src={item.img}
                    className="card-img-top p-3"
                    alt={item.title}
                    style={{ height: "200px", objectFit: "contain" }}
                  />
                  <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                    {item.discount}
                  </span>
                  <button
                    className={`btn btn-sm position-absolute top-0 end-0 m-2 p-2 ${
                      wishlist.some((i) => i.id === item.id)
                        ? "btn-danger"
                        : "btn-outline-secondary"
                    }`}
                    onClick={() => toggleWishlist(item)}
                  >
                    <FaHeart />
                  </button>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>
                    {item.title}
                  </h5>
                  <p className="card-text text-muted small mb-2">{item.desc}</p>
                  <div className="mt-auto">
                    <div className="d-flex align-items-center mb-2">
                      {renderStars(item.rating)}
                      <span className="ms-2 small">
                        {item.rating.toFixed(1)}
                      </span>
                    </div>
                    <div className="mb-3">
                      <span className="fw-bold text-primary">
                        ₹{item.price}
                      </span>
                      <span className="text-decoration-line-through text-muted small ms-2">
                        ₹{item.originalPrice}
                      </span>
                    </div>
                    <button
                      className="btn btn-warning w-100"
                      onClick={() => addToCart(item)}
                    >
                      <FaCartPlus className="me-2" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12 text-center py-5">
            <h4>No products found</h4>
            <p>Try adjusting your search or filter criteria</p>
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
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                >
                  Previous
                </button>
              </li>
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                return (
                  <li
                    key={pageNum}
                    className={`page-item ${
                      currentPage === pageNum ? "active" : ""
                    }`}
                  >
                    <button
                      className="page-link"
                      onClick={() => setCurrentPage(pageNum)}
                    >
                      {pageNum}
                    </button>
                  </li>
                );
              })}
              <li
                className={`page-item ${
                  currentPage === totalPages ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default KitchenAppliances;
