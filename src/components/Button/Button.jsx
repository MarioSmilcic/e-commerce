import "./button.style.css";

const Button = ({ text, handleClick }) => {
  let color;

  switch (text) {
    case "shop now":
      color = "button_shop";
      break;
    case "get product information":
      color = "button_information";
      break;
    case "Submit your request":
      color = "button_contact";
      break;
    case "Add to Cart":
      color = "button_item";
      break;
    case "Proceed to checkout":
      color = "button_cart";
      break;
    case "Continue shopping":
      color = "button_cart";
      break;

    default:
      color = "button";
  }

  return (
    <div>
      <button onClick={handleClick} className={`button ${color}`}>
        {text}
      </button>
    </div>
  );
};

export default Button;
