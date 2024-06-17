import "./offer.style.css";
import { items } from "../../components/data/itemsData";
import Button from "../../components/Button/Button";
import { useOrderCartStore } from "../../store/orders/order.store";
import Heart from "../../components/icons/Heart";
import { useState } from "react";

const Offer = () => {
  const [isLikedItem, setIsLikedItem] = useState(false);
  const { addItemToOrderCart } = useOrderCartStore();
  const handleOrder = (item) => {
    addItemToOrderCart(item);
  };

  const handleIsLiked = (item) => {
    item.isLiked = !item.isLiked;
    setIsLikedItem(!isLikedItem);
    // console.log(item.isLiked, item.id);
  };

  return (
    <div className="offer">
      {items.map((item) => (
        <div key={item.id} className="offer_item">
          <div className="offer_img-container">
            <Heart
              handleClick={() => handleIsLiked(item)}
              color={item.isLiked ? "#8f5db7" : "white"}
              stroke={item.isLiked ? "" : "#000"}
            />
            <img src={item.image} alt="image" className="offer_img" />
          </div>
          <div className="offer_item__title">
            <h3>{item.name}</h3>
            <h3>
              <sup>$</sup>
              {item.price}
              <sup className="offer_price" />
            </h3>
          </div>
          <p>{item.description}</p>
          <Button text="Add to Cart" handleClick={() => handleOrder(item)} />
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Offer;
