import "./cart.style.css";
import { useOrderCartStore } from "../../store/orders/order.store";
import Button from "../../components/Button/Button";

const Cart = () => {
  const { orders } = useOrderCartStore();
  console.log(orders);

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
                <span className="quantity_function">-</span>
                <span>{1}</span>
                <span className="quantity_function">+</span>
              </div>

              <h3>${item.price}</h3>
              <img
                src="https://www.freeiconspng.com/thumbs/trash-can-icon/trash-can-icon-19.png"
                alt="trash"
                className="cart_trash"
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
            <p>Subtotal</p>${Math.random()}
          </div>
          <div className="discount">
            <p>Discount</p>${Math.random()}
          </div>
          <div className="discount">
            <p>Tax</p>${Math.random()}
          </div>
        </div>
        <hr className="cart_dashed" />
        <div className="total">
          <p>Total</p> ${Math.random()}
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
