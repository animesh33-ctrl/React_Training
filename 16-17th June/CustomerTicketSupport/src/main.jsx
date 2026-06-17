import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import App from "./App.jsx";
import ticketStore from "./store/ticketStore.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <Provider store={ticketStore}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
);
