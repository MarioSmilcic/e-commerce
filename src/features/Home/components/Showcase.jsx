import "../styles/showcase.style.css";
import Button from "../../../components/Button/Button";
import ShowcaseHeadphones from "../../../assets/headphonesBlack.png";

const Showcase = () => {
  return (
    <div className="showcase">
      <div className="showcase_info">
        <h1>SHOWCASE APPS, INNOVATIVE TECH OR BUSINESSES.</h1>
        <h3>
          Never be without the product you need! Sign up today to save money and
          time. Cancel anytime.
        </h3>
        <Button text="Order Now" />
      </div>
      <div className="showcase_headphones">
        <img
          src={ShowcaseHeadphones}
          alt="headphones"
          className="showcase_headphones__img"
        />
      </div>
    </div>
  );
};

export default Showcase;
