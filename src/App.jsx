import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navigation from "./features/Navigation/Navigation";
import Home from "../src/features/Home/Home";
import Offer from "./features/Offer/Offer";
import Order from "./features/Order/Order";
import About from "./features/About/About";
import Contact from "./features/Contact/Contact";
import Cart from "./features/Cart/Cart";
import { useColorStore } from "./store/backgoundColor/color.store";
// import { useEffect } from "react";

const App = () => {
  // const { backgroundColor, setBackgroundColor } = useColorStore();

  // const getBackgroundColor = (path) => {
  //   switch (path) {
  //     case "/":
  //       return "#047a9c";
  //     case "/offer":
  //       return "white";
  //     case "/contact":
  //       return "lightgreen";
  //     case "/cart":
  //       return "#e5e4e2";

  //   }
  // };
  // const backgroundColor = getBackgroundColor(location.pathname);

  return (
    <>
      {/* <div style={{ background: backgroundColor }}> */}
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offer" element={<Offer />} />
          <Route path="/order" element={<Order />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
      {/* </div> */}
    </>
  );
};

export default App;
