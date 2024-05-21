import "./button.style.css";

const Button = ({ text }) => {
  return (
    <div>
      <button className="button">{text}</button>
    </div>
  );
};

export default Button;
