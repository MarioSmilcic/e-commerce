import { Link, useNavigate } from "react-router-dom";
import "./navigation.style.css";
import CartIcon from "../../components/CartIcon/CartIcon";
import Logo from "../../components/Logo/Logo";
import { useState } from "react";
import NavModal from "./components/NavModal";
import { useOrderCartStore } from "../../store/orders/order.store";
import Hamburger from "../../components/icons/Hamburger";
import Close from "../../components/icons/Close";

const Navigation = () => {
  const [showModal, setShowModal] = useState(false);
  const { orders } = useOrderCartStore();

  const handleModal = () => {
    setShowModal(!showModal);
  };

  const navigate = useNavigate();

  return (
    <>
      <div className="navigation_outer">
        <div className="navigation">
          <div className="logo">
            <Logo onNavigate={() => navigate("/")} />
          </div>
          <div className="links">
            <Link to={{ pathname: "/" }}>Home</Link>
            <Link to={{ pathname: "/offer" }}>Offer</Link>
            <Link to={{ pathname: "/order" }}>Order</Link>
            <Link to={{ pathname: "/about" }}>About</Link>
            <Link to={{ pathname: "/contact" }}>Contact</Link>
          </div>

          <div className="cart_hamburger">
            <div className="navigation_cart">
              {orders.length > 0 && (
                <>
                  <CartIcon />
                  <span className="orders_number">{orders.length}</span>
                </>
              )}
            </div>
            <div className="hamburger">
              {!showModal && <Hamburger onModal={handleModal} />}
              {showModal && <Close onClose={handleModal} />}
            </div>
          </div>
        </div>
        {showModal && <NavModal onNavModal={handleModal} />}
      </div>
    </>
  );
};

export default Navigation;
