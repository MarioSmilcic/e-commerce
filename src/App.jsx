import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import Home from "../src/features/Home/Home";
import Offer from "./features/Offer/Offer";
import Order from "./features/Order/Order";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Cart from "./features/Cart/Cart";
import Checkout from "./features/Checkout/Checkout";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
