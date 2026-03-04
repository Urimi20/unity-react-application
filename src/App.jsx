import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import MemberDetail from "./pages/about/MemberDetail";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/team/:memberId" element={<MemberDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

// KY RRESHT MUNGON OSE ËSHTË GABIM:
export default App;
