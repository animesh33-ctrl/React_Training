// import MyCounter from "./components/MyCounter";
import Cart from "./components/Cart";
import ProductComp from "./components/ProductComp";
import WishList from "./components/WishList";
import "./index.css";

const App = () => {
  return (
    <div className="appComp">
      {/* <h2>App Comp</h2>*/}
      {/* <MyCounter /> */}
      <ProductComp />
      <div className="wishcard">
        <Cart />
        <WishList />
      </div>
    </div>
  );
};

export default App;
