import Button from "../../../components/Button/Button";
import "../styles/landing.style.css";
import Headphones from "../../../assets/headphonesBlack.png";
import CommercialIcons from "./CommercialIcons";

const Landing = () => {
  return (
    <>
      <div className="landing_outer">
        <div className="landing_info">
          <div>
            <h1 className="landing_heading">
              Fresh Beautiful. <br />
              Innovative
            </h1>
            {/* <h1 className="landing_heading">Innovative.</h1> */}
          </div>
          <hr className="landing_line" />
          <p className="landing_text">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour
          </p>
          <Button text="Order now" />
        </div>
        <div>
          <img src={Headphones} alt="slusalice" className="landing_headpones" />
        </div>
      </div>
      <CommercialIcons />
    </>
  );
};

export default Landing;
