const ProductList = () => {
  const productList = [
    { id: 1, name: "Laptop", price: 50000, inStock: true },
    { id: 2, name: "Mobile", price: 20000, inStock: false },
    { id: 3, name: "Headphones", price: 3000, inStock: true },
  ];

  const renderProduct = productList.map((item) => (
    <div
      key={item.id}
      className="grid grid-cols-3 items-center bg-white/10 rounded-xl p-4 text-white transition-all duration-300 hover:bg-white/20 hover:scale-[1.02]"
    >
      <p className="font-medium">{item.name}</p>
      <p className="text-center font-semibold">Rs. {item.price}</p>
      <div className="flex justify-end">
        {item.inStock ? (
          <button className="px-4 py-2 rounded-lg bg-green-500 hover:bg-green-600 hover:-translate-y-1.25 transition duration-200 cursor-pointer">
            Add to Cart
          </button>
        ) : (
          <span className="px-4 py-2 rounded-lg bg-red-500/20 text-red-200">
            {" "}
            Out of Stock
          </span>
        )}
      </div>
    </div>
  ));

  return (
    <div className="w-[90%] max-w-3xl rounded-3xl bg-white/20 backdrop-blur-lg border border-white/30 shadow-2xl p-6">
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Product List{" "}
      </h2>

      <div className="grid grid-cols-3 bg-white/20 rounded-xl p-4 font-semibold text-white">
        <p>Name</p>
        <p className="text-center">Price</p>
        <p className="text-right">Action</p>
      </div>

      <div className="mt-4 space-y-3">{renderProduct}</div>
    </div>
  );
};

export default ProductList;
