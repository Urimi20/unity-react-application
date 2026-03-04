import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MemberDetail from "./pages/about/MemberDetail";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team/:memberId" element={<MemberDetail />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:slug" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

// KY RRESHT MUNGON OSE ËSHTË GABIM:
export default App;
