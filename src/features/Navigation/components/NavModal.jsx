import { Link } from "react-router-dom";
import "../navigation.style.css";

const NavModal = ({ onNavModal }) => {
  return (
    <div className="nav_modal" onClick={onNavModal}>
      <Link to={{ pathname: "/" }}>Home</Link>
      <Link to={{ pathname: "/offer" }}>Offer</Link>
      <Link to={{ pathname: "/order" }}>Order</Link>
      <Link to={{ pathname: "/about" }}>About</Link>
      <Link to={{ pathname: "/contact" }}>Contact</Link>
    </div>
  );
};

export default NavModal;
