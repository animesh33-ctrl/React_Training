import { useState } from "react";
import useProductStore from "../store/productStore";
import AddProduct from "./AddProduct";
import Product from "./Product";
import "../../src/index.css";

const ProductComp = () => {
  const [addPr, setAddPr] = useState(false);
  const { products } = useProductStore();
  return (
    <div className="productCmp">
      <h1 className="totalCost" style={{ fontSize: "4rem" }}>
        Product List
      </h1>
      <button onClick={() => setAddPr((prev) => !prev)}>Add Product</button>
      <h4
        style={{
          textAlign: "center",
          marginBottom: "1rem",
          fontSize: "2rem",
          fontFamily: "monospace",
        }}
      >
        Products
      </h4>
      <div className="product">
        {products.length === 0 ? (
          <h4>No Product Available</h4>
        ) : (
          products.map((product) => {
            return <Product key={product.id} product={product} />;
          })
        )}
      </div>

      {addPr && <AddProduct setAddPr={setAddPr} />}
    </div>
  );
};

export default ProductComp;
