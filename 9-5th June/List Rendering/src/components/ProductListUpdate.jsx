import React, { useState } from "react";

const ProductListUpdate = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Laptop",
      price: 50000,
      inStock: true,
      reviews: {
        rating: 4.5,
        totalReviews: 120,
        latestReview: "Excellent performance and battery life.",
      },
    },
    {
      id: 2,
      name: "Mobile",
      price: 20000,
      inStock: false,
      reviews: {
        rating: 4.2,
        totalReviews: 89,
        latestReview: "Good value for money.",
      },
    },
    {
      id: 3,
      name: "Headphones",
      price: 3000,
      inStock: true,
      reviews: {
        rating: 4.7,
        totalReviews: 250,
        latestReview: "Amazing sound quality.",
      },
    },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSave = () => {
    const updatedProducts = products.map((product) =>
      product.id === selectedProduct.id ? selectedProduct : product,
    );

    setProducts(updatedProducts);
    setIsEditing(false);
  };

  return (
    <div className="min-h-full min-w-[40%] flex flex-col items-center bg-red-900 font-serif text-white rounded-xl">
      <h1 className="text-4xl py-3">Product Dashboard</h1>

      <div className="flex items-center justify-center rounded-xl mb-9 gap-6 bg-white/10 min-h-40  min-w-120">
        {products.map((product) => (
        <div
          key={product.id}
          onClick={() => {
            setSelectedProduct(product);
            setIsEditing(false);
          }}
          className="h-24 w-32 bg-white/30 p-4 rounded-xl cursor-pointer hover:-translate-y-2 transition duration-300 hover:scale-[1.08]"
        >
          <h2>{product.name}</h2>
          <p>Rs. {product.price}</p>
          <p>{product.inStock ? "In Stock" : "Out of Stock"}</p>
        </div>
      ))}
      </div>

      {selectedProduct && (
        <div>
          <h2>Product Details</h2>

          {!isEditing ? (
            <>
              <p>Name: {selectedProduct.name}</p>

              <p>Price: ₹{selectedProduct.price}</p>

              <p>
                Status:
                {selectedProduct.inStock ? " In Stock" : " Out of Stock"}
              </p>

              <p>Rating: {selectedProduct.reviews.rating}</p>

              <p>
                Total Reviews:
                {selectedProduct.reviews.totalReviews}
              </p>

              <p>
                Latest Review:
                {selectedProduct.reviews.latestReview}
              </p>

              <button onClick={() => setIsEditing(true)}>Edit</button>
            </>
          ) : (
            <>
              <input
                type="text"
                value={selectedProduct.name}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    name: e.target.value,
                  })
                }
                placeholder="Product Name"
              />

              <br />
              <br />

              <input
                type="number"
                value={selectedProduct.price}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    price: Number(e.target.value),
                  })
                }
                placeholder="Price"
              />

              <br />
              <br />

              <input
                type="number"
                value={selectedProduct.reviews.rating}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    reviews: {
                      ...selectedProduct.reviews,
                      rating: Number(e.target.value),
                    },
                  })
                }
                placeholder="Rating"
              />

              <br />
              <br />

              <input
                type="text"
                value={selectedProduct.reviews.latestReview}
                onChange={(e) =>
                  setSelectedProduct({
                    ...selectedProduct,
                    reviews: {
                      ...selectedProduct.reviews,
                      latestReview: e.target.value,
                    },
                  })
                }
                placeholder="Latest Review"
              />

              <br />
              <br />

              <label>
                <input
                  type="checkbox"
                  checked={selectedProduct.inStock}
                  onChange={(e) =>
                    setSelectedProduct({
                      ...selectedProduct,
                      inStock: e.target.checked,
                    })
                  }
                />
                In Stock
              </label>

              <br />
              <br />

              <button onClick={handleSave}>Save</button>

              <button onClick={() => setIsEditing(false)}>Cancel</button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductListUpdate;
