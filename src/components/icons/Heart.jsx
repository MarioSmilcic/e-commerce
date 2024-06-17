import "../icons/styles/heart.style.css";

const Heart = ({ color, stroke, handleClick }) => {
  return (
    <div className="heart_icon" onClick={handleClick}>
      <svg
        viewBox="0 0 256 256"
        xmlns="http://www.w3.org/2000/svg"
        width="25px"
      >
        <rect fill="none" height="256" width="256" />
        <path
          d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z"
          opacity="0.2"
        />
        <path
          d="M133.7,211.9l81-81c19.9-20,22.8-52.7,4-73.6a52,52,0,0,0-75.5-2.1L128,70.5,114.9,57.3c-20-19.9-52.7-22.8-73.6-4a52,52,0,0,0-2.1,75.5l83.1,83.1A8.1,8.1,0,0,0,133.7,211.9Z"
          fill={color}
          stroke={stroke}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </svg>
    </div>
  );
};

export default Heart;
