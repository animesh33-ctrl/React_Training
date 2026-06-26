import { memo } from "react";
import "../../src/index.css";
import useProductStore, { useCart } from "../store/productStore";
import { IndianRupee } from "lucide-react";

const Product = ({ product }) => {
  const { removeProduct } = useProductStore();
  const { addToCart } = useCart();

  return (
    <div className="productCard">
      <div className="imgc">
        <img src={product.img} />
      </div>
      <div className="detailsc">
        <h3>{product.name}</h3>
        <h6>{product.category}</h6>
        <p style={{ gap: "0px" }}>
          <IndianRupee className="rupee" size={20} />
          {product.price.toLocaleString("en-IN")}
        </p>
        <p>Stock: {product.stock}</p>
      </div>
      <div
        style={{
          display: "flex",
          gap: "0.5rem",
          padding: "0 1rem 1rem",
          flexWrap: "wrap",
        }}
      >
        <button
          className="btn-delete"
          onClick={() => removeProduct(product.id)}
        >
          🗑 Delete
        </button>
        <button
          className="btn-cart"
          onClick={() => addToCart({ ...product, quantity: 1 })}
        >
          🛒 Add to Cart
        </button>
      </div>
    </div>
  );
};

export default memo(Product);
