import "./button.style.css";

const Button = ({ text }) => {
  return (
    <div>
      <button
        className={`button ${text === "shop now" && "button_shop"} ${
          text === "get product information" && "button_information"
        }`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
