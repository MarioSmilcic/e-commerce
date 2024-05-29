import "../styles/productInformation.styles.css";
import Button from "../../../components/Button/Button";

const ProductInformation = () => {
  return (
    <div className="productInformation">
      <div className="productInformation_title">
        <h2 className="productInformation_heading">Product information</h2>
        <div className="productInformation_action">
          <input
            type="email"
            placeholder="Enter Your Email Here"
            className="productInformation_input"
            id="email"
            autoComplete="off"
          />
          <Button text="get product information" />
        </div>
      </div>
      <h2 className="productInformation_heading">Feature your best sellers.</h2>
      <p className="productInformation_info">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
        pariatur, eligendi aperiam, nam molestiae illum ullam deserunt ipsa
        error enim vel necessitatibus, magni suscipit modi delectus ipsum quis
        facere. Possimus culpa autem similique dolore nesciunt placeat, ullam
        perferendis odio iure.
      </p>
      <ul className="productInformation_list">
        <li>It uses a dictionary of over Latin words as necessary</li>
        <li>Combined with hanful of model sentence structure lorem</li>
        <li>Lorem ipsum which looks reasonable a hanful</li>
        <li>It uses a dictionary of over Latin words as necessary</li>
        <li>Combined with hanful of model sentence structure lorem</li>
        <li>Lorem ipsum which looks reasonable a hanful</li>
      </ul>
    </div>
  );
};

export default ProductInformation;
