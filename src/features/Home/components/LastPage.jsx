import Headphones from "../../../assets/headphonesBlack.png";
import Button from "../../../components/Button/Button";
import "../styles/lastPage.style.css";

const LastPage = () => {
  return (
    <>
      <div className="lastPage">
        <div className="lastPage_outer">
          <div className="lastPage_info">
            <div>
              <h1 className="lastPage_heading">Fresh Beautiful.</h1>
              <h1 className="lastPage_heading">Innovative.</h1>
            </div>
            <hr className="lastPage_line" />
            <p>
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour
            </p>
            <Button text="Order now" />
          </div>
          <div>
            <img
              src={Headphones}
              alt="slusalice"
              className="lastPage_headphones"
            />
          </div>
        </div>
        {/* <p className="footer">
          Copyright © domainname.com. All Rights Reserved | Designed by:
          buylandingpagedesign.com
        </p> */}
      </div>
    </>
  );
};

export default LastPage;
