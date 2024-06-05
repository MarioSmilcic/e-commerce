import "./offer.style.css";
import { items } from "../../components/data/itemsData";
import Button from "../../components/Button/Button";

const Offer = () => {
  return (
    <div className="offer">
      {items.map((item) => (
        <div key={item.id} className="offer_item">
          <img src={item.image} alt="image" className="offer_img" />
          <div className="offer_item__title">
            <h3>{item.name}</h3>
            {/* <h3 className="offer_price"> */}
            <h3>
              <sup>$</sup>
              {item.price}
              {/* <sup>00</sup> */}
              <sup className="offer_price" />
            </h3>
          </div>
          <p>{item.description}</p>
          <Button text="Add to Cart" />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Offer;
