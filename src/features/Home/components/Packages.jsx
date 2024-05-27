import "../styles/packages.style.css";
import PackageHeadphones from "../../../assets/headphonesBlack.png";
import Button from "../../../components/Button/Button";

const packages = [
  {
    id: 1,
    info: "Security Device with Monthly Service",
    title: "Simple",
    price: "19",
  },
  {
    id: 2,
    info: "Security Device with Monthly Service",
    title: "Standard",
    price: "29",
  },
  {
    id: 3,
    info: "Security Device with Monthly Service",
    title: "Best Offer",
    price: "39",
  },
];

const Packages = () => {
  return (
    <div className="packages">
      <h1>Our Packages</h1>
      <div className="packages_products">
        {packages.map((product) => (
          <div key={product.id} className="packages_product">
            <img
              src={PackageHeadphones}
              alt="headphones"
              className="packages_img"
            />
            <div className="packages_details">
              <h2 className="packages_title">{product.title}</h2>
              <p className="packages_info">{product.info}</p>
              <h2 className="packages_price">${product.price}</h2>
              <Button text="shop now" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;
