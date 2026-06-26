import { useWishList } from "../store/productStore";
import styles from "./modulecss/WishList.module.css";
import WishListCard from "./WishListCard";

const WishList = () => {
  const { wishlist, removeWishList } = useWishList();

  const totalCost = wishlist.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className={styles.wishList}>
      <h2>WishList</h2>

      <div>
        {wishlist.length === 0 ? (
          <h4>No Products in WishList</h4>
        ) : (
          <div>
            <h4>Total Cost: {totalCost.toLocaleString("en-IN")}</h4>

            {wishlist.map((pr) => (
              <WishListCard
                key={pr.id}
                pr={pr}
                removeWishList={removeWishList}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishList;
