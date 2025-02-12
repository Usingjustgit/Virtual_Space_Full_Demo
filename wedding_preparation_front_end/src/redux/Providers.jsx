import React from "react";
import { Provider } from "react-redux";
import App from "../App";
import { store } from "./store";
import { BrowserRouter } from "react-router-dom";

const Providers = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
};

export default Providers;
