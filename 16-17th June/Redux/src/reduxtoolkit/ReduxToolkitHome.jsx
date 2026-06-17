import BookContainer from "./BookContainer";
import BookStore from "./BookStore";

import { Provider } from "react-redux";

export default function ReduxToolkitHome() {
  return (
    <Provider store={BookStore}>
      <div>
        <BookContainer />
      </div>
    </Provider>
  );
}
