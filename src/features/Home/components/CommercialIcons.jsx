import "../styles/commercial.style.css";
import "../../../components/commercialIcons";
import { commercialIcons } from "../../../components/commercialIcons";

const CommercialIcons = () => {
  return (
    <div className="commercial_icons">
      {commercialIcons.map((icon) => (
        <img className="commercial_icon" key={icon.id} src={icon.imgSrc} />
      ))}
    </div>
  );
};

export default CommercialIcons;
