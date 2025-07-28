import React from "react";
import { Routes, Route } from "react-router-dom";
import "animate.css";
import Navbar from "../src/Componemt/Navbar.jsx";
import Footer from "../src/Componemt/Footer.jsx";
import Hero from "../src/Componemt/Home/Hero.jsx";
import MarqueeSlider from "./Componemt/Home/MarqueeSlider.jsx";
import CardSlider from "./Componemt/Home/CardSlider.jsx";
import ProductCard from "./Componemt/Home/ProductCard.jsx";
import Testimonials from "./Componemt/Home/Testimonials.jsx";
import Gallery from "./Componemt/Home/Gallery.jsx";
import Update from "./Componemt/Home/Update.jsx";
import KitchenAppliances from "./Componemt/Home/Shop_by_Category/KitchenAppliances.jsx";
import Electronics from "./Componemt/Home/Shop_by_Category/Home_Electronics.jsx";
import Home from "./Componemt/Home/Shop_by_Category/Home_Home.jsx";
import Men from "./Componemt/Home/Shop_by_Category/Home_Men.jsx";
import Women from "./Componemt/Home/Shop_by_Category/Home_Women.jsx";
import Service from "./Componemt/Service/Service.jsx";
import ProductDetail from "./Componemt/Service/ProductDetail.jsx";
import ShoppingWebsite from "./Componemt/Home/ShoppingWebsite.jsx";
import Tra from "./Componemt/Home/Tra.jsx";
import PricingSection from "./Componemt/Shop/PricingSection.jsx";
import ContactPage from "./Componemt/Contact/ContactPage.jsx";
import Shopping1 from "../src/Shopping1.jsx";
import ShoppingSection from "./Componemt/Home/ShowCard/ShoppingSection.jsx";
import HeroSection from "./Componemt/Service/HeroSection1.jsx";
import HomeMenComplete from "./Componemt/HomeMenCompleteOne/HomeMenComplete.jsx";
import HeroCarousel from "./Componemt/Shop/HeroCarousel.jsx";
import HeroCarouselC from "./Componemt/Categories/HeroCarouselC.jsx";
import HeroCarouselA from "./Componemt/Service/HeroCarouselA.jsx";
import HeroCarouselD from "./Componemt/About/HeroCarouselD.jsx";
import HeroCarouselB from "./Componemt/Contact/HeroCarouselB.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <MarqueeSlider />
              <HomeMenComplete />
              <PricingSection />
              <CardSlider />
              <ProductCard />
              <Testimonials />
              <ShoppingWebsite />
              <Gallery />
              <Tra />
              <Update />
            </>
          }
        />
        <Route path="/ShoppingSection" element={<ShoppingSection />} />
        <Route
          path="/Shop"
          element={
            <>
              <HeroCarousel />

              <MarqueeSlider />
              <PricingSection />
              <Gallery />
              <ShoppingWebsite />
              <HomeMenComplete />
              <Tra />
              <KitchenAppliances />
              <ProductCard />
            </>
          }
        />
        <Route
          path="/Service"
          element={
            <>
              <HeroCarouselA />

              <MarqueeSlider />
              <PricingSection />
              <HomeMenComplete />

              <Service />
            </>
          }
        />

        <Route
          path="/electronics"
          element={
            <>
              <Men />
              <Service />
            </>
          }
        />
        <Route
          path="/About"
          element={
            <>
              <HeroCarouselD />

              <MarqueeSlider />
              <PricingSection />
              <ProductDetail />
              <Shopping1 />
              <HeroSection />
              <HomeMenComplete />
            </>
          }
        />
        <Route
          path="/Categories"
          element={
            <>
              <HeroCarouselC />
              {/* <HeroSection /> */}

              <MarqueeSlider />
              <PricingSection />
              <ShoppingSection />
            </>
          }
        />
        <Route
          path="/Contact"
          element={
            <>
              <HeroCarouselB />

              <MarqueeSlider />
              <PricingSection />
              <ContactPage />
            </>
          }
        />

        <Route path="/Electronics" element={<Electronics />} />
        <Route path="/Men" element={<Men />} />
        <Route path="/Women" element={<Women />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
