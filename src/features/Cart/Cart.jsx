import "./cart.style.css";
import { useOrderCartStore } from "../../store/orders/order.store";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Cart = () => {
  const {
    orders,
    removeItemFromOrderCart,
    increaseItemQuantity,
    decreaseItemQuantity,
    // clearOrderCart,
  } = useOrderCartStore();

  const navigate = useNavigate();

  useEffect(() => {
    if (!orders.length) {
      navigate("/offer");
    }
  }, [orders]);

  const handleRemoveItem = (id) => {
    removeItemFromOrderCart(id);
  };

  const total = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const itemTotalPrice = (item) => {
    const totalItemPrice = item.price * item.quantity;
    return totalItemPrice.toFixed(2);
  };

  return (
    <div className="cart">
      <div className="cart_container">
        <h2>Cart</h2>
        <hr className="cart_line" />
        <div className="cart_items">
          {orders.map((item) => (
            <div key={item.id} className="cart_item">
              <img src={item.image} alt="image" className="cart_item__image" />
              <div className="cart_item__info">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>

              <div className="cart_item__quantity">
                <span
                  className="quantity_function"
                  onClick={() => decreaseItemQuantity(item.id)}
                >
                  -
                </span>
                <span>{item.quantity}</span>
                <span
                  className="quantity_function"
                  onClick={() => increaseItemQuantity(item.id)}
                >
                  +
                </span>
              </div>

              <h3>${itemTotalPrice(item)}</h3>
              <img
                src="https://www.freeiconspng.com/thumbs/trash-can-icon/trash-can-icon-19.png"
                alt="trash"
                className="cart_trash"
                onClick={() => handleRemoveItem(item.id)}
              />
            </div>
          ))}
        </div>
        <hr className="cart_line" />
        <div className="cart_promocode">
          <input type="text" placeholder="Promocode" className="cart_input" />
          <div className="cart_promocode__apply">Apply</div>
        </div>
        <p className="cart_promocode__text">20% off discount</p>
        <hr className="cart_dashed" />
        <div>
          <div className="subtotal">
            <p>Subtotal</p>${total.toFixed(2)}
          </div>
          <div className="discount">
            <p>Discount</p>${}
          </div>
          <div className="discount">
            <p>Tax</p>${}
          </div>
        </div>
        <hr className="cart_dashed" />
        <div className="total">
          <p>Total</p> ${total.toFixed(2)}
        </div>
        <div className="cart_buttons">
          <Button text="Proceed to checkout" />
          <Button text="Continue shopping" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
