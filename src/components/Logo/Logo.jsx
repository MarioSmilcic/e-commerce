import LogoCommerce from "../../assets/Logo_EC_full.png";
import "./logo.style.css";

const Logo = () => {
  return (
    <div>
      <img src={LogoCommerce} alt="logoApp" className="logo" />
    </div>
  );
};

export default Logo;
