import { Provider } from "react-redux";
// import BookContainer from "./components/BookContainer";
import Store from "./components/Store";
import ReduxToolkitHome from "./reduxtoolkit/ReduxToolkitHome";

export default function App() {
  return (
    <Provider store={Store}>
      <div>
        {/* <BookContainer /> */}
        <ReduxToolkitHome />
      </div>
    </Provider>
  );
}
