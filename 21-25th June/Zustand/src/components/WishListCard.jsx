const WishListCard = ({ pr, removeWishList }) => {
  return (
    <div className="wishlistCard">
      <div>
        <h4>{pr.name}</h4>
        <p>₹ {pr.price.toLocaleString("en-IN")}</p>
      </div>
      <button
        style={{ marginTop: "2rem" }}
        onClick={() => removeWishList(pr.id)}
      >
        Remove
      </button>
    </div>
  );
};

export default WishListCard;
