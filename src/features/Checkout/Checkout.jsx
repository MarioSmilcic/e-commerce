import "./checkout.style.css";
import Padlock from "../../components/icons/Padlock";
import Button from "../../components/Button/Button";
import { useState } from "react";

const Checkout = () => {
  const [isShown, setIsShown] = useState(false);
  return (
    <div className="checkout">
      <div className="checkout_outer">
        <div className="checkout_container">
          <h4>Delivery Address</h4>
          <div className="input_block">
            <input
              type="text"
              required
              placeholder="* First Name"
              id="firstName"
              name="firstName"
              className="checkout_input"
            />
            <input
              type="text"
              required
              placeholder="* Last Name"
              id="lastName"
              name="lastName"
              className="checkout_input"
            />
          </div>
          <div className="checkout-company">
            {!isShown && (
              <p
                className="checkout-company_name"
                onClick={() => setIsShown(!isShown)}
              >
                + add your company name
              </p>
            )}
            {isShown && (
              <input
                type="text"
                placeholder="Add Your Company Name"
                className="input_full"
              />
            )}
          </div>
          <input
            type="text"
            placeholder="* Street Adress"
            className="input_full"
            id="street"
            required
          />
          <input
            type="text"
            placeholder="Apt/Suite/Floor (Optional)"
            className="input_full"
            id="apt"
          />
          <div className="input_place">
            <input
              type="text"
              placeholder="* City"
              id="city"
              required
              className="input_place-city"
            />

            <select
              name="State"
              className="select_place-state"
              //   id="state"
            >
              <option value="0">State</option>
              <option value="1">BiH</option>
              <option value="2">Serbia</option>
              <option value="3">Croatia</option>
              <option value="4">Montenegro</option>
              <option value="5">Slovenia</option>
              <option value="5">Macedonia</option>
            </select>
            <input
              type="text"
              placeholder="* Zip Code"
              required
              className="input_place-zip"
              id="zip"
            />
          </div>
          <div className="checkbox_container">
            <input type="checkbox" className="input_checkbox" id="billing" />
            <p>Use as billing adress</p>
          </div>
        </div>
        <div className="checkout_container">
          <h4>Contact Info</h4>
          <div className="input_block">
            <input
              type="text"
              placeholder="* Email for Order Tracking"
              id="email"
              className="checkout_input"
            />
            <input
              type="text"
              placeholder="* Phone for Delivery Contact"
              id="phone"
              className="checkout_input"
            />
          </div>
          <div className="privacy">
            <Padlock />
            <div>
              <p>
                Your privacy is important to us. View our privacy policy here.
                We'll only contact you if there's an issue with your order.
              </p>
              <h4>
                We'll also look for coupons associated with your email and phone
                number
              </h4>
            </div>
          </div>
          <div className="checkbox_container">
            <input type="checkbox" className="input_checkbox" id="alerts" />
            <p>Get text alets for your order on your mobile</p>
          </div>
        </div>
        <div className="checkout-button_container">
          <Button text="Proceed to Savings & Payments" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
