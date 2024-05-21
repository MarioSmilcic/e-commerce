import { Link } from "react-router-dom";
import "./navigation.style.css";
import CartIcon from "../../components/CartIcon/CartIcon";
import Logo from "../../components/Logo/Logo";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <div className="logo">
          <Logo />
        </div>
        <div className="links">
          <Link to={{ pathname: "/" }}>Home</Link>
          <Link to={{ pathname: "/offer" }}>Offer</Link>
          <Link to={{ pathname: "/order" }}>Order</Link>
          <Link to={{ pathname: "/about" }}>About</Link>
          <Link to={{ pathname: "/contact" }}>Contact</Link>
        </div>

        <div className="navigation_cart">
          <CartIcon />
        </div>
      </div>
    </>
  );
};

export default Navigation;
