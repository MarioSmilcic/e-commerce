import LogoCommerce from "../../assets/Logo_EC_full.png";
import "./logo.style.css";

const Logo = ({ onNavigate }) => {
  return (
    <div>
      <img
        src={LogoCommerce}
        alt="logoApp"
        className="logo"
        onClick={onNavigate}
      />
    </div>
  );
};

export default Logo;
