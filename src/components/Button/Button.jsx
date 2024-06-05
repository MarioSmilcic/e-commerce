import "./button.style.css";

const Button = ({ text }) => {
  return (
    <div>
      <button
        className={`button ${text === "shop now" && "button_shop"} ${
          text === "get product information" && "button_information"
        } ${text === "Submit your request" && "button_contact"} ${
          text === "Add to Cart" && "button_item"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
