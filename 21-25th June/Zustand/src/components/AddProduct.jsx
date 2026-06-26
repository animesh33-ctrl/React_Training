import { useState } from "react";
import useProductStore from "../store/productStore";
import "../../src/index.css";

const AddProduct = ({ setAddPr }) => {
  const [data, setData] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const maxId = useProductStore((state) => state.getMaxId());
  const { addProducts } = useProductStore();

  const handleChange = (event) => {
    setData((prev) => {
      return { ...prev, [event.target.name]: event.target.value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newValue = {
      id: maxId + 1,
      ...data,
      img: `https://picsum.photos/200?random=${maxId + 1}`,
    };
    addProducts(newValue);
    alert("Data Submitted Succesfully!!");
    setData({
      name: "",
      price: "",
      category: "",
      stock: "",
    });
    setAddPr((prev) => !prev);
  };

  return (
    <div className="mainPr">
      <h3>AddProduct</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={data.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            name="price"
            id="price"
            value={data.price}
            onChange={handleChange}
          />
        </div>
        <select
          name="category"
          id="category"
          value={data.category}
          onChange={handleChange}
        >
          <option value="">Select Category</option>
          <option value="Accessories">Accessories</option>
          <option value="Storage">Storage</option>
          <option value="Display">Display</option>
          <option value="Audio">Audio</option>
        </select>
        <div>
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            name="stock"
            id="stock"
            value={data.stock}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddProduct;
