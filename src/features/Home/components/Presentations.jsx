import React from "react";
import "../styles/presentation.style.css";
import Headphones from "../../../components/icons/Headphones";
import Updates from "../../../components/icons/Updates";
import Design from "../../../components/icons/Design";

const presentation_icons = [
  {
    id: 1,
    icon: <Updates />,
    title: "Free updates",
    info: "It uses a dictionary of over 200 Latin the words, combined with a handful of model sentence with structure.",
  },
  {
    id: 2,
    icon: <Headphones />,
    title: "Easy to use",
    info: "It uses a dictionary of over 200 Latin the words, combined with a handful of model sentence with structure.",
  },
  {
    id: 3,
    icon: <Design />,
    title: "trendy design",
    info: "It uses a dictionary of over 200 Latin the words, combined with a handful of model sentence with structure.",
  },
];

const Landing2 = () => {
  return (
    <div className="presentation">
      {/* <h2 className="presentation_title">Beautiful presentations made easy.</h2> */}
      <h1 className="presentation_title">Beautiful presentations made easy.</h1>
      <p className="presentation_info">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do elusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <div className="presentation_icons">
        {presentation_icons.map((icon) => (
          <div className="presentation_icon" key={icon.id}>
            {icon.icon}
            <h2 className="presentation_icon__title">{icon.title}</h2>
            <p>{icon.info}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Landing2;
