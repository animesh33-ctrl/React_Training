import { memo } from "react";
import "../../src/index.css";
import useProductStore from "../store/productStore";
import { IndianRupee } from "lucide-react";

const Product = ({ product }) => {
  const { removeProduct } = useProductStore();
  return (
    <div className="productCard">
      <div className="imgc">
        <img src={product.img} />
      </div>
      <div className="detailsc">
        <h3>{product.name}</h3>
        <h6>{product.category}</h6>
        <p>
          <IndianRupee className="rupee" size={20} />
          {product.price}
        </p>
        <p>{product.stock}</p>
      </div>
      <button onClick={() => removeProduct(product.id)}>Delete</button>
    </div>
  );
};

export default memo(Product);
