import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import About from "./About.js";
import Products from "./Products.js";
import Contact from "./Contact.js";
import SingleProduct from "./SingleProduct.js";
import Cart from "./Cart.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Error from "./Error.js";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/singleproduct/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
