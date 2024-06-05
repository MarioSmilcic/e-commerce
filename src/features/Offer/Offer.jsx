import "./offer.style.css";
import { items } from "../../components/data/itemsData";
import Button from "../../components/Button/Button";
import { useOrderCartStore } from "../../store/orders/order.store";

const Offer = () => {
  const { addItemToOrderCart } = useOrderCartStore();
  const handleOrder = (item) => {
    addItemToOrderCart(item);
  };

  return (
    <div className="offer">
      {items.map((item) => (
        <div key={item.id} className="offer_item">
          <img src={item.image} alt="image" className="offer_img" />
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
