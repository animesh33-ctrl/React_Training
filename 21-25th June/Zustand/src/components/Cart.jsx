import { useCart, useWishList } from "../store/productStore";
import styles from "./modulecss/Cart.module.css";
import styles2 from "./modulecss/WishList.module.css";

const Cart = () => {
  const { cart, removeFromCart, changeQuantity } = useCart();
  const { addWistList } = useWishList();
  const total = cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <div className={styles2.wishList}>
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <h4 style={{ textAlign: "center", opacity: 0.6 }}>
          No Products in Cart
        </h4>
      ) : (
        <div>
          <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
            Total: ₹{total.toLocaleString("en-IN")}
          </h4>
          {cart.map((product) => (
            <div key={product.id} className={styles.cartCard}>
              <div className={styles.cartInfo}>
                <h4>{product.name}</h4>
                <span className={styles.cartCategory}>{product.category}</span>
                <p className={styles.cartPrice}>
                  ₹{(product.price * product.quantity).toLocaleString("en-IN")}
                </p>
              </div>
              <div className={styles.cartActions}>
                <div className={styles.cartButton}>
                  <span
                    onClick={() => {
                      if (product.quantity <= 1)
                        alert("Quantity can't be less than 1");
                      else changeQuantity(product.id, -1);
                    }}
                  >
                    −
                  </span>
                  <p>{product.quantity}</p>
                  <span
                    onClick={() => {
                      if (product.quantity === product.stock)
                        alert("Max Quantity Reached!!");
                      else changeQuantity(product.id, +1);
                    }}
                  >
                    +
                  </span>
                </div>
                <div className={styles.cartBtns}>
                  <button
                    className={styles.removeBtn}
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                  <button
                    className={styles.wishBtn}
                    onClick={() => {
                      addWistList(product);
                      removeFromCart(product.id);
                    }}
                  >
                    ♡ Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
