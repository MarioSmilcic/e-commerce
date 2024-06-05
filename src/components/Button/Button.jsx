import "./button.style.css";

const Button = ({ text, handleClick }) => {
  return (
    <div>
      <button
        onClick={handleClick}
        className={`button ${text === "shop now" && "button_shop"} ${
          text === "get product information" && "button_information"
        } ${text === "Submit your request" && "button_contact"} ${
          text === "Add to Cart" && "button_item"
        } ${text === "Proceed to checkout" && "button_cart"}
        ${text === "Continue shopping" && "button_cart"}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
