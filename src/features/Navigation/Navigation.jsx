import { Link } from "react-router-dom";
import "./navigation.style.css";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <h2>Ecommerce</h2>
        </div>
        <div className="links">
          <Link to={{ pathname: "/" }}>Home</Link>
          <Link to={{ pathname: "/offer" }}>Offer</Link>
          <Link to={{ pathname: "/order" }}>Order</Link>
          <Link to={{ pathname: "/about" }}>About</Link>
          <Link to={{ pathname: "/contact" }}>Contact</Link>
        </div>
        <div>
          <h3 className="navigation_cart">Cart</h3>
        </div>
      </div>
    </>
  );
};

export default Navigation;
